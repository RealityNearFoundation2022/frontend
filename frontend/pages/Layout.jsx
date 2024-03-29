/* eslint-disable camelcase */
import React, { useContext, useState, useEffect } from 'react'
import { Outlet, Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import MenuIcon from '@mui/icons-material/Menu'
import Typography from '@mui/material/Typography'

import logo from '../assets/img/logo.png'
import buttonTheme from '../assets/img/random/botonTema.png'
import ThemeContext from '../utils/useContextTheme'
import TranslationModal from '../components/TranslationModal'

function Layout() {
  const { t } = useTranslation()
  const [navHidden, setNavHidden] = useState(false)
  const { theme, handleChangeTheme } = useContext(ThemeContext)
  const [balance, setBalance] = useState(false)

  const currentUser = window.accountId || ''
  const links = [
    // {
    //   label: "Marketplace",
    //   link: "/marketplace",
    // },
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
    const isNavHidden = window.scrollY >= 600
    setNavHidden(isNavHidden)
  }

  function login() {
    window.wallet.signIn()
  }

  function logout() {
    window.wallet.signOut()
  }

  window.addEventListener('scroll', changeVisibilityNav)

  useEffect(() => {
    if (currentUser != '') {
      getTokenBalance()
    }

    async function getTokenBalance() {
      let balance = await window.wallet.viewMethod({
        contractId: 'token.guxal.testnet',
        method: 'ft_balance_of',
        args: { account_id: window.accountId },
      })
      let amount = window.wallet.parseAmount(balance)
      setBalance(amount)
    }
  }, [])

  return (
    <nav
      className={`justify-content-between px-3 navbar d-flex navbar-expand-lg align-items-center w-100 ${
        theme.bg
      } ${navHidden && 'visual-hidden'} fixed-top`}
      id="mainNav"
    >
      <Link
        className={`navbar-brand w-10 d-flex justify-content-center ${theme.txt}`}
        to="/"
      >
        <img src={logo} alt="" className="m-0" width="45" />
      </Link>
      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav justify-content-end w-100">
          {links.map(({ label, link }) => (
            <li className="nav-item" key={link}>
              <Link
                className={`fw-light rounded nav-link${theme.txt} mx-3`}
                to={link}
              >
                {t(label)}
              </Link>
            </li>
          ))}

          <div className="hiddenNormal">
            <li
              className={`nav-item nav-link ${theme.txt} mx-3`}
              onClick={currentUser ? logout : login}
            >
              {currentUser ? 'Log out' : 'Log In'}
            </li>
            <div className="d-flex justify-content-start">
              <TranslationModal />
              <button
                type="button"
                onClick={handleChangeTheme}
                alt=""
                className="bg-transparent border-0 w-10"
              >
                <img
                  src={buttonTheme}
                  alt=""
                  width="25"
                  aria-controls="navbarResponsive"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarResponsive"
                />
                <Typography style={{ color: '#33cc99', fontSize: '12px' }}>
                  {t('Tema')}
                </Typography>
              </button>
            </div>
          </div>
        </ul>
      </div>
      {currentUser ? (
        <p className="fw-bold m-3" style={{ color: '#33cc99' }}>
          $RLTS: {balance}
        </p>
      ) : (
        <></>
      )}
      <button
        type="button"
        className="btn btn-xs rounded w-10 mr-2 hidden-mobile"
        onClick={currentUser ? logout : login}
      >
        {currentUser ? 'Log out' : 'Log In'}
      </button>
      <div className="hidden-mobile">
        <TranslationModal />
      </div>

      <button
        type="button"
        onClick={handleChangeTheme}
        alt=""
        className="bg-transparent border-0 m-2 hidden-mobile"
      >
        <img
          src={buttonTheme}
          alt=""
          style={{ color: '#33cc99', height: '22.5px' }}
          className="hidden-mobile"
        />
        <Typography style={{ color: '#33cc99', fontSize: '12px' }}>
          {t('Tema')}
        </Typography>
      </button>
      <div
        className="navbar-toggler text-uppercase font-weight-bold text-white w-10"
        type="button"
        aria-controls="navbarResponsive"
        aria-expanded="false"
        aria-label="Toggle navigation"
        data-bs-toggle="collapse"
        data-bs-target="#navbarResponsive"
      >
        <MenuIcon />
      </div>
      <Outlet />
    </nav>
  )
}

export default Layout
