import React, { useContext } from 'react'
import { Typography } from '@mui/material'
import Slider from 'react-slick'
import Card from './Card'
import ThemeContext from '../../utils/useContextTheme'
import { filtersMarketplace } from './Data_Categories/Categories'

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
    <div className="mt-5">
      <Typography mt={2} />
      {categories.map((item) => (
        <div className="w-90">
          <h1 className={theme.txt}>{item.title}</h1>
          <Slider {...settings}>
            {item.itemCards.map((element) => (
              <Card elementsCard={element} />
            ))}
          </Slider>
        </div>
      ))}
    </div>
  )
}
