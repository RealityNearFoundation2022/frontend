/* eslint-disable global-require */
import React, { useContext, useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import Slider from 'react-slick'
import ThemeContext from '../../utils/useContextTheme'
import { getData } from '../../api/methods'

export default function Moments() {
  const { theme } = useContext(ThemeContext)
  const { t } = useTranslation()
  const api = process.env.REACT_APP_API

  const [events, setEvents] = useState([])
  const settings = {
    className: 'center',
    infinite: true,
    centerPadding: '60px',
    slidesToShow: 2,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    afterChange(index) {
      console.log(
        `Slider Changed to: ${index + 1}, background: #222; color: #bada55`,
      )
    },
  }

  useEffect(() => {
    apiGet()
  }, [])

  const apiGet = async () => {
    const eventsData = await getData('events')
    setEvents(eventsData)
  }
  return (
    <section
      className={`${theme.bg} ${
        window.innerHeight / window.innerWidth < 0.8 && 'h-100vh'
      } near pt-5`}
      id="near"
    >
      <div className="w-100 h-100 mt-2">
        <p className="text-uppercase text-primary fs-7 px-3porcent font-source-sans-3 fw-bold">
          {t('Conoce los eventos del momento')}
        </p>
        <div className="w-100 bg-primary h-70 d-flex align-items-center py-5 mt-2">
          <Slider {...settings} className="w-90 ps-5porcent">
            {events.map(({ title, media }) => (
              <div className="">
                <img
                  src={`${api}${media[0].path}`}
                  alt=""
                  className="mx-2 w-95 events-img"
                />
                <center>
                  <p className="fw-bold fs-5 mt-2 text-white">{title}</p>
                </center>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  )
}
