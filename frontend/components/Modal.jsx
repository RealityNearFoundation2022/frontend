// import * as React from 'react'
// import { createPortal } from 'react-dom'
// import { CloseIcon } from './Close'
// import IconButton from '@mui/material/IconButton'

// function Modal({
//   isVisible,
//   isVisibleSale,
//   isVisibleBid,
//   hideModal,
//   children,
// }) {
//   return isVisible || isVisibleSale || isVisibleBid
//     ? createPortal(
//         <div className="modal-overlay">
//           <div className="outform-wrapper">
//             <div className="close-wrapper">
//               {/* <button
//                 type="button"
//                 className="button"
//                 aria-label="Close dialog"
//                 onClick={hideModal}
//               >
//                 <CloseIcon />
//               </button> */}
//               <IconButton aria-label="delete" disabled color="primary">
//                 <CloseIcon />
//               </IconButton>
//             </div>
//             {children}
//           </div>
//         </div>,
//         document.body,
//       )
//     : null
// }

// export default Modal
import * as React from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import LanguageIcon from '@mui/icons-material/Language'
import { IconButton } from '@mui/material'

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

export default function BasicModal({ children, button, close }) {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
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
