import React, { useState, useEffect } from 'react'
import Box from '@mui/material/Box'
import { useTranslation } from 'react-i18next'
import Modal from './Modal'
import nearImport from '../assets/img/random/nearImport.png'
import realitiesLogo from '../assets/img/random/logo1.png'
import { buy_ft_2 } from '../utils/walletUtils'

import { login } from '../assets/js/near/utils'

// import * as nearAPI from 'near-api-js'

// const {
//   utils: {
//     format: { formatNearAmount },
//   },
// } = nearAPI

export default function RealityModal() {
  const [price, setPrice] = useState(false)
  const [walletValue, setValueWallet] = useState('')
  const [realities, setRealities] = useState('')
  const [closeModal, setClose] = useState(false)
  // const { theme } = useContext(ThemeContext)
  const { t } = useTranslation()
  const currentUser = window.accountId || ''
  const [currentBox, setBox] = useState(currentUser ? 3 : -1)

  useEffect(() => {
    if (currentUser) {
      getPriceToken()
    }

    // async function get_price() {
    //   let price = await get_price_token()
    //   price = (price * 10 ** 10).toLocaleString().replace(/,/g, '')
    //   setPrice(formatNearAmount(price))
    // }

    async function getPriceToken() {
      let price = await window.wallet.viewMethod({
        contractId: 'dev-1675634479426-76608507847363',
        method: 'token_price',
        args: {},
      })
      console.log(price)
      setPrice(window.wallet.parseAmount(price, 10, 10))
    }
  }, [walletValue])

  return (
    <Modal
      close={closeModal}
      button={
        <button
          className="_btn btn btn-primary btn-xl w-75 text-uppercase"
          id="submitButton"
          type="button"
        >
          {t('ADQUIRIR REALITIES')}
        </button>
      }
      setBox={setBox}
      setValueWallet={setValueWallet}
      setRealities={setRealities}
    >
      {currentBox === -1 && (
        <Box
          className="rounded"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <div>Inicia sesión para continuar con la transacción</div>
          <button
            className="_btn btn btn-primary btn-xl w-75"
            id="submitButton2"
            type="button"
            onClick={() => {
              login()
            }}
          >
            Login
          </button>
        </Box>
      )}
      {currentBox === 3 && (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <div>¿Cuantos Realities desea?</div>
          <input
            type="text"
            placeholder="Importe en Realities"
            value={realities}
            onChange={(e) => setRealities(e.target.value)}
          />
          <p>
            <span>
              <img src={nearImport} alt="" />
            </span>
            {realities !== '' ? realities / price : 0}.00
          </p>
          <button
            className="_btn btn btn-primary btn-xl w-75"
            id="submitButton3"
            type="button"
            onClick={() => {
              buy_ft_2((realities / price).toString())
            }}
          >
            ACEPTAR
          </button>
        </Box>
      )}
      {currentBox === 4 && (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <div>Resumen de la transacción</div>
          <p>
            <span>
              <img src={realitiesLogo} alt="" width="40" height="40" />
            </span>
            {realities}.00
          </p>
          <p>
            <span>
              Costo
              <img src={nearImport} alt="" />
            </span>
            {realities}.00
          </p>
          <button
            className="_btn btn btn-primary btn-xl w-75"
            id="submitButton3"
            type="button"
            onClick={() => {
              setRealities('')
              setClose(true)
            }}
          >
            ACEPTAR
          </button>
          <button
            className="_btn btn btn-primary btn-xl w-75"
            id="submitButton3"
            type="button"
            onClick={() => {
              setRealities('')
              setBox(3)
            }}
          >
            VOLVER
          </button>
        </Box>
      )}
    </Modal>
  )
}
