/* eslint-disable global-require */
import React, { useContext } from 'react'
import { useTranslation } from 'react-i18next'
import Slider from 'react-slick'
import ThemeContext from '../../utils/useContextTheme'
import { momentsCarousel } from './momentsCarousel'

export default function Moments() {
  const { theme } = useContext(ThemeContext)
  const { t } = useTranslation()

  console.log(window.innerWidth)
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

  const itemsCard = [...momentsCarousel]
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
            {itemsCard.map((element) => (
              <div className="">
                <img src={element.imgCarousel} alt="" className="mx-2 w-95" />
                <center>
                  <p className="fw-bold fs-5 mt-2 text-white">
                    {element.titleEvent}
                  </p>
                </center>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  )
}
