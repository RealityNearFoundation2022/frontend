import React from 'react'
import { createRoot } from 'react-dom/client'
// import { initContract } from './assets/js/near/utils'
import { Wallet } from './assets/js/near/near-wallet'
import './assets/css/global.css'
import App from './App'
import './translation/i18n'
import 'mapbox-gl/dist/mapbox-gl.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { nearConfig } from './assets/js/near/utils'
require('dotenv').config()



const container = document.querySelector('#root')
const root = createRoot(container) // createRoot(container!) if you use TypeScript

const wallet = new Wallet({
  createAccessKeyFor: nearConfig.contractToken,
})

window.wallet = wallet
// window.nearInitPromise = initContract()
//   .then(() => {
//     root.render(<App />);
//   })
//   // eslint-disable-next-line no-console
//   .catch(console.error);

window.nearInitPromise = wallet
  .startUp()
  .then(() => {
    root.render(<App />)
  })
  // eslint-disable-next-line no-console
  .catch(console.error)
