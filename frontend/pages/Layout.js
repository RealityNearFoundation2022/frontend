import React, { useState } from 'react'
/* eslint-disable import/no-extraneous-dependencies */
import { Outlet, Link } from 'react-router-dom'

import { login, logout } from '../assets/js/near/utils'

import logo from '../assets/img/logo.png'

function Layout() {
  const [navHidden, setNavHidden] = useState(false)

  const currentUser = window.accountId || ''

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
              <li className="nav-item mx-0 mx-lg-1">
                <Link
                  class="h4 fw-light nav-link py-3 px-0 px-lg-3 rounded"
                  to="/marketplace"
                >
                  Marketplace
                </Link>
              </li>
              <li className="nav-item mx-0 mx-lg-1">
                <Link
                  class="h4 fw-light nav-link py-3 px-0 px-lg-3 rounded"
                  to="/about"
                >
                  Nosotros
                </Link>
              </li>

              <li className="nav-item mx-0 mx-lg-1">
                <Link
                  class="h4 fw-light nav-link py-3 px-0 px-lg-3 rounded"
                  to="/metaverso"
                >
                  Metaverso
                </Link>
              </li>
              <li className="nav-item mx-0 mx-lg-1">
                <Link
                  class="h4 fw-light nav-link py-3 px-0 px-lg-3 rounded"
                  to="/contact"
                >
                  Contacto
                </Link>
              </li>
              <button
                type="button"
                className="btn btn-warning btn-xl rounded"
                onClick={currentUser ? logout : login}
              >
                {currentUser ? 'Log out' : 'Log In'}
              </button>
            </ul>
          </div>
        </div>
      </nav>

      <Outlet />
    </>
  )
}

export default Layout
