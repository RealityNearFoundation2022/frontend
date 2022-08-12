import React from 'react'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import HeaderSections from '../HeaderSections'
import CardNotices from './CardNotices'
import { dataNotices } from './dataNotices'

export default function Events() {
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

  const settings2 = {
    className: 'center',
    infinite: true,
    centerPadding: '60px',
    slidesToShow: 3,
    swipeToSlide: true,
    afterChange(index) {
      console.log(
        `Slider Changed to: ${index + 1}, background: #222; color: #bada55`,
      )
    },
  }
  const carousel = [...dataNotices.events]
  return (
    <div className="mt-5">
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
                <div className="rounded position-relative">
                  <img
                    src={element.img}
                    alt=""
                    className="w-100 obj-fit-cover"
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
          <Slider {...settings2}>
            {carousel.map((element) => (
              <Link to={`/notices/events/${element.id}`}>
                <CardNotices element={element} />
              </Link>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  )
}
