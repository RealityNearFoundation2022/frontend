import React from 'react'

export default function Filter() {
  return (
    <div className="w-100 px-5 mx-5">
      <ul className="">
        <li>Ofertas</li>
        <li>Novedades</li>
        <li>
          <div className="d-flex">
            <p>*</p>
            <p>Realands</p>
          </div>
        </li>
        <li>
          <div className="d-flex">
            <p>*</p>
            <p>Patchas</p>
          </div>
        </li>
        <li>NFTs</li>
        <li>Otros</li>
      </ul>
    </div>
  )
}
