import React, { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import Slider from 'react-slick'
import ThemeContext from '../../utils/useContextTheme'
import HeaderSections from '../HeaderSections'
import CardNotices from './CardNotices'
import { dataNotices } from './dataNotices'

export default function EventSection() {
  const { idEvents } = useParams()
  const dataSection = [...dataNotices.events]
  const { theme } = useContext(ThemeContext)
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

  const dataItem = dataSection?.find((item) => item.id === Number(idEvents))
  return (
    <div className={`${theme.bg} mt-5`}>
      <HeaderSections
        titleSection={dataItem.title}
        descriptionSection={dataItem.description}
        bgHeader="bg-header-event"
      />
      <div className="m-5 p-5 w-90 d-flex flex-wrap">
        <div className="w-60 px-5">
          <h2>{dataItem.title}</h2>
          <p>{dataItem.section}</p>
          <center>
            <button type="button" className="w-40 btn btn-primary disabled">
              Ir
            </button>
          </center>
        </div>
        <div className="w-40">
          <img src={dataItem.img} alt="" className="w-100 rounded" />
        </div>
      </div>
      <div className="my-3 mx-2 px-5">
        <div className="d-flex align-items-center mt-5 mb-4">
          <h1 className="m-1 text-primary pr-2">Artículos Similares</h1>
        </div>
        <Slider {...settings}>
          {dataSection.map((element) => (
            <Link to={`/notices/events/${element.id}`}>
              <CardNotices element={element} />
            </Link>
          ))}
        </Slider>
      </div>
    </div>
  )
}
