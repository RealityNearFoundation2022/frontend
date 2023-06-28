import React, { useContext } from 'react'
import logoRealityNear from '../../assets/img/landingPage/RNBannerWeb.png'
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
              <h1 className="text-white text-uppercase text-secondary title mb-0 mt-3 masthead-heading mb-0">
                {t('Vive la experiencia')}
              </h1>
            </center>
            <center>
              <img src={logoRealityNear} alt="" className="w-40" />
            </center>
          </div>
          <a
            href="https://nuruk.realitynear.org"
            target="_blank"
            rel="noreferrer"
          >
            <button type="button" className="btn-secondary _btn btn-xl mx-5">
              {t('Dar un vistazo')}
            </button>
          </a>
        </div>
      </div>
      <FollowInfo />
    </section>
  )
}
