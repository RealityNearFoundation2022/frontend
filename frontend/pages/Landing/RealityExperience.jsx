import React, { useContext } from 'react'
import logoRealityNear from '../../assets/img/random/LOGO REALITY NEAR.png'
import ThemeContext from '../../utils/useContextTheme'

export default function RealityExperience() {
  const { bgTheme } = useContext(ThemeContext)
  return (
    <section className={`${bgTheme} h-100vh near`} id="near">
      <div className="bg-img-realExperience bg-img-size-cover h-60 w-100">
        <div className="d-flex align-items-center w-100 justify-content-around h-100">
          <div>
            <h2 className="text-white text-uppercase text-secondary mb-0">
              Vive la experiencia
            </h2>
            <img src={logoRealityNear} alt="" height="100" />
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
      <div className="h-40"></div>
    </section>
  )
}
