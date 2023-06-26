import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Slider from 'react-slick'
import { getData } from '../../../api/methods'
import LoadingModal from '../../../components/LoadingModal'
import HeaderSections from '../../HeaderSections'
import { useTranslation } from 'react-i18next'

import CarouselNovelty from './Carousel'
require('dotenv').config()
const api = process.env.REACT_APP_API
// import imgFake from '../../../assets/img/random/cabin.png'

export default function Novelties() {
  const [carousel, setCarousel] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const { t } = useTranslation()
  const navigate = useNavigate()

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

  function handleClose() {
    setIsLoading(false)
  }

  const apiGet = async () => {
    try {
      setIsLoading(true)
      const data = await getData('news')
      setCarousel([...data])
    } catch (error) {
      navigate('/server-error')
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    apiGet()
  }, [])

  // const carousel = [...dataNotices.novelties]
  return (
    <div className="mt-5">
      <LoadingModal open={isLoading} handleClose={handleClose} />
      <HeaderSections
        titleSection="Noticias"
        descriptionSection="Conoce las nuevas actualizaciones en el mundo de Reality Near"
        bgHeader="bg-header-novelties"
      />
      <div className="container mt-5 pt-5">
        <div className="w-100 d-flex align-items-center justify-content-center">
          <div className="w-90">
            <Slider {...settings1}>
              {carousel.map((element) => (
                <div className="rounded position-relative" key={element.title}>
                  <img
                    src={`${api}${element.image}`}
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
            <h1 className="m-1 text-primary pr-2">
              {t('Noticias Relacionadas')}
            </h1>
          </div>
          <CarouselNovelty />
        </div>
      </div>
    </div>
  )
}
