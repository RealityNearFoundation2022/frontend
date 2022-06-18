import 'regenerator-runtime/runtime'
import React from 'react'

import './assets/css/global.css'
import { Routes, Route } from 'react-router-dom'
import Maps from './pages/Maps/IndexMaps'

import Layout from './pages/Layout'
// import Marketplace from './pages/Marketplace/IndexMarketplace'
import Home from './pages/Landing/IndexLanding'
import NoPage from './pages/NoPage'
import NftMe from './components/nft/Me'
import NftSell from './components/nft/Sell'
import About from './pages/About/IndexAbout'
import Contact from './pages/Contact'
import Metaverso from './pages/Metaverse/Metaverse'
import Marketplace from './pages/MarketPlace/IndexMarketplace'
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="marketplace" element={<Marketplace />} />
        <Route path="maps" element={<Maps />} />
        <Route path="/marketplace/me" element={<NftMe />} />
        <Route path="/marketplace/sell" element={<NftSell />} />
        <Route path="*" element={<NoPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/metaverso" element={<Metaverso />} />
      </Route>
    </Routes>
  )
}
