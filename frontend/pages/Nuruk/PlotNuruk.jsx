import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import near from '../../assets/img/icons/near.svg'
import checkCircle from '../../assets/img/icons/check_circle.png'
import { Modal, Box } from '@mui/material'

export default function PlotNuruk() {
  let { position } = useParams()
  const [openNearWallet, setOpenNearWallet] = useState(false)
  const [openAbstract, setOpenAbstract] = useState(false)
  const [openCompleted, setOpenCompleted] = useState(false)

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    borderRadius: '20px',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 4,
    px: 4,
    pb: 4,
  }

  function handleClose() {
    setOpenNearWallet(false)
    setOpenAbstract(false)
    setOpenCompleted(false)
  }

  return (
    <div className='container py-5'>
      <div className='row'>
        <div className='col-12 col-md-6 px-5 mb-5'>
          <h1 className='text-primary'>Parcela #{position}</h1>
          <hr />
          <p className="h2 text-grey">
            <span className="pr-2">
              <img
                src={near}
                style={{ width: 60 }}
                alt=""
              />
            </span>
            1400.0000
          </p>
          <hr />
          <div className='text-grey'>
            <h3 className='h5'>Descripción</h3>
            <p>
              Descripción del producto que se esta presentando.
            </p>
          </div>
          <div className='text-center mt-5'>
            <button
              onClick={function () { return setOpenNearWallet(true) }}
              className='rounded btn-xl px-5 btn-primary _btn'
            >
              Adquirir
            </button>
          </div>
        </div>
        <div className="col col-md-6 text-center">
          <img className='w-75 rounded' src="https://via.placeholder.com/800" alt="" />
        </div>
      </div>
      <Modal
        open={openNearWallet}
        onClose={handleClose}
      >
        <Box sx={style}>
          <div className='text-center'>
            <div className='h3'>Ingresa Near Wallet</div>
            <div className='my-4'>
              <input type="text" className='form-control m-0 text-center' />
            </div>
            <div>
              <button onClick={function () { handleClose(); setOpenAbstract(true) }} className='rounded btn-lg px-5 btn-primary _btn'>Siguiente</button>
            </div>
          </div>
        </Box>
      </Modal>
      <Modal
        open={openAbstract}
        onClose={handleClose}
      >
        <Box sx={{
          ...style,
          width: 500
        }}>
          <div>
            <div className='h3 text-center'>Resumen de la compra</div>
            <div className='my-4 row'>
              <div className="col">
                <img src="https://via.placeholder.com/200" className='w-100' alt="" />
              </div>
              <div className="col">
                <div className="h5">Titulo</div>
                <p>
                  Descripción del producto que se esta presentando.
                </p>
                <p className="text-grey mt-4">
                  <span className="pr-2">
                    <img
                      src={near}
                      style={{ width: 20 }}
                      alt=""
                    />
                  </span>
                  1400.0000
                </p>
              </div>
            </div>
            <div className='col-12 text-center'>
              <button onClick={function () { handleClose(); setOpenCompleted(true) }} className='rounded btn-lg px-5 btn-primary _btn'>Confirmar</button>
              <div onClick={function () { handleClose(); setOpenNearWallet(true) }} className='mt-3 text-gray'>
                Volver
              </div>
            </div>
          </div>
        </Box>
      </Modal>
      <Modal
        open={openCompleted}
        onClose={handleClose}
      >
        <Box sx={{
          ...style,
          width: 500
        }}>
          <div>
            <div className='text-center'>
              <img src={checkCircle} alt="" />
            </div>
            <div className='h3 text-center my-4'>¡TRANSACCIÓN EXISTOSA!</div>
            <div className='col-12 text-center'>
              <button className='rounded btn-lg px-5 btn-primary _btn'>Ok</button>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  )
}