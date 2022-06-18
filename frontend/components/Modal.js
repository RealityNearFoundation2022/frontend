import * as React from 'react'
import { createPortal } from 'react-dom'
import { CloseIcon } from './Close'

function Modal({
  isVisible,
  isVisibleSale,
  isVisibleBid,
  hideModal,
  children,
}) {
  return isVisible || isVisibleSale || isVisibleBid
    ? createPortal(
        <div className="modal-overlay">
          <div className="outform-wrapper">
            <div className="close-wrapper">
              <button
                type="button"
                className="button"
                aria-label="Close dialog"
                onClick={hideModal}
              >
                holaaa
                <CloseIcon />
              </button>
            </div>
            {children}
          </div>
        </div>,
        document.body,
      )
    : null
}

export default Modal
