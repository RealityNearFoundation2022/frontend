import React from 'react'
import { desktop, mobile, tablet } from '../../assets/img/background/index'

function Metaverso() {
  return (
    <>
      {/* <!-- Masthead--> */}
      <header className="masthead bg-primary text-white text-center bg-image min-vh-80">
        <div className="container d-flex align-items-center flex-column">
          {/* <!-- Masthead Heading--> */}
          <h1 className="masthead-heading text-uppercase mb-0">Lorem</h1>
        </div>
      </header>
      {/* <!--  Section--> */}
      <section
        className="page-section bg-dark bg-gradient text-white mb-0"
        id="about"
      >
        <div className="container pt-5">
          {/* <!--  Section Content--> */}
          <div className="row justify-content-center">
            <div className="col-lg-5 ms-auto">
              <h2 className="text-primary">NURUK: CIUDAD DE REALIDADES</h2>
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
            <div className="col-lg-5 me-auto">
              <img height="400px" src={mobile} alt="" srcSet="" />
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Section--> */}
      <section className="page-section bg-gradient near" id="near">
        <div className="container">
          {/* <!--  Slider Items--> */}
          <div
            id="carouselExampleControls"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                {/* <!--  Grid Items--> */}
                <div className="row justify-content-center">
                  {[1, 2, 3].map((i) => (
                    <div className="col-md-4 col-lg-3 mb-5">
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
                          alt="..."
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--  Section--> */}
      <section
        className="page-section bg-dark bg-gradient text-white mb-0"
        id="about"
      >
        <div className="container pt-5">
          {/* <!--  Section Content--> */}
          <div className="row justify-content-center">
            <div className="col-lg-5 ms-auto">
              <img
                height="400px"
                src={require('../../assets/img/background/bg-image-mobile.jpg')}
                alt=""
                srcSet=""
              />
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
      <footer className="page-section bg-dark near text-white text-center">
        <h1>FOOTER</h1>
      </footer>
    </>
  )
}

export default Metaverso
