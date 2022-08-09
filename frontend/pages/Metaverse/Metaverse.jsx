import React, { useContext } from 'react'
import { useTranslation } from 'react-i18next'
// import { desktop, mobile, tablet } from '../../assets/img/background/index'
import Slider from 'react-slick'
import metaverseNuruk from '../../assets/img/metaverse/metaverse.png'
import ThemeContext from '../../utils/useContextTheme'
// import itemSlide from '../../assets/img/random/cabin.png'
import imgMobile from '../../assets/img/metaverse/phone.png'
import appleStore from '../../assets/img/metaverse/apple-store.png'
import googlePlay from '../../assets/img/metaverse/google-play.png'
import HeaderSections from '../HeaderSections'
import { momentsCarousel } from '../Landing/momentsCarousel'

function Metaverso() {
  const { theme } = useContext(ThemeContext)
  const { t } = useTranslation()
  const itemsCard = [...momentsCarousel]

  const settings = {
    className: 'center',
    infinite: true,
    centerPadding: '60px',
    slidesToShow: 2,
    swipeToSlide: true,
    afterChange(index) {
      console.log(
        `Slider Changed to: ${index + 1}, background: #222; color: #bada55`,
      )
    },
  }

  return (
    <div className="mt-5">
      {/* <!-- Masthead--> */}
      <HeaderSections
        titleSection="Metaverse"
        descriptionSection="Conoce más del multimetaverso Reality Near"
        bgHeader="bg-header-metaverse"
      />
      {/* <!--  Section--> */}
      <section className={`${theme.bg} page-section text-white`} id="about">
        <div className="container pt-5">
          {/* <!--  Section Content--> */}
          <div className="d-flex justify-content-between">
            <div className="w-50">
              <h2 className="text-primary fs-7 mb-4">
                NURUK: CIUDAD DE REALIDADES
              </h2>
              <p className={`lead ${theme.txt}`}>
                {t(
                  'Nuruk es la principal y primera ciudad del multimetaverso 3D en Reality Near. El nombre se basa en la unión de dos palabras: new (nuevo en inglés) y uruk (la primera ciudad sobre la faz de la Tierra).',
                )}
              </p>
              <p className={`lead ${theme.txt}`}>
                {t(
                  'Podrás encontrar infinidad de actividades en nuestro multimetaverso. Por ejemplo, podrás asistir al partido de tu equipo favorito, contratar nuevos empleados para tu empresa o incluso enseñar a hablar francés. Todo depende de tu creatividad y de cómo aprovechas los beneficios que Reality Near provee.',
                )}
              </p>
              <center>
                <button
                  type="button"
                  className="btn btn-primary btn-xl disabled w-50"
                >
                  Dar un Vistazo
                </button>
              </center>
            </div>
            <div className="w-50 d-flex justify-content-end">
              <img src={metaverseNuruk} alt="" className="w-75" />
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Section--> */}
      <section className={`${theme.bg} near`} id="near">
        <div className="w-100 pt-5 pb-4 mt-2">
          <Slider {...settings} className="w-90 ms-5 ps-5">
            {itemsCard.map((element) => (
              <div className="w-95 ms-1 me-0">
                <img src={element.imgCarousel} alt="" className="mx-2" />
                <center>
                  <p className="fw-bold fs-5 mt-2 text-white">
                    {element.titleEvent}
                  </p>
                </center>
              </div>
            ))}
          </Slider>
        </div>
      </section>
      {/* <!--  Section--> */}
      <section
        className={`${theme.bg} page-section text-white mb-0`}
        id="about"
      >
        <div className="container pt-5">
          {/* <!--  Section Content--> */}
          <div className="d-flex justify-content-center">
            <div className="w-50 px-5">
              <img
                height="400px"
                src={imgMobile}
                alt=""
                className="w-100 h-75vh"
              />
            </div>
            <div className="w-50 px-2">
              <h2 className="text-primary">REALITY APP</h2>
              <p className={`${theme.txt} lead`}>
                Reality Near App ofrece una nueva experiencia fusionando
                tecnología y realidad. Esta te permitirá ser parte de eventos,
                ver publicidad, completar misiones, ver avatares y muchas cosas
                más en la vida real usando sólo la cámara de tu teléfono. Dicho
                contenido te permitirá interactuar con la vida real a través de
                tu dispositivo móvil, generando una experiencia totalmente
                inmersiva y valiosa. <br />
                <br /> Todo contenido creado podrás visualizarlo en las tierras
                de los demás usuarios y, si posees una, podrás crear y compartir
                tu creación con la comunidad Reality Near. <br />
                <br /> En la misma aplicación contarás con una wallet, donde
                administrarás tus Realities y NFTs, así como tus transacciones
                pasadas. También podrás añadir amigos fácilmente; enviarles y
                recibir mensajes; y, además, ver si están conectados o cerca
                tuyo.
              </p>
              <div className="d-flex justify-content-between">
                <img src={appleStore} alt="" height="70" className="mt-3" />
                <img src={googlePlay} alt="" height="100" className="mt-0" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Metaverso
