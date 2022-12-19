import React, { useContext } from 'react'
import { useTranslation } from 'react-i18next'
import about from '../../assets/img/about/about.png'
import ceo from '../../assets/img/about/ceo.png'
import directorCreativo from '../../assets/img/about/directorCreativo.png'
import ThemeContext from '../../utils/useContextTheme'
import HeaderSections from '../HeaderSections'
import linkedinIcon from '../../assets/img/about/linkedinIcon.png'

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
      <section className={`${theme.bg} ${theme.txt} w-100 px-7-5porcent`} id="">
        <div className="w-100">
          {/* <!--  Section Heading--> */}
          <div className="row position-relative">
            <div className="col-12">
              <h2 className="text-primary text-center my-5">
                {t('Fundadores')}
              </h2>
            </div>
            <div
              style={{
                top: '40px',
                position: 'absolute',
                width: '477px',
                height: '477px',
                left: '-440px',
                background: '#33CC99',
              }}
              className="rounded-pill d-lg-block d-none mt-5"
            ></div>
            <div
              style={{
                top: '40px',
                position: 'absolute',
                width: '477px',
                height: '477px',
                right: '-440px',
                background: '#33CC99',
              }}
              className="rounded-pill d-lg-block d-none mt-5"
            ></div>
          </div>
          <div className="row justify-content-evenly">
            <div className="col-sm-6 col-md-4 col-lg-3 mb-5">
              <div className="w-100 px-5 position-relative">
                <img src={ceo} alt="" className="w-100" />
                <a
                  href="https://www.linkedin.com/in/javier-bambaren-dabdoub"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={linkedinIcon}
                    alt=""
                    className="position-absolute"
                    style={{
                      width: '50px',
                      bottom: 0,
                      right: 50,
                    }}
                  />
                </a>
              </div>
              <div className="mt-3">
                <div className="fw-bolder text-center h4">Javier Bambaren</div>
                <div className="text-dark fw-bolder text-center h4">
                  <a
                    href="https://www.linkedin.com/in/javier-bambaren-dabdoub"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Javier Bambaren
                  </a>
                </div>
                <div className="text-primary fw-bolder text-center h4">CEO</div>
              </div>
              <div className="mt-3">
                <ul className="text-center">
                  <li className="mb-2">
                    <span className="pr-2">•</span> Business owner & Expert in
                    the field of entertainment and retail for more than 18 years
                  </li>
                  <li className="mb-2">
                    <span className="pr-2">•</span> Blockchain certified by MIT
                  </li>
                  <li className="mb-2">
                    <span className="pr-2">•</span> Full stack developer
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3 mb-5">
              <div className="w-100 px-5 position-relative">
                <img src={directorCreativo} alt="" className="w-100" />
                <a
                  href="https://www.linkedin.com/in/damian-gamarra"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={linkedinIcon}
                    alt=""
                    className="position-absolute"
                    style={{
                      width: '50px',
                      bottom: 0,
                      right: 50,
                    }}
                  />
                </a>
              </div>
              <div className="mt-3">
                <div className="fw-bolder text-center h4">Damián Gamarra</div>
                <div className="text-dark fw-bolder text-center h4">
                  <a
                    href="https://www.linkedin.com/in/damian-gamarra"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Damián Gamarra
                  </a>
                </div>
                <div className="text-primary fw-bolder text-center h4">CCO</div>
              </div>
              <div className="mt-3">
                <ul className="text-center">
                  <li className="mb-2">
                    <span className="pr-2">•</span> Graphic Designer specialized
                    in Branding and Marketing
                  </li>
                  <li className="mb-2">
                    <span className="pr-2">•</span> Videogame design experience
                  </li>
                  <li className="mb-2">
                    <span className="pr-2">•</span> NoCode
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
