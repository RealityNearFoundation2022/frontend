/* eslint-disable react/prop-types */
import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import ThemeContext from '../../utils/useContextTheme'
import logo from '../../assets/img/random/logo1.png'
import ModalCardSellRealand from './ModalCardSellRealand'

export default function Card({ elementsCard, category }) {
  const { theme } = useContext(ThemeContext)

  return (
    <>
    {category == 'MisRealands' &&
      <ModalCardSellRealand elementCard={elementsCard}></ModalCardSellRealand>
    }
      <Link to="#">
        <div>
          <div className="h-imagenes">
            <img
              src={elementsCard.img}
              alt=""
              className="w-90 obj-fit-cover rounded h-100"
            />
          </div>
          <h3 className="text-grey fs-0">{elementsCard.titleItem}</h3>
          <h4 className={`fw-light text-grey fs-min ${theme.txt}`}>
            {elementsCard.author}
          </h4>
          <div className="d-flex">
            <img src={logo} alt="" width="25" height="25" />
            <p className={theme.txt}>{elementsCard.price}</p>
          </div>
        </div>
      </Link>
    </>
  )
}
