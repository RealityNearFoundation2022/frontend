/* eslint-disable react/prop-types */
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import ThemeContext from '../../utils/useContextTheme'

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
        <h3>{elementsCard.titleItem}</h3>
        <h4 className={theme.txt}>{elementsCard.author}</h4>
        <p className={theme.txt}>{elementsCard.price}</p>
      </div>
    </Link>
  )
}
