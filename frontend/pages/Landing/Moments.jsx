/* eslint-disable global-require */
import React, { useContext } from 'react'
import { useTranslation } from 'react-i18next'
import Slider from 'react-slick'
import ThemeContext from '../../utils/useContextTheme'
import { momentsCarousel } from './momentsCarousel'

// import itemSlide from '../../assets/img/random/cabin.png'
export default function Moments() {
  const { theme } = useContext(ThemeContext)
  const { t } = useTranslation()

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

  const itemsCard = [...momentsCarousel]
  return (
    <section className={`${theme.bg} h-100vh near mt-5`} id="near">
      <div className="w-100">
        <h2 className="text-uppercase text-primary ms-5 ps-5 fs-7 pt-2 h-20vh font-source-sans-3 fw-bold">
          {t('Conoce los eventos del momento')}
        </h2>
        <div className="w-100 bg-primary pt-5 pb-4">
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
        {/* <div className="d-flex justify-content-center">
          <div className="col-md-6 col-lg-4 mb-5">
            <div
              className="near-item mx-auto"
              data-bs-toggle="modal"
              data-bs-target="#nearModal1"
            >
              <div className="near-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                <div className="near-item-caption-content text-center text-white">
                  <i className="fas fa-plus fa-3x"></i>
                </div>
              </div>
              <img
                className="img-fluid"
                src={require('../../assets/img/random/cabin.png')}
                alt="o"
              />
            </div>
          </div>
        </div> */}
      </div>
    </section>
  )
}

/* <div
          id="carouselExampleControls"
          className="carousel slide pt-5 bg-primary"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              {/ <!--  Grid Items--> /}
              <div className="row justify-content-around">
                {/ <!--  Items--> /}
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
                    <p className="text-center text-white p-3">
                      Description {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="carousel-item">
              {/ <!--  Grid Items--> /}
              <div className="row justify-content-around">
                {/ <!--  Item 4--> /}
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
                    <p className="text-center text-white p-3">
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
         */
