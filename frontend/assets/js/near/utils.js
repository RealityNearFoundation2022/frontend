/* eslint-disable camelcase */
import { connect, Contract, keyStores, WalletConnection } from 'near-api-js'
import getConfig from './config'

const nearConfig = getConfig(process.env.NODE_ENV || 'development')

// ContractName -> NFT Contract
// ContractMarket -> Marketplace Contract

// Initialize contract & set global variables
export async function initContract() {
  // Initialize connection to the NEAR testnet
  const near = await connect({
    deps: { keyStore: new keyStores.BrowserLocalStorageKeyStore() },
    ...nearConfig,
  })

  // Initializing Wallet based Account. It can work with NEAR testnet wallet that
  // is hosted at https://wallet.testnet.near.org
  window.walletConnection = new WalletConnection(near)

  // Getting the Account ID. If still unauthorized, it's just empty string
  window.accountId = window.walletConnection.getAccountId()

  // Initializing our contract APIs by contract name and configuration
  window.contract = await new Contract(
    window.walletConnection.account(),
    nearConfig.contractName,
    {
      // View methods are read only. They don't modify the state, but usually return some value.
      // viewMethods: ['get_greeting'],
      viewMethods: ['get_greeting', 'nft_tokens', 'nft_tokens_for_owner'],
      // Change methods can modify the state. But you don't receive the returned value when called.
      // changeMethods: ['set_greeting'],
      changeMethods: [
        'set_greeting',
        'new_default_meta',
        'nft_mint',
        'nft_approve',
      ],
    },
  )

  window.mkpcontract = await new Contract(
    window.walletConnection.account(),
    nearConfig.contractMarketplace,
    {
      viewMethods: ['get_sales_by_nft_contract_id', 'storage_minimum_balance'],
      changeMethods: ['storage_deposit', 'offer'],
    },
  )

  window.ftcontract = await new Contract(
    window.walletConnection.account(),
    nearConfig.contractToken,
    {
      viewMethods: ['ft_balance_of', 'ft_total_supply'],
      changeMethods: ['storage_deposit', 'ft_transfer', 'ft_transfer_call'],
    },
  )


  window.factorynft = await new Contract(
    window.walletConnection.account(),
    nearConfig.contractFactoryNFT,
    {
      viewMethods: ['get_token', 'get_tokens', 'get_number_of_tokens', 'get_required_deposit'],
      changeMethods: ['create_token', 'storage_deposit'],
    }
  )
}

export function logout() {
  window.walletConnection.signOut()
  // reload page
  window.location.replace(window.location.origin + window.location.pathname)
}

export function login() {
  // Allow the current app to make calls to the specified contract on the
  // user's behalf.
  // This works by creating a new access key for the user's account and storing
  // the private key in localStorage.
  window.walletConnection.requestSignIn(nearConfig.contractName)
}

export async function set_greeting(message) {
  const response = await window.contract.set_greeting({
    args: { message },
  })
  return response
}

export async function get_greeting() {
  const greeting = await window.contract.get_greeting()
  return greeting
}

// NFT

export async function nft_tokens(from_index, limit) {
  const nft_t = await window.contract.nft_tokens({ from_index, limit })
  return nft_t
}

export async function nft_tokens_for_owner(account_id, from_index, limit) {
  const nft_t_o = await window.contract.nft_tokens_for_owner({
    account_id,
    from_index,
    limit,
  })
  return nft_t_o
}

export async function nft_approve(
  token_id,
  account_id,
  sale_conditions,
  amount,
) {
  await window.contract.nft_approve({
    args: {
      token_id,
      account_id,
      msg: JSON.stringify(sale_conditions),
    },
    amount,
  })
}

export async function nft_mint(
  token_id,
  description,
  asset_url,
  gas,
  current_user,
  amount,
) {
  const fc = await window.contract.nft_mint({
    args: {
      token_id,
      metadata: {
        title: token_id,
        description,
        media: asset_url,
      },
      receiver_id: current_user,
    },
    gas,
    amount,
  })

  return fc
}

// MARKETPLACE

export async function get_sales_by_nft_contract_id(
  nft_contract_id,
  from_index = '0',
  limit = 64,
) {
  const sales = await window.mkpcontract.get_sales_by_nft_contract_id({
    nft_contract_id,
    from_index,
    limit,
  })
  return sales
}

export async function storage_minimum_balance() {
  const storage = await window.mkpcontract.storage_minimum_balance()
  return storage
}

export async function storage_deposit(account_id, minimum, gas) {
  await window.mkpcontract.storage_deposit({
    args: {
      account_id,
    },
    gas,
    amount: minimum || '10000000000000000000000',
  })
}

export async function offer(nft_contract, token_id, amount, gas) {
  await window.mkpcontract.offer({
    args: {
      nft_contract_id: nft_contract,
      token_id,
    },
    amount,
    gas,
  })
}

// TOKEN

export async function ft_balance_of(account_id) {
  const balance = await window.ftcontract.ft_balance_of({
    account_id,
  })
  return balance
}

export async function ft_total_supply() {
  const total = await window.ftcontract.ft_total_supply()
  return total
}

export async function storage_deposit_ft(account_id, minimum, gas) {
  await window.ftcontract.storage_deposit({
    args: {
      account_id,
    },
    gas,
    amount: minimum || '10000000000000000000000',
  })
}

export async function ft_transfer(receiver_id, amount) {
  await window.ftcontract.ft_transfer({
    args: {
      receiver_id,
      amount,
    },
    amount: '10000000',
  })
}

// FACTORY

export async function get_tokens(
  from_index = '0',
  limit = 64) {
  const tokens = await window.factorynft.get_tokens({
    from_index, limit
  })
  return tokens;
}


export async function get_token(token_id){
  const token = await window.factorynft.get_token({
    token_id
  })
  return token;
}

export async function get_number_of_tokens() {
  const number = await window.factorynft.get_number_of_tokens();
  return number;
}

/**
 * {
 *  "args": {
         "owner_id": "$ID",
         "metadata": {
            "spec": "nft-1.0.0",
            "name": "#1", #number land = #1
            "symbol": "R1", #symbol = R1
            "icon": "data:image/svg+xml,%3C…",
            "reference": "https://example.com/wbtc.json",
            "reference_hash": "AK3YRHqKhCJNmKfV6SrutnlWW/icN5J8NUPtKsNXR1M="
         },
        "x": "1",
        "y": "2"
    },
    "account_id": "guxal.testnet"
  }

 * @param {*} args 
 * @param {*} account_id 
 */
export async function get_required_deposit(args, account_id) {
  await window.factorynft.get_required_deposit({
    args: {
      args: args,
      account_id: account_id
    }
  })
}

/**
 * "args": {
      "owner_id": "guxal.testnet",
      "metadata": {
         "spec": "nft-1.0.0",
         "name": "#1",
         "symbol": "R1",
         "icon": "data:image/svg+xml,%3C…",
         "reference": "https://example.com/wbtc.json",
         "reference_hash": "AK3YRHqKhCJNmKfV6SrutnlWW/icN5J8NUPtKsNXR1M="
      },
      "x": "1",
      "y": "2"
  }

  gas example: 300000000000000
 */
export async function create_token(args) {
  await window.factorynft.create_token({
    args: {
      args: args
    },
    gas,
    amount,
  })
}


export async function storage_deposit() {await window.ftcontract.storage_deposit({
  args: {},
  gas,
  amount: minimum || '10000000000000000000000',
})

}
