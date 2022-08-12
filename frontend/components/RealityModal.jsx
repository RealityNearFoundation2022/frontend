import React, { useState, useEffect } from 'react'
import Box from '@mui/material/Box'
import Modal from './Modal'

export default function RealityModal() {
  const [walletValue, setValueWallet] = useState('')
  const [realities, setRealities] = useState('')

  const [currentBox, setBox] = useState(0)

  useEffect(() => {
    console.log(walletValue.length)
  }, [walletValue])

  return (
    <Modal
      button={
        <button
          className="btn btn-primary btn-xl w-75"
          id="submitButton"
          type="button"
        >
          ADQUIRIR REALITIES
        </button>
      }
      setBox={setBox}
      setValueWallet={setValueWallet}
      setRealities={setRealities}
    >
      {currentBox === 0 && (
        <Box
          className="rounded"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <div>A ver ahora</div>
          <input
            type="text"
            placeholder="Ingresa tu Near Walet"
            value={walletValue}
            onChange={(e) => setValueWallet(e.target.value)}
          />
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
            placeholder="Ingresa tu Near Walet"
            value={realities}
            onChange={(e) => setRealities(e.target.value)}
          />
          <p>{realities}</p>
          <button
            className="btn btn-primary btn-xl w-75"
            id="submitButton3"
            type="button"
          >
            ACEPTAR
          </button>
        </Box>
      )}
    </Modal>
  )
}
