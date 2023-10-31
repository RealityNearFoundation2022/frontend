/* eslint-disable react/prop-types */
import React, { useContext } from 'react'
import ThemeContext from '../../utils/useContextTheme'
import logo from '../../assets/img/random/logo1.png'
import ModalCardSellRealand from './ModalCardSellRealand'
import ModalCardBuyRealand from './ModalCardBuyRealand'

export default function Card({ elementsCard, category }) {
  const { theme } = useContext(ThemeContext)

  const currentUser = window.accountId || ''

  return (
    <>
      <div className="my-4">
        <div className="h-imagenes">
          <img
            src={elementsCard.img}
            alt=""
            className="w-100 obj-fit-cover rounded h-100"
          />
        </div>
        <h3 className="text-grey fs-0 px-1 mt-1">{elementsCard.titleItem}</h3>
        <h4 className={`fw-light text-grey fs-min px-1 ${theme.txt}`}>
          {elementsCard.author}
        </h4>
        {category == 'Marketplace' && (
          <div className="d-flex px-1">
            <img src={logo} alt="" width="25" height="25" />
            <p className={`${theme.txt} px-2`}>{elementsCard.price}</p>
          </div>
        )}
        <div className="d-flex justify-content-center">
          {category == 'Mis NFTs' || category == 'Mis tierras' && elementsCard.price == null && (
            <ModalCardSellRealand
              elementCard={elementsCard}
              textButton="Vender"
            ></ModalCardSellRealand>
          )}
          {currentUser !== elementsCard.author && category == 'Marketplace' && (
            <ModalCardBuyRealand
              elementCard={elementsCard}
              textButton="Comprar"
            ></ModalCardBuyRealand>
          )}
        </div>
      </div>
    </>
  )
}
