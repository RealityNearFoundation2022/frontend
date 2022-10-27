import React, { useState, useEffect } from 'react'
import Box from '@mui/material/Box'
import { useTranslation } from 'react-i18next'
import Modal from './Modal'
import nearImport from '../assets/img/random/nearImport.png'
import realitiesLogo from '../assets/img/random/logo1.png'

export default function RealityModal() {
  const [walletValue, setValueWallet] = useState('')
  const [realities, setRealities] = useState('')
  const [closeModal, setClose] = useState(false)
  // const { theme } = useContext(ThemeContext)
  const { t } = useTranslation()
  const currentUser = window.accountId || ''
  const [currentBox, setBox] = useState(currentUser ? 3 : -1)

  useEffect(() => {
    console.log(walletValue.length)
  }, [walletValue])

  return (
    <Modal
      close={closeModal}
      button={
        <button
          className="btn btn-primary btn-xl w-75"
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
          <div>Inicia sesón para continuar con la transacción</div>
          <button
            className="btn btn-primary btn-xl w-75"
            id="submitButton2"
            type="button"
            onClick={() => {
              setClose(true)
            }}
          >
            OK
          </button>
        </Box>
      )}
      {currentBox === 0 && (
        <Box
          className="rounded"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <div>Ingresa tu near Wallet</div>
          <input
            type="text"
            placeholder="Ingresa tu Near Walet"
            value={walletValue}
            onChange={(e) => setValueWallet(e.target.value)}
          />
          <p>{walletValue}</p>
          <button
            className="btn btn-primary btn-xl w-75"
            id="submitButton2"
            type="button"
            onClick={() => {
              console.log(walletValue)
              setBox(1)
            }}
          >
            ACEPTAR
          </button>
        </Box>
      )}
      {currentBox === 1 && (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <div>¿Desea enviar los realities a una diferente Near Wallet?</div>
          <div className="d-flex w-60">
            <button
              className="btn btn-primary btn-xl w-40 mx-3"
              id="submitButtonYes2"
              type="button"
              onClick={() => {
                setBox(2)
              }}
            >
              SI
            </button>
            <button
              className="btn btn-primary btn-xl w-40 mx-3"
              id="submitButtonNo2"
              type="button"
              onClick={() => {
                setBox(3)
              }}
            >
              NO
            </button>
          </div>
        </Box>
      )}
      {currentBox === 2 && (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <div>A ver ahora no correcto</div>
          <input
            type="text"
            placeholder="Ingresa tu Near Walet"
            onChange={(e) => setValueWallet(e.target.value)}
          />
          <button
            className="btn btn-primary btn-xl w-75"
            id="submitButton2"
            type="button"
            onClick={() => {
              setBox(3)
            }}
          >
            ACEPTAR
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
            {realities !== '' ? realities : 0}.00
          </p>
          <button
            className="btn btn-primary btn-xl w-75"
            id="submitButton3"
            type="button"
            onClick={() => {
              if (realities !== '') {
                setBox(4)
              } else {
                setBox(3)
              }
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
            className="btn btn-primary btn-xl w-75"
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
            className="btn btn-primary btn-xl w-75"
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
