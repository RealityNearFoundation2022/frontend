/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Slider from 'react-slick'
import { getData } from '../../../api/methods'
import LoadingModal from '../../../components/LoadingModal'
import CardNotices from '../CardNotices'

require('dotenv').config()
const api = process.env.REACT_APP_API

export default function CarouselNovelty() {
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()
  const [carousel, setCarousel] = useState([])

  const settings2 = {
    className: 'slider variable-width',
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 1,
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
        breakpoint: 800,
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
      setIsLoading(true)
      const data = await getData('events')
      setCarousel([...data])
    } catch (error) {
      navigate('/server-error')
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    apiGet()
  }, [])
  return (
    <Slider {...settings2} className="py-3">
      <LoadingModal open={isLoading} handleClose={() => setIsLoading(false)} />
      {carousel.map((element) => (
        <Link to={`/notices/novelties/${element._id}`} key={element._id}>
          <CardNotices element={element} medias={[`${api}${element.image}`]} />
        </Link>
      ))}
    </Slider>
  )
}
