import React, { useContext, useState } from 'react'
/* eslint-disable import/no-extraneous-dependencies */
import { Outlet, Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { login, logout } from '../assets/js/near/utils'
import logo from '../assets/img/logo.png'
import botonTema from '../assets/img/random/botonTema.png'
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
      label: 'Metaverso',
      link: '/metaverso',
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
    <>
      <nav
        className={
          navHidden
            ? `navbar navbar-expand-lg ${theme.bg} text-uppercase fixed-top h-10vh visual-hidden`
            : `navbar navbar-expand-lg ${theme.bg} text-uppercase fixed-top h-10vh`
        }
        id="mainNav"
      >
        <div className="d-flex w-100 px-5">
          <Link class={`navbar-brand ${theme.txt}`} to="/">
            <img src={logo} alt="" />
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
              className="btn-primary rounded h-10vh ml-3 w-15 h-7vh"
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
              <img src={botonTema} alt="" />
            </button>
          </div>
        </div>
      </nav>

      <Outlet />
    </>
  )
}

export default Layout
