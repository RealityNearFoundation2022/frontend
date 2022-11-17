import React from 'react'
import { Modal, Box } from '@mui/material'
export default function LoadingModal({ open, handleClose }) {
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
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
          borderRadius: '20px',
          border: 0,
          padding: 4,
        }}
      >
        <div className="text-center">
          <div className="spinner-border text-secondary" role="status"></div>
        </div>
      </Box>
    </Modal>
  )
}
