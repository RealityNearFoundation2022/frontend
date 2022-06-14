import React from 'react'

export default function Moments() {
  return (
    <section className="page-section bg-secondary near" id="near">
    <div className="container">
     
      <h2 className="page-section-heading text-center text-white text-uppercase text-secondary mb-0">Conoce los eventos del
        momento</h2>
     
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-4 mb-5">
          <div className="near-item mx-auto" data-bs-toggle="modal" data-bs-target="#nearModal1">
            <div className="near-item-caption d-flex align-items-center justify-content-center h-100 w-100">
              <div className="near-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
            </div>
            <img className="img-fluid" src={require("../../assets/img/random/cabin.png")} alt="o" />
          </div>
        </div>
      </div>
    </div>
  </section>

  )
}
