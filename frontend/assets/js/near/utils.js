import { connect, Contract, keyStores, WalletConnection } from 'near-api-js'
import getConfig from './config'

const nearConfig = getConfig(process.env.NODE_ENV || 'development')

// ContractName -> NFT Contract
// ContractMarket -> Marketplace Contract


// Initialize contract & set global variables
export async function initContract() {
  // Initialize connection to the NEAR testnet
  const near = await connect(Object.assign({ deps: { keyStore: new keyStores.BrowserLocalStorageKeyStore() } }, nearConfig))

  // Initializing Wallet based Account. It can work with NEAR testnet wallet that
  // is hosted at https://wallet.testnet.near.org
  window.walletConnection = new WalletConnection(near)

  // Getting the Account ID. If still unauthorized, it's just empty string
  window.accountId = window.walletConnection.getAccountId()

  // Initializing our contract APIs by contract name and configuration
  window.contract = await new Contract(window.walletConnection.account(), nearConfig.contractName, {
    // View methods are read only. They don't modify the state, but usually return some value.
    //viewMethods: ['get_greeting'],
    viewMethods: ['get_greeting', 'nft_tokens', 'nft_tokens_for_owner'],
    // Change methods can modify the state. But you don't receive the returned value when called.
    //changeMethods: ['set_greeting'],
    changeMethods: ['set_greeting','new_default_meta', 'nft_mint', 'nft_approve'],
  })

  window.mkpcontract = await new Contract(window.walletConnection.account(), nearConfig.contractMarketplace, {
    viewMethods: ['get_sales_by_nft_contract_id', 'storage_minimum_balance'],
    changeMethods: ['storage_deposit', 'offer'],
  })

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

export async function set_greeting(message){
  let response = await window.contract.set_greeting({
    args:{message: message}
  })
  return response
}

export async function get_greeting(){
  let greeting = await window.contract.get_greeting()
  return greeting
}

// NFT

export async function nft_tokens(from_index, limit){
  let nft_t = await window.contract.nft_tokens({from_index: from_index, limit: limit})
  return nft_t
}

export async function nft_tokens_for_owner(account_id, from_index, limit){
  let nft_t_o = await window.contract.nft_tokens_for_owner({account_id: account_id, from_index: from_index, limit:limit})
  return nft_t_o
}

export async function nft_approve(token_id, account_id, sale_conditions, amount){
  await window.contract.nft_approve({
    args: {
      token_id: token_id,
      account_id: account_id,
      msg: JSON.stringify(sale_conditions),
    },
    amount: amount
  })
}

export async function nft_mint(token_id, description, asset_url, gas, current_user, amount){
  let fc = await window.contract.nft_mint({
    args: {
      token_id: token_id,
      metadata: {
        title: token_id,
        description: description,
        media: asset_url,
      },
      receiver_id: current_user,
    },
    gas: gas,
    amount: amount,
  })
  
  return fc
}

// MARKETPLACE

export async function get_sales_by_nft_contract_id(nft_contract_id, from_index = "0", limit = 64){
  let sales = await window.mkpcontract.get_sales_by_nft_contract_id({nft_contract_id: nft_contract_id, from_index: from_index, limit: limit})
  return sales
}

export async function storage_minimum_balance(){
  let storage = await window.mkpcontract.storage_minimum_balance()
  return storage
}

export async function storage_deposit(account_id, minimum, gas){
  await window.mkpcontract.storage_deposit({args:{
    account_id: account_id
  }, gas: gas, amount: minimum || "10000000000000000000000" })
}

export async function offer(nft_contract, token_id, amount, gas){
  await window.mkpcontract.offer({
    args: {
      nft_contract_id: nft_contract,
      token_id:token_id,
    },
    amount: amount,
    gas: gas
  })
}