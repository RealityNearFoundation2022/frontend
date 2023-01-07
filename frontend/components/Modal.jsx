import * as React from 'react'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import { useEffect } from 'react'
import { PropTypes } from 'prop-types'
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
}

export default function BasicModal({
  children,
  button,
  close,
  setBox,
  setValueWallet,
  setRealities,
}) {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => {
    if (setBox && setValueWallet && setRealities) {
      setBox(0)
      setValueWallet('')
      setRealities('')
    }
    setOpen(false)
  }
  useEffect(() => {
    if (close === true) {
      handleClose()
    }
  }, [close])
  return (
    <div>
      <div onClick={handleOpen}>{button}</div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>{children}</Box>
      </Modal>
    </div>
  )
}

BasicModal.propTypes = {
  children: PropTypes.element.isRequired,
  button: PropTypes.element.isRequired,
  close: PropTypes.bool.isRequired,
  setBox: PropTypes.func,
  setValueWallet: PropTypes.func,
  setRealities: PropTypes.func,
}
