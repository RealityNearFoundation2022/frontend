import React, { useContext } from 'react'
import mobile from '../../assets/img/random/MetaverseNuruk.png'
import ThemeContext from '../../utils/useContextTheme'
import HeaderSections from '../HeaderSections'

function About() {
  const { theme } = useContext(ThemeContext)
  return (
    <div className="mt-5">
      <HeaderSections titleSection="Titulo 1" />
      <section className={`${theme.bg} text-white mb-0`} id="about">
        <div className="container pt-5">
          {/* <!--  Section Content--> */}
          <div className="d-flex">
            <div className="d-flex flex-column gap-2">
              <h2 className="text-primary">¿QUÉ ES REALITY NEAR?</h2>
              <p className={`${theme.txt} lead`}>
                Reality Near es un multimetaverso que combina tecnlogía y
                realidad, de tal forma que los usuarios puedan desarrollarse en
                un nuevo ambiente completamente inmersivo y digital que, además,
                genera valor en su experiencia.
              </p>
              <h2 className="text-primary">¿CUÁL ES EL PROBLEMA?</h2>
              <p className={`${theme.txt} lead`}>
                Cada día que pasa, más son las limitaciones socioecónomicas y
                educativas a nivel global. Muchas personas emplean la mayoría de
                sus recursos en conseguir oportunidades de desarrollo, las
                cuales no siempre garantizan que salgan adelante.
              </p>
              <h2 className="text-primary">UN MUNDO DE OPORTUNIDADES</h2>
              <p className={`${theme.txt} lead`}>
                En Reality Near buscamos generar oportunidades para el
                desarrollo de los usuarios en ámbitos socioeconómicos y
                educativos, dentro de un ambiente descentralizado que garantiza
                las mismas oportunidades de crecimiento para todos. A través de
                la fusión de la tecnología con la realidad, se busca crear un
                nuevo mundo con posibilidades infinitas. Aquí podrás crecer,
                aprender, desarrollarte, y lo más importante: crear todo lo que
                puedas imaginar. <br /> Este puede ser tu nuevo comienzo, solo
                debes dejar que tu creatividad defina el camino.
              </p>
            </div>
            <div className="p-3">
              <img src={mobile} alt="" className="rounded ml-2" />
            </div>
          </div>
        </div>
      </section>
      <section className="w-100 bg-img-realExperience bg-img-size-cover h-40vh"></section>
      {/* <!--  Section--> */}
      <section className={`${theme.bg} near`} id="near">
        <div className="container">
          {/* <!--  Section Heading--> */}
          <div className="d-flex  flex-wrap flex-column justify-content-center">
            <h2 className="text-primary text-center my-5">FUNDADORES</h2>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
