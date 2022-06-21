import React from 'react'
import logo1 from '../../assets/img/random/logo1.png'
import logoReality from '../../assets/img/random/LOGO REALITY.png'
import logos from '../../assets/img/random/Iconos.png'

export default function RealityToken() {
  return (
    <section
      className="page-section bg-linearGradient text-white mb-0"
      id="about"
    >
      <div className="container">
        <div className="d-flex align-items-center">
          <img src={logo1} alt="logo1" height="100vh" />
          <img
            src={logoReality}
            alt="reality"
            height="70vh"
            className="ml-3vw"
          />
          <span className="text-center text-uppercase text-white f-size-80">
            Token
          </span>
        </div>

        <div className="divider-custom-line"></div>
        <div className="divider-custom-icon">
          <i className="fas fa-star"></i>
        </div>
        <div className="divider-custom-line"></div>
      </div>

      <div className="d-flex justify-content-center">
        <div className="col-lg-4 ml-19vw w-40">
          <br />
          <p className="lead">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti
            aliquam culpa architecto quidem impedit cum saepe nobis, earum eaque
            rem explicabo animi suscipit repudiandae modi iure ducimus fugit
            cupiditate numquam.Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Corrupti aliquam culpa architecto quidem impedit
            cum saepe nobis, earum eaque rem explicabo animi suscipit
            repudiandae modi iure ducimus fugit cupiditate numquam.
          </p>
        </div>
        <div className="col-lg-4 me-auto w-25 ml-3vw">
          <img src={logos} alt="" className="lead" width="100%" />
        </div>
      </div>

      <div className="d-flex flex-wrap align-items-end justify-content-center">
        <div className="p-4">
          <button
            className="btn btn-primary btn-xl disabled"
            id="submitButton"
            type="submit"
          >
            ADQUIRIR REALITIES
          </button>
        </div>
        <div className="p-4 d-flex flex-column align-items-center">
          <p className="lead">¿No tienes una wallet?</p>
          <button
            className="btn btn-secondary btn-xl disabled"
            id="submitButton"
            type="submit"
          >
            CREA TU WALLET NEAR
          </button>
        </div>
      </div>
    </section>
  )
}
