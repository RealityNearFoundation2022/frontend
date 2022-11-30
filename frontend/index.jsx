import React from 'react'
import { createRoot } from 'react-dom/client'
import { initContract } from './assets/js/near/utils'
import './assets/css/global.css'
import App from './App'
import './translation/i18n'
import 'mapbox-gl/dist/mapbox-gl.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
require('dotenv').config()

const container = document.querySelector('#root')
const root = createRoot(container) // createRoot(container!) if you use TypeScript

window.nearInitPromise = initContract()
  .then(() => {
    root.render(<App />)
  })
  .catch(console.error)
