import React from 'react'
import serverError from '../../assets/img/error-page/server-error.png'
import warningTriangle from '../../assets/img/error-page/warning-triangle.svg'
import { Link } from 'react-router-dom'

export default function ServerError() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-7 d-none d-md-block">
          <img src={serverError} className="w-100" />
        </div>
        <div className="col-12 col-md-5 d-flex align-items-center py-5">
          <div className="text-center text-grey">
            <img src={warningTriangle} alt="" />
            <h1 className="h3">
              ¡Ups! Ha ocurrido un error en nuestro servidor
            </h1>
            <div className="mt-3">
              <p>Estamos trabajando para solucionarlo</p>
              <p>Intenta más tarde o regresa a Home</p>
            </div>
            <Link to="/">
              <button className="_btn _btn btn btn-primary btn _btn-xl rounded mt-3">
                Home
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
