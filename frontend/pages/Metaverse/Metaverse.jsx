import React, { useContext } from 'react'
import { useTranslation } from 'react-i18next'
// import { desktop, mobile, tablet } from '../../assets/img/background/index'
import metaverseNuruk from '../../assets/img/random/MetaverseNuruk.png'
import ThemeContext from '../../utils/useContextTheme'
import itemSlide from '../../assets/img/random/cabin.png'
import imgMobile from '../../assets/img/background/bg-image-mobile.jpg'

function Metaverso() {
  const { theme } = useContext(ThemeContext)
  const { t } = useTranslation()

  return (
    <>
      {/* <!-- Masthead--> */}
      <header className="masthead bg-primary text-white text-center bg-image bg-img-size-cover min-vh-80">
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
          <div className="row justify-content-center">
            <div className="col-lg-5 ms-auto">
              <img height="400px" src={imgMobile} alt="" srcSet="" />
            </div>
            <div className="col-lg-5 me-auto">
              <h2 className="text-primary">REALITY APP</h2>
              <p className="lead">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Corrupti aliquam culpa architecto quidem impedit cum saepe
                nobis, earum eaque rem explicabo animi suscipit repudiandae modi
                iure ducimus fugit cupiditate numquam. Lorem ipsum dolor sit
                amet, consectetur adipisicing elit. Corrupti aliquam culpa
                architecto quidem impedit cum saepe nobis, earum eaque rem
                explicabo animi suscipit repudiandae modi iure ducimus fugit
                cupiditate numquam. Lorem ipsum dolor sit amet, consectetur
                adipisicing elit. Corrupti aliquam culpa architecto quidem
                impedit cum saepe nobis, earum eaque rem explicabo animi
                suscipit repudiandae modi iure ducimus fugit cupiditate numquam.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Metaverso
