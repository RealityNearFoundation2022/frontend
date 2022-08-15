/* eslint-disable camelcase */
import React, { useContext, useState } from 'react'
/* eslint-disable import/no-extraneous-dependencies */
import { Outlet, Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import {
  login,
  logout,
  nft_tokens,
  // nft_tokens_for_owner,
} from '../assets/js/near/utils'
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

  console.log(nft_tokens('0', 10), nft_tokens('10', 20))
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
    <nav
      className={`justify-content-evenly navbar d-flex navbar-expand-lg align-items-center w-100 ${
        theme.bg
      } ${navHidden && 'visual-hidden'} fixed-top`}
      id="mainNav"
    >
      {/* <div className="d-flex w-100 px-5"> */}
      <Link
        className={`navbar-brand w-10 d-flex justify-content-center ${theme.txt}`}
        to="/"
      >
        <img src={logo} alt="" className="m-0" width="45" heigth="45" />
      </Link>
      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav justify-content-between w-95">
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
      </div>
      <button
        type="button"
        className="btn-primary rounded w-10"
        onClick={currentUser ? logout : login}
      >
        {currentUser ? 'Log out' : 'Log In'}
      </button>
      <TranslationModal />
      <button
        type="button"
        onClick={handleChangeTheme}
        alt=""
        className="bg-transparent border-0 w-10"
      >
        <img src={buttonTheme} alt="" width="w-100" />
      </button>
      <button
        className="navbar-toggler text-uppercase font-weight-bold bg-primary text-white rounded w-10"
        type="button"
        aria-controls="navbarResponsive"
        aria-expanded="false"
        aria-label="Toggle navigation"
        data-bs-toggle="collapse"
        data-bs-target="#navbarResponsive"
      >
        <span className="navbar-toggler-icon"></span>
        {/* Menu
          <i className="fas fa-bars"></i> */}
      </button>
      <Outlet />
      {/* </div> */}
    </nav>
  )
}

export default Layout
