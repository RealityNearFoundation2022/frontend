import React, { useContext } from 'react'
import logoFooter from '../assets/img/random/logoFooter.png'
import ThemeContext from '../utils/useContextTheme'
function Footer() {
  const { bgTheme, txtTheme } = useContext(ThemeContext)

  return (
    <footer
      className={`${bgTheme} d-flex justify-content-between align-items-center h-40vh container-moments pr-5`}
    >
      <div className="d-flex algign-items-center justify-content-center">
        <div>
          <img src={logoFooter} alt="" />
        </div>
        <div>
          <ul>
            <li className={txtTheme}>Home</li>
            <li className={txtTheme}>MarketPlace</li>
            <li className={txtTheme}>Maps</li>
            <li className={txtTheme}>Metaverse</li>
            <li className={txtTheme}>Nosotros</li>
          </ul>
        </div>
      </div>
      <div>
        <ul>
          <li className={txtTheme}>Código de ética</li>
          <li className={txtTheme}>Políticas de Privacidad</li>
          <li className={txtTheme}>Políticas de Cookies</li>
          <li className={txtTheme}>Términos y Condiciones</li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
