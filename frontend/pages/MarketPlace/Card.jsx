/* eslint-disable react/prop-types */
import React, { useContext } from 'react'
import ThemeContext from '../../utils/useContextTheme'

export default function Card({ elements }) {
  const { theme } = useContext(ThemeContext)
  return (
    <div className="col-md-4 col-lg-3 mb-5  mb-lg-0">
      <div
        className="near-item  mx-auto"
        data-bs-toggle="modal"
        data-bs-target="#nearModal1"
      >
        <div className="near-item-caption d-flex align-items-center justify-content-center h-100 w-100">
          <div className="near-item-caption-content text-center text-white">
            <i className="fas fa-plus fa-3x"></i>
          </div>
        </div>
        <img className="img-fluid" src={elements.img} alt="..." />
      </div>
      <p className={`${theme.txt} p-2`}>{elements.titleItem}</p>
      <p className={theme.txt}>{elements.author}</p>
      <p className={theme.txt}>{elements.price}</p>
    </div>
  )
}
