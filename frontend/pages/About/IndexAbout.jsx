import React from 'react'
import { mobile, tablet } from '../../assets/img/background/index'
import HeaderSections from '../HeaderSections'

function About() {
  return (
    <div className="mt-5">
      <HeaderSections titleSection="Titulo 1" />
      <section className="bg-dark bg-gradient text-white mb-0" id="about">
        <div className="container pt-5">
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
    </div>
  )
}

export default About
