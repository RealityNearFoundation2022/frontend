/* eslint-disable import/no-unresolved */
/* eslint-disable react/jsx-no-constructed-context-values */
import 'regenerator-runtime/runtime'
import React, { useState } from 'react'
import 'mapbox-gl/dist/mapbox-gl.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './assets/css/global.css'
import Maps from './pages/Maps/IndexMaps'
import './assets/css/app.css'

import Layout from './pages/Layout'
// import Marketplace from './pages/MarketPlace/IndexMarketplace'
import Home from './pages/Landing/IndexLanding'
// import NoPage from './pages/NoPage'
import NftMe from './components/nft/Me'
import NftSell from './components/nft/Sell'
import About from './pages/About/IndexAbout'
import Contact from './pages/Contact'
import Metaverso from './pages/Metaverse/Metaverse'
import ThemeContext, { themes } from './utils/useContextTheme'
import Footer from './pages/Footer'
import { NewMapContextProvider } from './pages/Maps/context/NewMapContext'
import { DashboardMarketPlace } from './routes/DashboardMarketPlace'
import { CardSection } from './pages/MarketPlace/CardSection'
import DashboardNotice from './routes/DashboardNotice'
import IndexCentreland from './pages/Centreland/IndexCentreland'
// import Realities from './pages/Realities'
import Conditions from './pages/Conditions'
import Realities from './pages/Realities/IndexRealities'

export default function App() {
  const [theme, setTheme] = useState({ ...themes.light })

  const handleChangeTheme = () => {
    setTheme(() =>
      JSON.stringify(theme) === JSON.stringify({ ...themes.dark })
        ? { ...themes.light }
        : { ...themes.dark },
    )
  }

  return (
    <BrowserRouter>
      <ThemeContext.Provider value={{ theme, handleChangeTheme }}>
        <NewMapContextProvider>
          <Layout />
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/marketplace/*" element={<DashboardMarketPlace />} />
            <Route path="/maps" element={<Maps />} />

            <Route path="/marketplace/me" element={<NftMe />} />
            <Route path="/marketplace/sell" element={<NftSell />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/centreland" element={<IndexCentreland />} />
            <Route path="/metaverso" element={<Metaverso />} />
            <Route
              path="/marketplace/detail/:category/:idCard"
              element={<CardSection />}
            />
            <Route path="/notices/*" element={<DashboardNotice />} />
            <Route path="/realities" element={<Realities />} />
            <Route path="/terminos-condiciones" element={<Conditions />} />
          </Routes>
          <Footer />
        </NewMapContextProvider>
      </ThemeContext.Provider>
    </BrowserRouter>
  )
}
