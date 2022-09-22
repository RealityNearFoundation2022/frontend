import React, { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import HeaderSections from '../../HeaderSections'
// import CardNotices from '../CardNotices'
// import { dataNotices } from '../dataNotices'
import CarouselNovelty from './CarouselNovelty'
import imgFake from '../../../assets/img/random/cabin.png'

export default function Novelties() {
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
    fetch('http://localhost:3000/news')
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

  // const carousel = [...dataNotices.novelties]
  return (
    <div className="mt-5">
      <HeaderSections
        titleSection="Novedades"
        descriptionSection="Conoce las nuevas actualizaciones en el mundo de Reality Near"
        bgHeader="bg-header-novelties"
      />
      <div className="container mt-5 pt-5">
        <div className="w-100 d-flex align-items-center justify-content-center">
          <div className="w-90">
            <Slider {...settings1}>
              {carousel.map((element) => (
                <div className="rounded position-relative">
                  <img
                    src={imgFake}
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
            <h1 className="m-1 text-primary pr-2">Novedades Relacionadas</h1>
          </div>
          <CarouselNovelty />
        </div>
      </div>
    </div>
  )
}
