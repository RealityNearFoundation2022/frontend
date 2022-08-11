import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import logoFooter from '../assets/img/random/logoFooter.png'
import ThemeContext from '../utils/useContextTheme'
function Footer() {
  const { theme } = useContext(ThemeContext)

  return (
    <footer
      className={`${theme.bg} d-flex w-100 justify-content-between align-items-center h-40vh container-moments px-5porcent`}
    >
      <div className="d-flex algign-items-center justify-content-center">
        <div className="px-5porcent">
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
      <div className="">
        <ul>
          <li className={theme.txt}>Código de ética</li>
          <li className={theme.txt}>Políticas de Privacidad</li>
          <li className={theme.txt}>Políticas de Cookies</li>
          <Link to="/terminos-condiciones">
            <li className={theme.txt}>Términos y Condiciones</li>
          </Link>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
