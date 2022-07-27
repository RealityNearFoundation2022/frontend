/* eslint-disable react/prop-types */
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import ThemeContext from '../../utils/useContextTheme'
import logo from '../../assets/img/random/logo1.png'

export default function Card({ elementsCard, category }) {
  const { theme } = useContext(ThemeContext)
  return (
    <Link
      to={`/marketplace/detail/${category.toLowerCase()}/${elementsCard.id}`}
    >
      <div>
        <div className="">
          <img src={elementsCard.img} alt="" className="w-90" />
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
  )
}
