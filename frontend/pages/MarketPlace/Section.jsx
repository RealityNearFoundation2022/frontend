/* eslint-disable react/prop-types */
import React, { useContext } from 'react'
import { Typography } from '@mui/material'
import Slider from 'react-slick'
import { CaretRight } from 'phosphor-react'
import { Link } from 'react-router-dom'
import Card from './Card'
import ThemeContext from '../../utils/useContextTheme'
import { filtersMarketplace } from './Data_Categories/Categories'
// import { Category } from './Category'

export default function Section() {
  const categories = [...filtersMarketplace]
  const { theme } = useContext(ThemeContext)

  const settings = {
    className: 'center',
    infinite: true,
    centerPadding: '60px',
    slidesToShow: 3.5,
    swipeToSlide: true,
    afterChange(index) {
      console.log(
        `Slider Changed to: ${index + 1}, background: #222; color: #bada55`,
      )
    },
  }
  return (
    <div className="">
      <Typography mt={2} />
      {categories.map((item) => (
        <div className="w-90">
          <div className="d-flex align-items-center pb-4">
            <h1 className={`${theme.txt} m-1 text-primary pr-2`}>
              {item.title}
            </h1>
            <Link to={`/marketplace/${item.title.toLowerCase()}`}>
              <span className="text-grey fw-bolder"> Ver más</span>
              <CaretRight size={28} color="#33cc99" weight="bold" />
            </Link>
          </div>
          <Slider {...settings}>
            {item.itemCards.map((element) => (
              <Card elementsCard={element} category={item.title} />
            ))}
          </Slider>
        </div>
      ))}
    </div>
  )
}
