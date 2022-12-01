import React from 'react'
import { Link } from 'react-router-dom'
import noData from '../../assets/img/error-page/no-data.png'
import folder from '../../assets/img/error-page/folder.svg'

export default function NoData() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-7 d-none d-md-block">
          <img src={noData} className="w-100" />
        </div>
        <div className="col-12 col-md-5 d-flex align-items-center py-5">
          <div className="text-center text-grey">
            <img src={folder} style={{ width: 140 }} alt="" />
            <h1 className="h3 mt-3">¡Lo sentimos! No encontramos datos</h1>
            <div className="mt-3">
              <p>Es probable que no contemos con los datos que buscas.</p>
              <p>¡Intenta ajustar los filtros y buscar otra vez!.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
