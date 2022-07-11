import React, { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import Slider from 'react-slick'
import ThemeContext from '../../utils/useContextTheme'
import HeaderSections from '../HeaderSections'
import { dataNotices } from './dataNotices'

export default function NoveltySection() {
  const { idNovelties } = useParams()
  const dataSection = [...dataNotices.novelties]
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

  const dataItem = dataSection?.find((item) => item.id === Number(idNovelties))
  console.log(dataSection, dataItem)

  return (
    <div className="mt-5">
      <HeaderSections
        titleSection={dataItem.title}
        descriptionSection={dataItem.description}
      />
      <div className="m-5 p-5 w-90 d-flex flex-wrap">
        <div className="w-60">
          <p>{dataItem.sectionOne}</p>
        </div>
        <div className="w-40">
          <img src={dataItem.img} alt="" className="w-100" />
        </div>
        <div className="w-40">
          <img src={dataItem.img} alt="" className="w-100" />
        </div>
        <div className="w-60">
          <p>{dataItem.sectionSecond}</p>
        </div>
      </div>
      <div className="w-90 p-5 m-5">
        <div className={theme.txt}>Artículos similares</div>
        <Slider {...settings}>
          {dataSection.map((element) => (
            <Link to={`/notices/novelties/${element.id}`}>
              <div key={`novelties${element.id}`} className="w-75">
                <img src={element.img} alt="" className="w-100" />
                <h2>{element.title}</h2>
                <p>{element.description}</p>
                <p>{element.date}</p>
              </div>
            </Link>
          ))}
        </Slider>
      </div>
    </div>
  )
}
