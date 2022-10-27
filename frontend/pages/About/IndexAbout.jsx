import React, { useContext } from 'react'
import { useTranslation } from 'react-i18next'
import about from '../../assets/img/about/about.png'
import ceo from '../../assets/img/about/ceo.png'
import directorCreativo from '../../assets/img/about/directorCreativo.png'
import ThemeContext from '../../utils/useContextTheme'
import HeaderSections from '../HeaderSections'

function About() {
  const { theme } = useContext(ThemeContext)
  const { t } = useTranslation()
  return (
    <div className="">
      <HeaderSections
        titleSection="Nosotros"
        descriptionSection="Conoce más de la Fundación Reality Near"
        bgHeader="bg-header-about"
      />
      <section className={`${theme.bg} text-white mb-0`} id="about">
        <div className="w-100 px-7-5porcent pt-5">
          {/* <!--  Section Content--> */}
          <div className="d-flex">
            <div className="d-flex flex-column gap-2 w-50" id="aboutTxt">
              <h2 className="text-primary">{t('¿QUÉ ES REALITY NEAR?')}</h2>
              <p className={`${theme.txt}`}>
                {t(
                  'Reality Near es un multimetaverso que combina tecnología y realidad, de tal forma que los usuarios puedan desarrollarse en un nuevo ambiente completamente inmersivo y digital que, además, genera valor en su experiencia.',
                )}
              </p>
              <h2 className="text-primary">{t('¿CUÁL ES EL PROBLEMA?')}</h2>
              <p className={`${theme.txt}`}>
                {t(
                  'Cada día que pasa, más son las limitaciones socioecónomicas y educativas a nivel global. Muchas personas emplean la mayoría de sus recursos en conseguir oportunidades de desarrollo, las cuales no siempre garantizan que salgan adelante.',
                )}
              </p>
              <h2 className="text-primary">{t('UN MUNDO DE OPORTUNIDADES')}</h2>
              <p className={`${theme.txt}`}>
                {t(
                  'En Reality Near buscamos generar oportunidades para el desarrollo de los usuarios en ámbitos socioeconómicos y educativos, dentro de un ambiente descentralizado que garantiza las mismas oportunidades de crecimiento para todos. A través de la fusión de la tecnología con la realidad, se busca crear un nuevo mundo con posibilidades infinitas. Aquí podrás crecer, aprender, desarrollarte, y lo más importante: crear todo lo que puedas imaginar.',
                )}
                <br />
                {t(
                  'Este puede ser tu nuevo comienzo, solo debes dejar que tu creatividad defina el camino.',
                )}
              </p>
            </div>
            <div
              className="p-3 w-50 d-flex justify-content-center align-items-center"
              id="hiddenByResponsive"
            >
              <img src={about} alt="" className="rounded w-90 px-5porcent" />
            </div>
          </div>
        </div>
      </section>
      <section className="w-100 bg-img-realExperience bg-img-size-cover h-40vh mt-4"></section>
      {/* <!--  Section--> */}
      <section className={`${theme.bg} w-100 px-7-5porcent`} id="">
        <div className="w-100">
          {/* <!--  Section Heading--> */}
          <div className="d-flex flex-column justify-content-center">
            <h2 className="text-primary text-center my-5">{t('FUNDADORES')}</h2>
            <div className="d-flex justify-content-around align-items-center px-7-5porcent">
              <div className="aboutTeam">
                <div className="w-100">
                  <img src={ceo} alt="" className="w-100" />
                </div>
                <h3 className="text-primary fw-bolder text-center">CEO</h3>
              </div>
              <div className="aboutTeam">
                <img src={directorCreativo} alt="" className="w-100" />
                <h3 className="text-primary fw-bolder text-center">
                  Director Creativo
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
