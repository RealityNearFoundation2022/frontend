/* eslint-disable global-require */
import React, { useContext } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import logos from '../../assets/img/random/icons.png'
import ThemeContext from '../../utils/useContextTheme'

export default function RealityToken() {
  const { theme } = useContext(ThemeContext)
  const { t } = useTranslation()

  return (
    <section
      className={`${theme.bg} ${
        window.innerHeight / window.innerWidth < 1.25 ? 'page-section' : 'py-5'
      } text-white mb-0 w-100`}
      id=""
    >
      <div
        className={`${theme.txt} d-flex w-100 align-items-center px-7-5porcent`}
      >
        <img src={theme.reality} alt="reality" className="w-40" />
        <span className={`${theme.txt} text-center text-uppercase fs-7`}>
          Token
        </span>
      </div>
      <div
        className="d-flex align-items-center w-100 px-7-5porcent justify-content-between mt-4"
        id="realityToken"
      >
        <div className="w-60" id="realityTokenTxt">
          <p className={`lead ${theme.txt} w-100`}>
            {t(
              'Reality Near te permite hacer negocios, tales como adquirir y vender bienes a través de todas nuestras plataformas: App Reality Near,  Marketplace en el sitio web y en Nuruk. \n Para que las transacciones sean posibles, creamos tokens llamados “REALITIES”, los cuales se utilizan como moneda en nuestro metaverso. Con los realities podrás comprar y vender parcelas, así como también NFTs  o cualquier artículo a la venta. Además, podrás intercambiar bienes con los demás usuarios mediante transacciones P2P. \n Contarás con una wallet, donde podrás administrar tus Realities, al igual que llevar registro de tus transacciones. También podrás ver el tipo de cambio al dolar. \n El Reality es transaccional con todas las Near Wallet, asi que no tendrás ningun inconveniente en transferirle a amigos. Podrás cambiar Nears a  realities en el Marketplace en nuestro sitio web.',
            )}
          </p>
          <center className="w-100 mt-4">
            <Link to="/realities">
              <button
                className="btn btn-primary btn-xl disabled w-50"
                id="submitButton"
                type="submit"
              >
                ADQUIRIR REALITIES
              </button>
            </Link>
          </center>
        </div>
        <div className="w-40 px-3porcent ">
          <img src={logos} alt="" className="lead w-100 hiddenByResponsive" />
        </div>
      </div>
    </section>
  )
}
