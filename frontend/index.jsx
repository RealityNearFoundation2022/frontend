import 'regenerator-runtime/runtime'
import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { initContract } from './assets/js/near/utils'
import NftMe from './components/nft/Me'
import NftSell from './components/nft/Sell'
import About from './pages/About/IndexAbout'
import Contact from './pages/Contact'
import Metaverso from './pages/Metaverse/Metaverse'
import Maps from './pages/Maps/IndexMaps'
import Marketplace from './pages/MarketPlace/IndexMarketplace'
import Layout from './pages/Layout'
import Home from './pages/Landing/IndexLanding'
import './assets/css/global.css'
import './translation/i18n'

const container = document.querySelector('#root')
const root = createRoot(container) // createRoot(container!) if you use TypeScript

window.nearInitPromise = initContract()
  .then(() => {
    root.render(
      <BrowserRouter>
        <Layout />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/maps" element={<Maps />} />
          <Route path="/marketplace/me" element={<NftMe />} />
          <Route path="/marketplace/sell" element={<NftSell />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/metaverso" element={<Metaverso />} />
        </Routes>
      </BrowserRouter>,
    )
  })
  // eslint-disable-next-line no-console
  .catch(console.error)
