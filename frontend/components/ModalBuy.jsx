import React from 'react'
import Modal from '@mui/material/Modal'
import Box from '@mui/material/Box'
import WhiteIcon from '../assets/img/logo-white.svg'

// eslint-disable-next-line react/prop-types
export default function ModalBuy({ open, handleClose, go, id }) {
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

  return (
    <Modal
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
            <img
              src="https://via.placeholder.com/500"
              className="rounded"
              style={{ maxWidth: '100%' }}
              alt=""
            />
          </div>
          <div className="col col-md-5 p-2">
            <h2 className="h4" id="child-modal-title">
              Realand {id}
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
                className="rounded btn-xl btn-primary"
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
