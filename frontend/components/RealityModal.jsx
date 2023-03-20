import React, { useState, useEffect } from 'react'
import Box from '@mui/material/Box'
import { useTranslation } from 'react-i18next'
import Modal from './Modal'
import nearImport from '../assets/img/random/nearImport.png'
import realitiesLogo from '../assets/img/random/logo1.png'
import {
  login,
  // nft_tokens_for_owner,
} from '../assets/js/near/utils'

export default function RealityModal() {
  const [walletValue, setValueWallet] = useState('')
  const [realities, setRealities] = useState('')
  const [closeModal, setClose] = useState(false)
  // const { theme } = useContext(ThemeContext)
  const { t } = useTranslation()
  const currentUser = window.accountId || ''
  const [currentBox, setBox] = useState(currentUser ? 1 : -1)

  useEffect(() => {
    console.log(walletValue.length)
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
      currentBox={currentBox}
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
          <div className="my-2">
            {t('Inicia sesión para continuar con la transacción')}
          </div>
          <button
            className="_btn btn btn-primary btn-xl w-75"
            id="submitButton2"
            type="button"
            onClick={login}
          >
            {t('Iniciar sesión')}
          </button>
        </Box>
      )}
      {/* {currentBox === 0 && (
        <Box
          className="rounded"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <div>{t('Ingresa tu near Wallet')}</div>
          <input
            type="text"
            className="form-control"
            placeholder=""
            value={walletValue}
            onChange={(e) => setValueWallet(e.target.value)}
          />
          <p>{walletValue}</p>
          <button
            className="_btn btn btn-primary btn-xl w-75"
            id="submitButton2"
            type="button"
            onClick={() => {
              console.log(walletValue)
              setBox(1)
            }}
          >
            {t('ACEPTAR')}
          </button>
        </Box>
      )} */}
      {(currentBox === 1 || currentBox === 0) && (
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
              className="_btn btn btn-primary btn-xl w-40 mx-3"
              id="submitButtonYes2"
              type="button"
              onClick={() => {
                setBox(2)
              }}
            >
              SI
            </button>
            <button
              className="_btn btn btn-primary btn-xl w-40 mx-3"
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
          <div>Ingresa tu near Wallet</div>
          <input
            type="text"
            className="form-control"
            placeholder="Ingresa tu Near Walet"
            onChange={(e) => setValueWallet(e.target.value)}
          />
          <button
            className="_btn btn btn-primary btn-xl w-75"
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
          <div className="my-2">{t('¿Cuántos Realities desea?')}</div>
          <input
            type="text"
            className="form-control"
            placeholder="Realities"
            value={realities}
            onChange={(e) => setRealities(e.target.value)}
          />
          <div className="d-flex">
            <span>
              <img src={nearImport} alt="" />
            </span>
            <p className="mx-1">{realities || 0}.00 </p>
          </div>
          <button
            className="_btn btn btn-primary btn-xl w-75"
            id="submitButton3"
            type="button"
            onClick={() => {
              if (realities) {
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
          <h4>{t('Resumen de la transacción')}</h4>
          <div className="d-flex my-2">
            <img src={realitiesLogo} alt="" width="40" height="40" />
          </div>
          <span className="m-1">Costo</span>
          <div className="d-flex">
            <img src={nearImport} alt="" width="20" height="20" />
            <p className="px-2">{realities}.00</p>
          </div>
          <div className="d-flex">
            <button
              className="_btn btn btn-primary btn-xl w-75 mx-2"
              id="submitButton3"
              type="button"
              onClick={() => {
                setClose(true)
                setRealities(0)
              }}
            >
              ACEPTAR
            </button>
            <button
              className="_btn btn btn-primary btn-xl w-75"
              id="submitButton3"
              type="button"
              onClick={() => {
                setRealities(0)
                setBox(3)
              }}
            >
              VOLVER
            </button>
          </div>
        </Box>
      )}
    </Modal>
  )
}
