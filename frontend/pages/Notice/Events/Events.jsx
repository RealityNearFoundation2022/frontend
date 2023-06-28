/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState, useContext } from 'react'
import Slider from 'react-slick'
import { getData } from '../../../api/methods'
import HeaderSections from '../../HeaderSections'
import CarouselEvents from './CarouselEvents'
import { config } from 'dotenv'
import ThemeContext from '../../../utils/useContextTheme'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

config()
const api = process.env.REACT_APP_API

export default function Events() {
  const [carousel, setCarousel] = useState([])
  const { t } = useTranslation()

  const { theme } = useContext(ThemeContext)
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

  const apiGet = async () => {
    try {
      const eventsData = await getData('events')
      setCarousel([...eventsData])
    } catch {
      console.error('error')
    }
  }

  useEffect(() => {
    apiGet()
  }, [])
  return (
    <div className={`${theme.bg}`}>
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
                <Link
                  to={`/notices/events/${element._id}`}
                  key={element._id}
                  className="w-100"
                >
                  <div className="rounded position-relative" key={element.id}>
                    <img
                      src={`${api}${element.media[0].path}`}
                      alt=""
                      className="w-100 obj-fit-cover rounded"
                      width="300"
                      height="450"
                    />
                    <div className="position-absolute bottom-0 w-100">
                      <div
                        className={`${theme.txt} ${theme.bgCard} mt-0 w-100 p-4`}
                        style={{ opacity: 0.7 }}
                      >
                        <h1 className="m-0">{element.title}</h1>
                        <p className="m-0">{element.description}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </Slider>
          </div>
        </div>
        <div>
          <div className="d-flex align-items-center mt-5 mb-4">
            <h1 className="m-1 text-primary pr-2">
              {t('Eventos relacionados')}
            </h1>
          </div>
          <CarouselEvents />
        </div>
      </div>
    </div>
  )
}
