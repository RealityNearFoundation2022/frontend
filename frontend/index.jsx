import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import { initContract } from './assets/js/near/utils'

import NftMe from './components/nft/Me'
import NftSell from './components/nft/Sell'

import About from './pages/About/IndexAbout'
import Contact from './pages/Contact'
import Metaverso from './pages/Metaverse/Metaverse'
import Maps from './pages/Maps/IndexMaps'
import Marketplace from './pages/MarketPlace/IndexMarketplace'

const container = document.querySelector('#root')
const root = createRoot(container) // createRoot(container!) if you use TypeScript

window.nearInitPromise = initContract()
  .then(() => {
    ;<App />
    root.render(
      <React.StrictMode>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App tab="home" />}>
              <Route path="/marketplace" element={<Marketplace />} />
              <Route path="maps" element={<Maps />} />
              <Route path="/marketplace/me" element={<NftMe />} />
              <Route path="/marketplace/sell" element={<NftSell />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/metaverso" element={<Metaverso />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </React.StrictMode>,
    )
  })
  // eslint-disable-next-line no-console
  .catch(console.error)
