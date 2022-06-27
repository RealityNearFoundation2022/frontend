/* eslint-disable react/jsx-no-constructed-context-values */
import 'regenerator-runtime/runtime'
import React, { useState } from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './assets/css/global.css'
import Maps from './pages/Maps/IndexMaps'
import Layout from './pages/Layout'
import Marketplace from './pages/MarketPlace/IndexMarketplace'
import Home from './pages/Landing/IndexLanding'
// import NoPage from './pages/NoPage'
import NftMe from './components/nft/Me'
import NftSell from './components/nft/Sell'
import About from './pages/About/IndexAbout'
import Contact from './pages/Contact'
import Metaverso from './pages/Metaverse/Metaverse'
import ThemeContext, { themes } from './utils/useContextTheme'
import Footer from './pages/Footer'

export default function App() {
  const [bgTheme, setBgTheme] = useState(themes.bgLight)
  const [txtTheme, setTxtTheme] = useState(themes.txtLight)

  const handleChangeTheme = () => {
    setBgTheme(() =>
      bgTheme === themes.bgDark ? themes.bgLight : themes.bgDark,
    )
    setTxtTheme(() =>
      txtTheme === themes.txtDark ? themes.txtLight : themes.txtDark,
    )
  }

  return (
    <BrowserRouter>
      <ThemeContext.Provider value={{ bgTheme, txtTheme, handleChangeTheme }}>
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
        <Footer />
      </ThemeContext.Provider>
    </BrowserRouter>
  )
}
