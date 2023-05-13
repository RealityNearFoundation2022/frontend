const CONTRACT_NAME = process.env.CONTRACT_NAME || 'nft3.guxal.testnet'
const MARKET_CONTRACT = process.env.MARKET_CONTRACT || 'mkp.guxal.testnet'
const TOKEN_CONTRACT = process.env.TOKEN_CONTRACT || 'token.guxal.testnet'
const PRESALE_CONTRACT =
  process.env.PRESALE_CONTRACT || 'dev-1675634479426-76608507847363' //"presale.guxal.testnet";
const FACTORY_CONTRACT =
  process.env.FACTORY_CONTRACT || 'factory-reelands2.guxal.testnet'

function getConfig(env) {
  switch (env) {
    case 'production':
    case 'mainnet':
      return {
        networkId: 'mainnet',
        nodeUrl: 'https://rpc.mainnet.near.org',
        contractName: CONTRACT_NAME,
        walletUrl: 'https://wallet.near.org',
        helperUrl: 'https://helper.mainnet.near.org',
        explorerUrl: 'https://explorer.mainnet.near.org',
      }
    case 'development':
    case 'testnet':
      return {
        networkId: 'testnet',
        nodeUrl: 'https://rpc.testnet.near.org',
        contractName: CONTRACT_NAME,
        contractMarketplace: MARKET_CONTRACT,
        contractToken: TOKEN_CONTRACT,
        contractFactoryNFT: FACTORY_CONTRACT,
        contractPresaleFT: PRESALE_CONTRACT,
        GAS: '200000000000000',
        walletUrl: 'https://testnet.mynearwallet.com',
        indexerUrl: 'https://testnet-api.kitwallet.app',
        helperUrl: 'https://helper.testnet.near.org',
        explorerUrl: 'https://explorer.testnet.near.org',
      }
    case 'betanet':
      return {
        networkId: 'betanet',
        nodeUrl: 'https://rpc.betanet.near.org',
        contractName: CONTRACT_NAME,
        walletUrl: 'https://wallet.betanet.near.org',
        helperUrl: 'https://helper.betanet.near.org',
        explorerUrl: 'https://explorer.betanet.near.org',
      }
    case 'local':
      return {
        networkId: 'local',
        nodeUrl: 'http://localhost:3030',
        keyPath: `${process.env.HOME}/.near/validator_key.json`,
        walletUrl: 'http://localhost:4000/wallet',
        contractName: CONTRACT_NAME,
      }
    case 'test':
    case 'ci':
      return {
        networkId: 'shared-test',
        nodeUrl: 'https://rpc.ci-testnet.near.org',
        contractName: CONTRACT_NAME,
        masterAccount: 'test.near',
      }
    case 'ci-betanet':
      return {
        networkId: 'shared-test-staging',
        nodeUrl: 'https://rpc.ci-betanet.near.org',
        contractName: CONTRACT_NAME,
        masterAccount: 'test.near',
      }
    default:
      throw Error(
        `Unconfigured environment '${env}'. Can be configured in src/config.js.`,
      )
  }
}

module.exports = getConfig
