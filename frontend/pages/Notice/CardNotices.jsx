/* eslint-disable react/prop-types */
import React, { useContext } from 'react'
import ThemeContext from '../../utils/useContextTheme'

export default function CardNotices({ element }) {
  const { theme } = useContext(ThemeContext)
  return (
    <div
      key={`novelties${element.id}`}
      className="w-95 position-relative rounded"
    >
      <img src={element.img} alt="" className="w-100 rounded" />
      <div className={`${theme.bg} position-absolute bottom-0 w-100 p-3`}>
        <h2 className={`${theme.txt} my-0 py-0`}>{element.title}</h2>
        <p className={`${theme.txt} my-0 py-0 fw-bolder`}>
          {element.description}
        </p>
        <p className={`${theme.txt} my-0 py-0 fw-bolder`}>{element.date}</p>
      </div>
    </div>
  )
}
