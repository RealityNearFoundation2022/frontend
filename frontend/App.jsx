import 'regenerator-runtime/runtime'
import React from 'react'
import 'mapbox-gl/dist/mapbox-gl.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './assets/css/global.css'
import './assets/css/app.css'
import ThemeContext from './utils/useContextTheme'
import Footer from './pages/Footer'
import { routes } from './routes/routes'
import { NewMapContextProvider } from './pages/Maps/context/NewMapContext'
import Layout from './pages/Layout'
import { useTheme } from './hooks/useTheme'

export default function App() {
  const { themeProviderValue } = useTheme()
  return (
    <BrowserRouter>
      <ThemeContext.Provider value={themeProviderValue}>
        <NewMapContextProvider>
          <Layout />
          <Routes>
            {routes.map((route) => (
              <Route {...route} />
            ))}
          </Routes>
          <Footer />
        </NewMapContextProvider>
      </ThemeContext.Provider>
    </BrowserRouter>
  )
}
