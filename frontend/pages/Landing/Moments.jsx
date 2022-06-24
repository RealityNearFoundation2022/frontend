/* eslint-disable global-require */
import React from 'react'
import { useTranslation } from 'react-i18next'
// import ThemeContext from '../../utils/useContextTheme'
import itemSlide from '../../assets/img/random/cabin.png'
export default function Moments() {
  // const { bgTheme, txtTheme } = useContext(ThemeContext)
  const { t } = useTranslation()
  return (
    <section className="h-100vh bg-secondary near" id="near">
      <div className="">
        <h2 className="text-center text-white text-uppercase text-secondary mb-0 bg-green h-20vh">
          {t('Conoce los eventos del momento')}
        </h2>
        <div
          id="carouselExampleControls"
          className="carousel slide pt-5"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              {/* <!--  Grid Items--> */}
              <div className="row justify-content-center">
                {/* <!--  Item 1--> */}
                <div className="col-md-4 col-lg-3 mb-5">
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
                  <p className="text-center text-white">Description 1</p>
                </div>
                {/* <!--  Item 2--> */}
                <div className="col-md-4 col-lg-3 mb-5">
                  <div
                    className="near-item mx-auto"
                    data-bs-toggle="modal"
                    data-bs-target="#nearModal2"
                  >
                    <div className="near-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                      <div className="near-item-caption-content text-center text-white">
                        <i className="fas fa-plus fa-3x"></i>
                      </div>
                    </div>
                    <img className="img-fluid" src={itemSlide} alt="..." />
                  </div>
                  <p className="text-center text-white">Description 2</p>
                </div>
                {/* <!--  Item 3--> */}
                <div className="col-md-4 col-lg-3 mb-5">
                  <div
                    className="near-item mx-auto"
                    data-bs-toggle="modal"
                    data-bs-target="#nearModal3"
                  >
                    <div className="near-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                      <div className="near-item-caption-content text-center text-white">
                        <i className="fas fa-plus fa-3x"></i>
                      </div>
                    </div>
                    <img className="img-fluid" src={itemSlide} alt="..." />
                  </div>
                  <p className="text-center text-white">Description 3</p>
                </div>
                {/* <!--  Item 3--> */}
                <div className="col-md-4 col-lg-3 mb-5">
                  <div
                    className="near-item mx-auto"
                    data-bs-toggle="modal"
                    data-bs-target="#nearModal3"
                  >
                    <div className="near-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                      <div className="near-item-caption-content text-center text-white">
                        <i className="fas fa-plus fa-3x"></i>
                      </div>
                    </div>
                    <img className="img-fluid" src={itemSlide} alt="..." />
                  </div>
                  <p className="text-center text-white">Description 4</p>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              {/* <!--  Grid Items--> */}
              <div className="row justify-content-center">
                {/* <!--  Item 4--> */}
                <div className="col-md-4 col-lg-3 mb-5 mb-lg-0">
                  <div
                    className="near-item mx-auto"
                    data-bs-toggle="modal"
                    data-bs-target="#nearModal4"
                  >
                    <div className="near-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                      <div className="near-item-caption-content text-center text-white">
                        <i className="fas fa-plus fa-3x"></i>
                      </div>
                    </div>
                    <img className="img-fluid" src={itemSlide} alt="..." />
                  </div>
                </div>
                {/* <!--  Item 5--> */}
                <div className="col-md-4 col-lg-3 mb-5 mb-md-0">
                  <div
                    className="near-item mx-auto"
                    data-bs-toggle="modal"
                    data-bs-target="#nearModal5"
                  >
                    <div className="near-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                      <div className="near-item-caption-content text-center text-white">
                        <i className="fas fa-plus fa-3x"></i>
                      </div>
                    </div>
                    <img className="img-fluid" src={itemSlide} alt="..." />
                  </div>
                </div>
                {/* <!--  Item 6--> */}
                <div className="col-md-4 col-lg-3 mb-5 mb-md-0">
                  <div
                    className="near-item mx-auto"
                    data-bs-toggle="modal"
                    data-bs-target="#nearModal6"
                  >
                    <div className="near-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                      <div className="near-item-caption-content text-center text-white">
                        <i className="fas fa-plus fa-3x"></i>
                      </div>
                    </div>
                    <img className="img-fluid" src={itemSlide} alt="..." />
                  </div>
                </div>
                {/* <!--  Item 5--> */}
                <div className="col-md-4 col-lg-3 mb-5 mb-md-0">
                  <div
                    className="near-item mx-auto"
                    data-bs-toggle="modal"
                    data-bs-target="#nearModal5"
                  >
                    <div className="near-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                      <div className="near-item-caption-content text-center text-white">
                        <i className="fas fa-plus fa-3x"></i>
                      </div>
                    </div>
                    <img className="img-fluid" src={itemSlide} alt="..." />
                  </div>
                </div>
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
