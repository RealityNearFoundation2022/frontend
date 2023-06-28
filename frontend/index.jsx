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
require('dotenv').config()

const container = document.querySelector('#root')
const root = createRoot(container) // createRoot(container!) if you use TypeScript

/* agregar esto al enviroment */
const wallet = new Wallet({
  createAccessKeyFor: 'dev-1675634479426-76608507847363',
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
