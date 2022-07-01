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
    <section className={`${theme.bg} page-section text-white mb-0`} id="about">
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
              "Para que las transacciones sean posibles, creamos tokens llamados 'Realities', los cuales se utilizan como moneda en nuestro metaverso. Con estos se realizan todas las transacciones financieras dentro de este multimetaverso. Podrás comprar parcelas( Realands y Patchas ), accesorios, ropa, servicios, y todo lo que se encuentre a la venta en Nuruk.",
            )}
          </p>
          <h2>{t('¿Cómo funciona?')}</h2>
          <p className={`lead ${theme.txt}`}>
            {t(
              'El reality token funciona dentro del ecosistema de Near. En este ecosistema es que se almacena el registro de transacciones en la blockchain. Tus realities se almacenan en tu Near Wallet, y se verán reflejados en tu perfil de Nuruk en la app de Reality Near. En nuestro metaverso puedes realizar infinidad de compras y ventas, adquirir tesoros o NFTs; y todo esto mediante transacciones de realities.',
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
