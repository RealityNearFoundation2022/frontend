import React, { useContext } from 'react'
import logoFooter from '../assets/img/random/logoFooter.png'
import ThemeContext from '../utils/useContextTheme'
function Footer() {
  const { theme } = useContext(ThemeContext)

  return (
    <footer
      className={`${theme.bg} d-flex justify-content-between align-items-center h-40vh container-moments px-5`}
    >
      <div className="d-flex algign-items-center justify-content-center">
        <div className="px-5">
          <img src={logoFooter} alt="" />
        </div>
        <div className="">
          <ul>
            <li className={theme.txt}>Home</li>
            <li className={theme.txt}>MarketPlace</li>
            <li className={theme.txt}>Maps</li>
            <li className={theme.txt}>Metaverse</li>
            <li className={theme.txt}>Nosotros</li>
          </ul>
        </div>
      </div>
      <div className="pr-5">
        <ul>
          <li className={theme.txt}>Código de ética</li>
          <li className={theme.txt}>Políticas de Privacidad</li>
          <li className={theme.txt}>Políticas de Cookies</li>
          <li className={theme.txt}>Términos y Condiciones</li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
