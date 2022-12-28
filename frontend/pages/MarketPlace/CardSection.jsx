/* eslint-disable react/prop-types */
import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import Slider from 'react-slick'
import Card from './Card'
import ThemeContext from '../../utils/useContextTheme'
import { filtersMarketplace } from './Data_Categories/Categories'
import logo from '../../assets/img/random/logo1.png'
import { useTranslation } from 'react-i18next'

export function CardSection() {
  const { category } = useParams()
  const { theme } = useContext(ThemeContext)
  const { t } = useTranslation()

  const dataCategory = filtersMarketplace?.find(
    (item) => item.title.toLowerCase() === 'novedades',
  )
  const dataCard = dataCategory?.itemCards?.find(
    ({ id }) => id === Number('11'),
  )
  const settings = {
    className: 'center',
    infinite: true,
    centerPadding: '60px',
    slidesToShow: 4,
    swipeToSlide: true,
    afterChange(index) {
      console.log(
        `Slider Changed to: ${index + 1}, background: #222; color: #bada55`,
      )
    },
  }

  return (
    <section className={`${theme.bg} p-5 m-5`}>
      <div className="d-flex justify-content-between align-items-center w-100 h-75vh">
        <div className="w-50 mx-5">
          <h1 className={`${theme.txt} text-primary my-1`}>
            {dataCard.titleItem}
          </h1>
          <hr />
          <div className="d-flex align-items-center m-0">
            <img src={logo} alt="" width="50" height="50" />
            <h2 className={`${theme.txt} text-grey`}>{dataCard.price}</h2>
          </div>
          <hr />
          <h4 className={theme.txt}>Descripción</h4>
          <p className={theme.txt}>{dataCard.description}</p>
          <h4 className={theme.txt}>Creador</h4>
          <p className={theme.txt}>{dataCard.author}</p>
          <center>
            <button
              type="button"
              className="_btn btn btn-primary disabled w-40"
            >
              {t('Adquirir')}
            </button>
          </center>
        </div>
        <div className="w-40 h-100 px-5 ml-5">
          <img src={dataCard.img} alt="" className="h-100" />
        </div>
      </div>
      <div className="mt-5 mx-5">
        <div className="w-100">
          <h1 className="text-primary">Artículos Similares</h1>
          <Slider {...settings}>
            {dataCategory.itemCards.map((element, index) => (
              <Card key={index} elementsCard={element} category={category} />
            ))}
          </Slider>
        </div>
      </div>
    </section>
  )
}
