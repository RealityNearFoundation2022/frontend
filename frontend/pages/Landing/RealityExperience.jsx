import React, { useContext } from 'react'
import logoRealityNear from '../../assets/img/random/LOGO REALITY NEAR.png'
import ThemeContext from '../../utils/useContextTheme'
import FollowInfo from '../../components/FollowInfo'

export default function RealityExperience() {
  const { theme } = useContext(ThemeContext)
  return (
    <section className={`${theme.bg} near`} id="near">
      <div className="bg-img-realExperience bg-img-size-cover h-50vh w-100">
        <div
          className="d-flex align-items-center justify-content-around w-100 h-100"
          id="realityExperience"
        >
          <div className="realExperience">
            <center>
              <h2 className="text-white text-uppercase text-secondary title mb-0">
                Vive la experiencia
              </h2>
            </center>
            <center>
              <img src={logoRealityNear} alt="" className="w-60" />
            </center>
          </div>
          <button
            className="rounded btn-xl btn-light realExperience"
            id="submitButton"
            type="submit"
          >
            Ingresar
          </button>
        </div>
      </div>
      <FollowInfo />
    </section>
  )
}
