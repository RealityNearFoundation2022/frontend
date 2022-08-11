import React, { useContext } from 'react'
import logoRealityNear from '../../assets/img/random/LOGO REALITY NEAR.png'
import ThemeContext from '../../utils/useContextTheme'
import discordIcon from '../../assets/img/social-network/discordIcon.png'
import igIcon from '../../assets/img/social-network/instagramIcon.png'
import githubIcon from '../../assets/img/social-network/githubIcon.png'
import frIcon from '../../assets/img/social-network/free-redditIcon.png'

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
      <div className="h-30vh p-5 mt-5">
        <h1 className="d-flex justify-content-center m-0 h-50 align-items-center w-100 fs-7 link-primary">
          ¡SÍGUENOS!
        </h1>
        <div className="d-flex justify-content-center m-0 h-50 align-items-center w-100 py-5">
          <img src={discordIcon} alt="" className="px-2" />
          <img src={igIcon} alt="" className="px-2" />
          <img src={githubIcon} alt="" className="px-2" />
          <img src={frIcon} alt="" className="px-2" />
        </div>
      </div>
    </section>
  )
}
