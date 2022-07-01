import React, { useContext } from 'react'
import logoRealityNear from '../../assets/img/random/LOGO REALITY NEAR.png'
import ThemeContext from '../../utils/useContextTheme'
import discordIcon from '../../assets/img/random/discordIcon.png'

export default function RealityExperience() {
  const { theme } = useContext(ThemeContext)
  return (
    <section className={`${theme.bg} near`} id="near">
      <div className="bg-img-realExperience bg-img-size-cover h-50vh w-100">
        <div className="d-flex align-items-center w-100 justify-content-around h-100">
          <div>
            <h2 className="text-white text-uppercase text-secondary title mb-0">
              Vive la experiencia
            </h2>
            <img src={logoRealityNear} alt="" className="w-60" />
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
      <div className="h-30vh">
        <h1 className="d-flex justify-content-center m-0 h-50 align-items-center w-100 fs-7">
          ¡SÍGUENOS!
        </h1>
        <div className="d-flex justify-content-center m-0 h-50 align-items-center w-100">
          <img src={discordIcon} alt="" />
          <img src={discordIcon} alt="" />
          <img src={discordIcon} alt="" />
          <img src={discordIcon} alt="" />
        </div>
      </div>
    </section>
  )
}
