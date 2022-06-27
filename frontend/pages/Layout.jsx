import React, { useContext, useState } from 'react'
/* eslint-disable import/no-extraneous-dependencies */
import { Outlet, Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { login, logout } from '../assets/js/near/utils'
import logo from '../assets/img/logo.png'
import ThemeContext from '../utils/useContextTheme'
import TranslationModal from '../components/TranslationModal'

function Layout() {
  const { t } = useTranslation()
  const [navHidden, setNavHidden] = useState(false)
  const { bgTheme, txtTheme, handleChangeTheme } = useContext(ThemeContext)

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
    }
  }

  window.addEventListener('scroll', changeVisibilityNav)

  return (
    <>
      <nav
        className={
          navHidden
            ? `navbar navbar-expand-lg ${bgTheme} text-uppercase fixed-top h-10vh justify-content-center visual-hidden`
            : `navbar navbar-expand-lg ${bgTheme} text-uppercase fixed-top h-10vh justify-content-center`
        }
        id="mainNav"
      >
        <div className="container">
          <Link class={`navbar-brand ${txtTheme}`} to="/">
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
            <ul className="navbar-nav m-auto d-flex justify-content-between w-100 ms-5">
              {routes.map(({ label, link }) => (
                <Link
                  className={`h4 fw-light py-3 px-0 px-lg-3 rounded nav-link ${txtTheme}`}
                  to={link}
                >
                  {t(label)}
                </Link>
              ))}
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
              className="rounded h-10vh ml-3 w-15 h-7vh"
              onClick={handleChangeTheme}
            >
              Change Theme
            </button>
          </div>
        </div>
      </nav>

      <Outlet />
    </>
  )
}

export default Layout
