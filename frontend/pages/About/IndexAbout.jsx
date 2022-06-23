import React from 'react'
import { mobile, tablet } from '../../assets/img/background/index'

function About() {
  return (
    <>
      {/* <!--  Section--> */}
      <section className="page-section bg-dark near" id="near">
        <div className="container">
          {/* <!--  Section Heading--> */}
          <div className="d-flex  flex-wrap flex-column justify-content-center">
            <h2 className="text-primary text-center my-5">FUNDADORES</h2>
            <img height="400px" src={tablet} alt="" />
          </div>
        </div>
      </section>
      <section className="bg-dark bg-gradient text-white mb-0" id="about">
        <div className="container pt-5">
          {/* <!--  Section Heading--> */}
          <div className="row justify-content-center pt-5">
            <div className="col-lg-4">
              <p className="lead">
                ­­­­Reality Near es un multimetaverso que combina las
                tecnologías de realidad aumentada y realidad virtual, de tal
                forma que los usuarios vivan sus distintas realidades trabajando
                juntos en armonía y de una manera que nunca antes había vivido.{' '}
              </p>
            </div>
          </div>
          {/* <!--  Section Content--> */}
          <div className="row justify-content-center">
            <div className="col-lg-4 ms-auto">
              <h2 className="text-primary">¿CUÁL ES EL PROBLEMA?</h2>
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
              <h2 className="text-primary">UN MUNDO DE OPORTUNIDADES</h2>
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
            <div className="col-lg-4 me-auto">
              <img src={mobile} alt="" />
            </div>
          </div>
        </div>
      </section>
      <footer className="page-section bg-gradient near text-white text-center">
        <h1>FOOTER</h1>
      </footer>
    </>
  )
}

export default About
