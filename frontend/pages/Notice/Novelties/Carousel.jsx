/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Slider from 'react-slick'
import { getData } from '../../../api/methods'
import CardNotices from '../CardNotices'
require('dotenv').config()
const api = process.env.REACT_APP_API

export default function CarouselNovelty() {
  const navigate = useNavigate()
  const [carousel, setCarousel] = useState([])
  const settings2 = {
    className: 'slider variable-width',
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  const apiGet = async () => {
    try {
      const data = await getData('news')
      setCarousel([...data])
    } catch (error) {
      navigate('/500')
    }
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
