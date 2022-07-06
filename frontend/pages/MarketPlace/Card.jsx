/* eslint-disable react/prop-types */
import React, { useContext } from 'react'
import ThemeContext from '../../utils/useContextTheme'

export default function Card({ elementsCard }) {
  const { theme } = useContext(ThemeContext)
  return (
    <div>
      <div className="">
        <img src={elementsCard.img} alt="" className="w-90" />
      </div>
      <h3>{elementsCard.titleItem}</h3>
      <h4 className={theme.txt}>{elementsCard.author}</h4>
      <p className={theme.txt}>{elementsCard.price}</p>
    </div>
  )
}
