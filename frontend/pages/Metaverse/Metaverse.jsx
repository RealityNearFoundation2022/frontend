import React, { useContext } from 'react'
import { useTranslation } from 'react-i18next'
// import { desktop, mobile, tablet } from '../../assets/img/background/index'
import metaverseNuruk from '../../assets/img/random/MetaverseNuruk.png'
import ThemeContext from '../../utils/useContextTheme'
import itemSlide from '../../assets/img/random/cabin.png'
import imgMobile from '../../assets/img/metaverse/phone.png'
import appleStore from '../../assets/img/metaverse/apple-store.png'
import googlePlay from '../../assets/img/metaverse/google-play.png'

function Metaverso() {
  const { theme } = useContext(ThemeContext)
  const { t } = useTranslation()

  return (
    <>
      {/* <!-- Masthead--> */}
      <header className="masthead text-white text-center bg-img-metaverse bg-img-size-cover min-vh-80">
        <div className="container d-flex align-items-center flex-column">
          {/* <!-- Masthead Heading--> */}
          <h1 className="masthead-heading text-uppercase mb-0">Lorem</h1>
        </div>
      </header>
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
        <div className="">
          {/* <!--  Slider Items--> */}
          <div
            id="carouselExampleControls"
            className="carousel slide pt-5"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                {/* <!--  Grid Items--> */}
                <div className="row justify-content-around">
                  {/* <!--  Items--> */}
                  {[1, 2, 3].map((item) => (
                    <div className="col-md-4 col-lg-3 mb-5  mb-lg-0">
                      <div
                        className="near-item  mx-auto"
                        data-bs-toggle="modal"
                        data-bs-target="#nearModal1"
                      >
                        <div className="near-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                          <div className="near-item-caption-content text-center text-white">
                            <i className="fas fa-plus fa-3x"></i>
                          </div>
                        </div>
                        <img className="img-fluid" src={itemSlide} alt="..." />
                      </div>
                      <p className={`${theme.txt} text-center p-3`}>
                        Description {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="carousel-item">
                {/* <!--  Grid Items--> */}
                <div className="row justify-content-around">
                  {/* <!--  Item 4--> */}
                  {[4, 5, 6].map((item) => (
                    <div className="col-md-4 col-lg-3 mb-5  mb-lg-0">
                      <div
                        className="near-item  mx-auto"
                        data-bs-toggle="modal"
                        data-bs-target="#nearModal1"
                      >
                        <div className="near-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                          <div className="near-item-caption-content text-center text-white">
                            <i className="fas fa-plus fa-3x"></i>
                          </div>
                        </div>
                        <img className="img-fluid" src={itemSlide} alt="..." />
                      </div>
                      <p className={`${theme.txt} text-center p-3`}>
                        Description {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
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
                <img src={appleStore} alt="" />
                <img src={googlePlay} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Metaverso
