/* eslint-disable react/prop-types */
import React from 'react'
import { Link } from 'react-router-dom'

export default function Filter() {
  return (
    <div className="w-100 px-5 mx-5">
      <ul className="">
        <li>
          <Link to="marketplace">Todos</Link>
        </li>
        <li>
          <Link to="marketplace/ofertas">Ofertas</Link>
        </li>
        <li>
          <Link to="marketplace/novedades">NOvedades</Link>
        </li>
        <li>
          <Link className="d-flex" to="marketplace/realands">
            <p>*</p>
            <p>Realands</p>
          </Link>
        </li>
        <li>
          <Link className="d-flex" to="marketplace/patchas">
            <p>*</p>
            <p>Patchas</p>
          </Link>
        </li>
        <li>
          <Link to="marketplace/nfts">NFTs</Link>
        </li>
        <li>
          <Link to="marketplace/otros">Otros</Link>
        </li>
      </ul>
    </div>
  )
}
