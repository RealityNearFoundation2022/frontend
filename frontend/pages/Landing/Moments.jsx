/* eslint-disable global-require */
import React, { useContext } from 'react'
import itemSlide from '../../assets/img/random/cabin.png'
import ThemeContext from '../../utils/useContextTheme'

export default function Moments() {
  const { bgTheme, txtThem } = useContext(ThemeContext)
  return (
    <section className={`${bgTheme} h-100vh near`} id="near">
      <div className="container-moments">
        <h2
          className={`${txtThem} text-center text-uppercase text-secondary pt-5 mb-0 h-20vh d-flex align-items-center title`}
        >
          Conoce los eventos del momento
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
