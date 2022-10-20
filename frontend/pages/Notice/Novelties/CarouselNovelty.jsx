/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import { getData } from '../../../api/methods'
import CardNotices from '../CardNotices'
require('dotenv').config()
const api = process.env.REACT_APP_API

export default function CarouselNovelty() {
  const [carousel, setCarousel] = useState([])
  const settings2 = {
    className: 'center',
    infinite: false,
    centerPadding: '60px',
    slidesToShow: 3,
    swipeToSlide: true,
    afterChange(index) {
      console.log(
        `Slider Changed to: ${index + 1}, background: #222; color: #bada55`,
      )
    },
  }

  const apiGet = async () => {
    const data = await getData('news')
    setCarousel([...data])
  }

  useEffect(() => {
    apiGet()
  }, [])
  return (
    <Slider {...settings2}>
      {carousel.map((element) => (
        <Link to={`/notices/novelties/${element._id}`}>
          <CardNotices element={element} medias={[`${api}${element.image}`]} />
        </Link>
      ))}
    </Slider>
  )
}
