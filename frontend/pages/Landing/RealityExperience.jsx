import React, { useContext } from 'react'
import logoRealityNear from '../../assets/img/random/LOGO REALITY NEAR.png'
import ThemeContext from '../../utils/useContextTheme'
import FollowInfo from '../../components/FollowInfo'
import { useTranslation } from 'react-i18next'

export default function RealityExperience() {
  const { theme } = useContext(ThemeContext)
  const { t } = useTranslation()
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
                { t('Vive la experiencia') }
              </h2>
            </center>
            <center>
              <img src={logoRealityNear} alt="" className="w-60" />
            </center>
          </div>
          <button
            className="rounded btn btn-xl _btn realExperience"
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
