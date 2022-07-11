/* eslint-disable global-require */
import React, { useContext } from 'react'
import { useTranslation } from 'react-i18next'
// import logoReality from '../../assets/img/random/LOGO REALITY.png'
import logos from '../../assets/img/random/icons.png'
import ThemeContext from '../../utils/useContextTheme'

export default function RealityToken() {
  const { theme } = useContext(ThemeContext)
  const { t } = useTranslation()

  return (
    <section className={`${theme.bg} page-section text-white mb-0`} id="">
      {/* <div className="container">
        <div className="d-flex align-items-center">
          <img src={logoReality} alt="reality" height="70vh" />
          <span className="text-center text-uppercase text-white f-size-80">
            Token
          </span>
        </div>

        <div className="divider-custom-line"></div>
        <div className="divider-custom-icon">
          <i className="fas fa-star"></i>
        </div>
        <div className="divider-custom-line"></div>
      </div> */}

      <div className="d-flex justify-content-center container justify-content-between">
        <div className="col-lg-4 w-60">
          <div className="d-flex align-items-center">
            <img src={theme.reality} alt="reality" height="70vh" />
            <span className="text-center text-uppercase text-white f-size-80">
              Token
            </span>
          </div>
          <br />
          <p className={`lead ${theme.txt}`}>
            {t(
              'Reality Near te permite hacer negocios, tales como adquirir y vender bienes a través de todas nuestras plataformas: App Reality Near,  Marketplace en el sitio web y en Nuruk. \n Para que las transacciones sean posibles, creamos tokens llamados “REALITIES”, los cuales se utilizan como moneda en nuestro metaverso. Con los realities podrás comprar y vender parcelas, así como también NFTs  o cualquier artículo a la venta. Además, podrás intercambiar bienes con los demás usuarios mediante transacciones P2P. \n Contarás con una wallet, donde podrás administrar tus Realities, al igual que llevar registro de tus transacciones. También podrás ver el tipo de cambio al dolar.\n El Reality es transaccional con todas las Near Wallet, asi que no tendrás ningun inconveniente en transferirle a amigos. Podrás cambiar Nears a  realities en el Marketplace en nuestro sitio web.',
            )}
          </p>
        </div>
        <div className="col-lg-4">
          <img src={logos} alt="" className="lead my-5" width="100%" />
          <center>
            <button
              className="btn btn-primary btn-xl disabled w-75"
              id="submitButton"
              type="submit"
            >
              ADQUIRIR REALITIES
            </button>
          </center>
        </div>
      </div>

      {/* <div className="d-flex flex-wrap align-items-end justify-content-center">
        <div className="p-4">
          <button
            className="btn btn-primary btn-xl disabled"
            id="submitButton"
            type="submit"
          >
            ADQUIRIR REALITIES
          </button>
        </div>
        <div className="p-4 d-flex flex-column align-items-center">
          <p className="lead">¿No tienes una wallet?</p>
          <button
            className="btn btn-secondary btn-xl disabled"
            id="submitButton"
            type="submit"
          >
            CREA TU WALLET NEAR
          </button>
        </div>
      </div> */}
    </section>
  )
}
