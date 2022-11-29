import React, { useEffect } from 'react'
import Modal from '@mui/material/Modal'
import Box from '@mui/material/Box'
import PropTypes from 'prop-types'
import WhiteIcon from '../assets/img/logo-white.svg'
import TileMap from '../utils/tilemap'
import '../assets/css/components/nuruk.css'

export default function ModalBuy({ open, handleClose, go, idX, idY, img }) {
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
  }
  const getImg = () => {
    if (open) {
      const canvas = document.getElementById('modal-buy')
      const ctx = canvas.getContext('2d')

      const tileMap = new TileMap(15, idX, idY, null, img)
      tileMap.clearCanvas(canvas, ctx)
      tileMap.draw(canvas, ctx)
    }
  }
  useEffect(() => {
    console.log(open, handleClose, go, idX, idY, img)
    getImg()
  }, [open])

  return (
    <Modal
      keepMounted
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={{
          ...style,
          width: 700,
          borderRadius: '20px',
          border: 0,
          padding: 2,
        }}
      >
        <div className="row">
          <div className="col col-md-3">
            <canvas id="modal-buy" type="module" className="img__modal" />
          </div>
          <div className="col col-md-5 p-2">
            <h2 className="h4" id="child-modal-title">
              Realand
              {idX}
              {idY}
            </h2>
            <p id="child-modal-description" className="h5 text-grey">
              <span className="pr-2">
                <img
                  src={WhiteIcon}
                  className="bg-primary rounded-pill"
                  style={{ width: 30 }}
                  alt=""
                />
              </span>
              10000.000000
            </p>
            <p className="h5 font-weight-bold text-grey">Disponible</p>
          </div>
          <div
            style={{ minHeight: 150 }}
            className="col col-md-4 d-flex align-items-center justify-content-center"
          >
            <div>
              <button
                type="button"
                onClick={go}
                className="rounded btn _btn-xl btn btn-primary"
                style={{ shadow: 'none', border: 'none' }}
              >
                Comprar
              </button>
            </div>
          </div>
        </div>
      </Box>
    </Modal>
  )
}
ModalBuy.propTypes = {
  open: PropTypes.string.isRequired,
  handleClose: PropTypes.func.isRequired,
  go: PropTypes.func.isRequired,
  idX: PropTypes.string.isRequired,
  idY: PropTypes.string.isRequired,
  img: PropTypes.array || PropTypes.bool,
}

ModalBuy.defaultProps = {
  img: false,
}
