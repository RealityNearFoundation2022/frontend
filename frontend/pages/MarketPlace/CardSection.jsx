/* eslint-disable react/prop-types */
import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Slider from 'react-slick'
import Card from './Card'
import ThemeContext from '../../utils/useContextTheme'
import { filtersMarketplace } from './Data_Categories/Categories'

export function CardSection() {
  const { idCard, category } = useParams()
  const { theme } = useContext(ThemeContext)

  const dataCategory = filtersMarketplace?.find(
    (item) => item.title.toLowerCase() === category,
  )
  console.log(dataCategory?.itemCards)
  const dataCard = dataCategory?.itemCards?.find(
    ({ id }) => id === Number(idCard),
  )
  console.log(dataCard)
  const settings = {
    className: 'center',
    infinite: true,
    centerPadding: '60px',
    slidesToShow: 5,
    swipeToSlide: true,
    afterChange(index) {
      console.log(
        `Slider Changed to: ${index + 1}, background: #222; color: #bada55`,
      )
    },
  }
  useEffect(() => {
    console.log(category)
  }, [category])
  return (
    <section className={`${theme.bg} p-5 mt-5`}>
      <div className="d-flex justify-content-around w-100">
        <div className="w-50">
          <h1 className={theme.txt}>{dataCard.titleItem}</h1>
          <hr />
          <div>
            <p className={theme.txt}>{dataCard.price}</p>
          </div>
          <hr />
          <h4 className={theme.txt}>Descripción</h4>
          <p className={theme.txt}>{dataCard.description}</p>
          <h4 className={theme.txt}>Creador</h4>
          <p className={theme.txt}>{dataCard.author}</p>
        </div>
        <div className="w-50">
          <img src={dataCard.img} alt="" className="w-100" />
        </div>
      </div>
      <div>
        <div className="w-100">
          <h1 className={theme.txt}>Artículos Similares</h1>
          <Slider {...settings}>
            {dataCategory.itemCards.map((element) => (
              <Card elementsCard={element} category={category} />
            ))}
          </Slider>
        </div>
      </div>
    </section>
  )
}
