import React, { useContext } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import logoFooter from '../assets/img/random/logoFooter.png'
import ThemeContext from '../utils/useContextTheme'
function Footer() {
  const { t } = useTranslation()
  const { theme } = useContext(ThemeContext)
  const footerArray = [
    {
      to: '/',
      title: 'Inicio',
    },
    {
      to: '/marketplace',
      title: 'Marketplace',
    },
    {
      to: '/about',
      title: 'Nosotros',
    },
    {
      to: '/metaverse',
      title: 'Metaverso',
    },
    {
      to: '/contact',
      title: 'Contacto',
    },
  ]
  return (
    <footer
      className={`${theme.bg} d-flex w-100 justify-content-between align-items-center h-40vh container-moments px-5porcent`}
    >
      <div className="d-flex algign-items-center justify-content-center">
        <div className="px-5porcent">
          <img src={logoFooter} alt="" className="footerHidden" />
        </div>
        <div className="">
          <ul>
            {footerArray.map(({ to, title }) => (
              <Link to={to} key={to}>
                <li className={theme.txt}>{t(title)}</li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
      <div className="">
        <ul>
          <li className={theme.txt}>{t('Código de ética')}</li>
          <li className={theme.txt}>{t('Políticas de Privacidad')}</li>
          <li className={theme.txt}>{t('Políticas de Cookies')}</li>
          <Link to="/terminos-condiciones">
            <li className={theme.txt}>{t('Términos y Condiciones')}</li>
          </Link>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
