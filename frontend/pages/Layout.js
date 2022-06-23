import React, { useState } from 'react'
/* eslint-disable import/no-extraneous-dependencies */
import { Outlet, Link } from 'react-router-dom'
import Button from '@mui/material/Button'
import { useTranslation } from 'react-i18next'
import { login, logout } from '../assets/js/near/utils'
import logo from '../assets/img/logo.png'
import TranslationModal from '../components/TranslationModal'

function Layout() {
  const { t } = useTranslation()
  const [navHidden, setNavHidden] = useState(false)
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
            ? 'navbar navbar-expand-lg bg-dark bg-opacity-75 text-uppercase fixed-top h-10vh justify-content-center visual-hidden'
            : 'navbar navbar-expand-lg bg-dark bg-opacity-75 text-uppercase fixed-top h-10vh justify-content-center'
        }
        id="mainNav"
      >
        <div className="container">
          <Link class="navbar-brand" to="/">
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
                  class="h4 fw-light nav-link py-3 px-0 px-lg-3 rounded"
                  to={link}
                >
                  {t(label)}
                </Link>
              ))}

              {/* <button
                type="button"
                className="btn btn-warning btn-xl rounded"
                onClick={currentUser ? logout : login}
              >
                
              </button> */}
              <Button variant="outlined">
                {currentUser ? 'Log out' : 'Log In'}
              </Button>

              <Button></Button>
              <TranslationModal />
            </ul>
          </div>
        </div>
      </nav>

      <Outlet />
    </>
  )
}

export default Layout
