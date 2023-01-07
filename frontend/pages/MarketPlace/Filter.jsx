/* eslint-disable react/prop-types */
// import { CaretDown } from 'phosphor-react'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import ThemeContext from '../../utils/useContextTheme'
import { useTranslation } from 'react-i18next'

export default function Filter() {
  const { theme } = useContext(ThemeContext)
  const { t } = useTranslation()

  return (
    <div className="w-100 mt-5">
      <ul className="d-flex flex-column gap-2 align-item-start">
        <li>
          <Link to="/marketplace" className={`fw-normal nav-link${theme.txt}`}>
            {t('Todos')}
          </Link>
        </li>
        <li>
          <Link
            to="/marketplace/ofertas"
            className={`fw-normal nav-link${theme.txt}`}
          >
            {t('Ofertas')}
          </Link>
        </li>
        <li>
          <Link
            to="/marketplace/novedades"
            className={`fw-normal nav-link${theme.txt}`}
          >
            {t('Novedades')}
          </Link>
        </li>
        <li>
          <Link to="/nuruk" className={`fw-normal d-flex nav-link${theme.txt}`}>
            Realands
          </Link>
        </li>
        <li>
          <Link
            to="/patchas"
            className={`fw-normal d-flex nav-link${theme.txt}`}
          >
            Patchas
          </Link>
        </li>
        <li>
          <Link
            to="/marketplace/nfts"
            className={`fw-normal nav-link${theme.txt}`}
          >
            NFTs
          </Link>
        </li>
        <li>
          <Link
            to="/marketplace/otros"
            className={`fw-normal nav-link${theme.txt}`}
          >
            {t('Otros')}
          </Link>
        </li>
        <li>
          <Link
            to="/marketplace/misrealands"
            className={`fw-normal nav-link${theme.txt}`}
          >
            {t('MisRealands')}
          </Link>
        </li>
      </ul>
    </div>
  )
}
