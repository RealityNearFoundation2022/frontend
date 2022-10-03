/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react'
import Slider from 'react-slick'
import HeaderSections from '../../HeaderSections'
import { api } from '../rutaApiNotices'
import CarouselEvents from './CarouselEvents'

export default function Events() {
  const [carousel, setCarousel] = useState([])
  const settings1 = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 4000,
    cssEase: 'linear',
  }

  const apiGet = () => {
    fetch(`${api}/api/v1/events`)
      .then(
        (response) => response.json(),
        // setCarousel([...response.json()])
      )
      .then((data) => {
        console.log(data)
        setCarousel([...data])
      })
  }

  useEffect(() => {
    apiGet()
  }, [])
  return (
    <div className="">
      <HeaderSections
        titleSection="Eventos"
        descriptionSection="Dale un vistazo a los eventos del momento"
        bgHeader="bg-header-events"
      />
      <div className="container mt-5 pt-5">
        <div className="w-100 d-flex align-items-center justify-content-center">
          <div className="w-90">
            <Slider {...settings1}>
              {carousel.map((element) => (
                <div className="rounded position-relative" key={element.id}>
                  <img
                    src={`${api}${element.media[0].path}`}
                    alt=""
                    className="w-100 obj-fit-cover rounded"
                    width="300"
                    height="450"
                  />
                  <div className="position-absolute bottom-0 p-4">
                    <h1 className="m-0">{element.title}</h1>
                    <p className="m-0">{element.description}</p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
        <div>
          <div className="d-flex align-items-center mt-5 mb-4">
            <h1 className="m-1 text-primary pr-2">Eventos Relacionados</h1>
          </div>
          <CarouselEvents />
        </div>
      </div>
    </div>
  )
}
