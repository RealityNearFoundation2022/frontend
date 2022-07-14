import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import ThemeContext from '../../utils/useContextTheme'
import HeaderSections from '../HeaderSections'
import { dataNotices } from './dataNotices'

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
      />
      <div className="w-90 p-5 mx-5">
        <Link to="/notices/novelties" className="text-primary fs-7">
          Novedades
        </Link>
        <Slider {...settings}>
          {notices.novelties.map((element) => (
            <Link to={`/notices/novelties/${element.id}`}>
              <div key={`novelties${element.id}`} className="w-90">
                <img src={element.img} alt="" className="w-100" />
                <h2 className={theme.txt}>{element.title}</h2>
                <p className={theme.txt}>{element.description}</p>
                <p className={theme.txt}>{element.date}</p>
              </div>
            </Link>
          ))}
        </Slider>
      </div>
      <div className="w-90 p-5 mx-5">
        <Link to="/notices/events" className="text-primary fs-7">
          Eventos
        </Link>
        <Slider {...settings}>
          {notices.events.map((element) => (
            <Link to={`/notices/events/${element.id}`}>
              <div key={`eventos${element.id}`} className="w-90">
                <img src={element.img} alt="" className="w-100" />
                <p>{element.description}</p>
              </div>
            </Link>
          ))}
        </Slider>
      </div>
    </div>
  )
}
