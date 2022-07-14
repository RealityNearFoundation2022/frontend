import React, { useContext, useState } from 'react'
/* eslint-disable import/no-extraneous-dependencies */
import { Outlet, Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { login, logout } from '../assets/js/near/utils'
import logo from '../assets/img/logo.png'
import buttonTheme from '../assets/img/random/botonTema.png'
import ThemeContext from '../utils/useContextTheme'
import TranslationModal from '../components/TranslationModal'

function Layout() {
  const { t } = useTranslation()
  const [navHidden, setNavHidden] = useState(false)
  const { theme, handleChangeTheme } = useContext(ThemeContext)

  const currentUser = window.accountId || ''
  const routes = [
    {
      label: 'Marketplace',
      link: '/marketplace',
    },
    {
      label: 'Nosotros',
      link: '/about',
    },
    {
      label: 'Noticias',
      link: '/notices',
    },
    {
      label: 'Metaverso',
      link: '/metaverso',
    },
    {
      label: 'Realities',
      link: '/realities',
    },
    {
      label: 'Contacto',
      link: '/contact',
    },
  ]

  const changeVisibilityNav = () => {
    if (window.scrollY >= 600) {
      setNavHidden(true)
    } else {
      setNavHidden(false)
      /* let scrollPos = 0
      if (document.body.getBoundingClientRect().top > scrollPos) {
        setNavHidden(false) // ARRIBA
      } else {
        setNavHidden(true)
        scrollPos = document.body.getBoundingClientRect().top
      } // ABAJO */
    }
  }

  window.addEventListener('scroll', changeVisibilityNav)

  return (
    <div className="d-flex justify-column">
      <nav
        className={`navbar navbar-expand-lg ${theme.bg} ${
          navHidden && 'visual-hidden'
        } text-uppercase fixed-top`}
        id="mainNav"
      >
        <div className="d-flex w-100 px-5">
          <Link class={`navbar-brand ${theme.txt} pt-3`} to="/">
            <img src={logo} alt="" className="m-0" width="45" heigth="45" />
          </Link>
          <button
            className="navbar-toggler text-uppercase font-weight-bold bg-primary text-white rounded"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            Menu
            <i className="fas fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav d-flex justify-content-between w-100 px-5">
              {routes.map(({ label, link }) => (
                <li className="nav-item">
                  <Link
                    className={`fw-light rounded nav-link${theme.txt}`}
                    to={link}
                  >
                    {t(label)}
                  </Link>
                </li>
              ))}

              {/* <button
                type="button"
                className="btn btn-warning btn-xl rounded"
                onClick={currentUser ? logout : login}
              >
                
              </button> */}
            </ul>
            <button
              type="button"
              className="btn-primary rounded 
              ml-3 w-15"
              onClick={currentUser ? logout : login}
            >
              {currentUser ? 'Log out' : 'Log In'}
            </button>
            <TranslationModal />
            <button
              type="button"
              onClick={handleChangeTheme}
              alt=""
              className="bg-transparent border-0"
            >
              <img src={buttonTheme} alt="" />
            </button>
          </div>
        </div>
      </nav>

      <Outlet />
    </div>
  )
}

export default Layout
