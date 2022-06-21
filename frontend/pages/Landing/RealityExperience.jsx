import React from 'react'
import logoReality from '../../assets/img/random/LOGO REALITY.png'

export default function RealityExperience() {
  return (
    <section className="bg-secondary h-100vh near" id="near">
      <div className="bg-image h-50 w-100">
        <div className="d-flex align-items-center h-100 w-100">
          <div>
            <h2 className="text-white text-uppercase text-secondary mb-0">
              Vive la experiencia
            </h2>
            <img src={logoReality} alt="" height="60vh" />
          </div>
          <button
            className="btn btn-primary btn-xl disabled"
            id="submitButton"
            type="submit"
          >
            Ingresar
          </button>
        </div>
      </div>
      <div className="h-50"></div>
    </section>
  )
}
