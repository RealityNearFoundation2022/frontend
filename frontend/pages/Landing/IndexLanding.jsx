/* eslint-disable camelcase */
import React from 'react'
// import getConfig from '../../assets/js/near/config'
import '../../assets/css/components/events.css'

import Moments from './Moments'
import RealityToken from './RealityToken'
import RealityExperience from './RealityExperience'
import realityNear from '../../assets/img/random/REALITY WHITE.png'
import { useTranslation } from 'react-i18next'

function Home() {
  const { t } = useTranslation()

  return (
    <main>
      <header className="bg-image bg-img-size-cover text-white text-center page-section">
        <div className="container d-flex align-items-center flex-column h-100 justify-content-center">
          <h1 className="masthead-heading text-uppercase mb-0">
            {t('Bienvenido a')}
          </h1>
          <img src={realityNear} alt="realityNear" width="50%" />
          <h3 className="pt-3">
            &quot;{t('TRABAJANDO EN EL PROTOCOLO NEAR')}&quot;
          </h3>
        </div>
      </header>
      <Moments />
      <RealityToken />
      <RealityExperience />
    </main>
  )
}
export default Home
