import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import { CaretRight } from 'phosphor-react'
import ThemeContext from '../../utils/useContextTheme'
import HeaderSections from '../HeaderSections'
import { dataNotices } from './dataNotices'
import CardNotices from './CardNotices'

export default function Notices() {
  const { theme } = useContext(ThemeContext)
  const notices = { ...dataNotices }
  const settings = {
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
  return (
    <div className={`${theme.bg} mt-5`}>
      <HeaderSections
        titleSection="Noticias"
        descriptionSection="Entérate de las últimas novedades en Reality Near"
        bgHeader="bg-header-notices"
      />
      <div className="w-100 container">
        <div>
          <div className="d-flex align-items-center mt-5 mb-4">
            <h1 className={`${theme.txt} m-1 text-primary pr-2`}>Novedades</h1>
            <Link to="/notices/novelties">
              <span className="text-grey fw-bolder"> Ver más</span>
              <CaretRight size={28} color="#33cc99" weight="bold" />
            </Link>
          </div>
          <Slider {...settings}>
            {notices.novelties.map((element) => (
              <Link to={`/notices/novelties/${element.id}`}>
                <CardNotices element={element} />
              </Link>
            ))}
          </Slider>
        </div>
        <div>
          <div className="d-flex align-items-center mt-5 mb-4">
            <h1 className={`${theme.txt} m-1 text-primary pr-2`}>Eventos</h1>
            <Link to="/notices/events">
              <span className="text-grey fw-bolder"> Ver más</span>
              <CaretRight size={28} color="#33cc99" weight="bold" />
            </Link>
          </div>
          <Slider {...settings}>
            {notices.events.map((element) => (
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
