import React, { useState, useEffect } from 'react'
import { Modal, Box } from '@mui/material'
import checkCircle from '../assets/img/icons/check_circle.png'
import near from '../assets/img/icons/near.svg'
import TileMap from '../utils/tilemap'
import PropTypes from 'prop-types'

export default function ModalDetailBuy({
  openNearWallet,
  setOpenNearWallet,
  img,
  posX,
  posY,
}) {
  const [openAbstract, setOpenAbstract] = useState(false)
  const [openCompleted, setOpenCompleted] = useState(false)
  const getImg = () => {
    if (openAbstract) {
      const canvas = document.getElementById('modal-buy-detail')
      const ctx = canvas.getContext('2d')
      const tileMap = new TileMap(15, Number(posX), Number(posY), null, img)
      tileMap.clearCanvas(canvas, ctx)
      tileMap.draw(canvas, ctx)
    }
  }
  useEffect(() => {
    getImg()
  }, [openAbstract])

  const handleClose = () => {
    setOpenNearWallet(false)
    setOpenAbstract(false)
    setOpenCompleted(false)
  }

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

  return (
    <>
      <Modal open={openNearWallet} onClose={handleClose}>
        <Box sx={style}>
          <div className="text-center">
            <div className="h3">Ingresa Near Wallet</div>
            <div className="my-4">
              <input type="text" className="form-control m-0 text-center" />
            </div>
            <div>
              <button
                type="button"
                onClick={() => {
                  handleClose()
                  setOpenAbstract(true)
                }}
                className="rounded btn-lg px-5 btn btn-primary _btn"
              >
                Siguiente
              </button>
            </div>
          </div>
        </Box>
      </Modal>
      <Modal open={openAbstract} onClose={handleClose} keepMounted>
        <Box
          sx={{
            ...style,
            width: 500,
          }}
        >
          <div>
            <div className="h3 text-center">Resumen de la compra</div>
            <div className="my-4 row">
              <div className="col">
                <canvas
                  id="modal-buy-detail"
                  type="module"
                  className="img__modal"
                ></canvas>
              </div>
              <div className="col">
                <div className="h5">Titulo</div>
                <p>Descripción del producto que se esta presentando.</p>
                <p className="text-grey mt-4">
                  <span className="pr-2">
                    <img src={near} style={{ width: 20 }} alt="" />
                  </span>
                  1400.0000
                </p>
              </div>
            </div>
            <div className="col-12 text-center">
              <button
                onClick={function () {
                  handleClose()
                  setOpenCompleted(true)
                }}
                className="rounded btn-lg px-5 btn btn-primary _btn"
              >
                Confirmar
              </button>
              <div
                onClick={function () {
                  handleClose()
                  setOpenNearWallet(true)
                }}
                className="mt-3 text-gray"
              >
                Volver
              </div>
            </div>
          </div>
        </Box>
      </Modal>
      <Modal open={openCompleted} onClose={handleClose}>
        <Box
          sx={{
            ...style,
            width: 500,
          }}
        >
          <div>
            <div className="text-center">
              <img src={checkCircle} alt="" />
            </div>
            <div className="h3 text-center my-4">¡TRANSACCIÓN EXISTOSA!</div>
            <div className="col-12 text-center">
              <button
                type="button"
                onClick={handleClose}
                className="rounded btn btn-lg px-5 btn-primary _btn"
              >
                Ok
              </button>
            </div>
          </div>
        </Box>
      </Modal>
    </>
  )
}

ModalDetailBuy.propTypes = {
  openNearWallet: PropTypes.func.isRequired,
  setOpenNearWallet: PropTypes.func.isRequired,
  img: PropTypes.array.isRequired,
  posX: PropTypes.string.isRequired,
  posY: PropTypes.string.isRequired,
}
