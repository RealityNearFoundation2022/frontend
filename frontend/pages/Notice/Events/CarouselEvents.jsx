/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Slider from 'react-slick'
import { getData } from '../../../api/methods'
import CardNotices from '../CardNotices'
require('dotenv').config()
const api = process.env.REACT_APP_API

export default function CarouselEvents() {
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
    try {
      const data = await getData('events')
      setCarousel(data)
    } catch (error) {
      console.log('HOLAA')
      navigate('/500')
    }
  }

  useEffect(() => {
    apiGet()
  }, [])
  return (
    <Slider {...settings2}>
      {carousel.map((element) => (
        <Link to={`/notices/events/${element._id}`}>
          <CardNotices
            element={element}
            medias={element.media.map((obj) => `${api}${obj.path}`)}
          />
        </Link>
      ))}
    </Slider>
  )
}
