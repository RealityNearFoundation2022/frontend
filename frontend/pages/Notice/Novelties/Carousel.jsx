/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import { getData } from '../../../api/methods'
import LoadingModal from '../../../components/LoadingModal'
import CardNotices from '../CardNotices'

require('dotenv').config()
const api = process.env.REACT_APP_API

export default function CarouselNovelty({ setShow }) {
  const [isLoading, setIsLoading] = useState(false)
  const [carousel, setCarousel] = useState([])
  const settings2 = {
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    variableWidth: true,
    dots: false,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
    ],
  }

  const apiGet = async () => {
    try {
      setIsLoading(true)
      const data = await getData('news')
      setCarousel([...data])
      setShow(!![...data].length)
    } catch (error) {
      // navigate('/server-error')
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    apiGet()
  }, [])
  return (
    <>
      <LoadingModal open={isLoading} handleClose={() => setIsLoading(false)} />
      <div className="w-100 px-4">
        <Slider {...settings2}>
          {carousel.map((element) => (
            <Link
              to={`/notices/novelties/${element._id}`}
              key={element._id}
              className="w-100"
            >
              <CardNotices
                element={element}
                medias={[`${api}${element.image}`]}
              ></CardNotices>
            </Link>
          ))}
        </Slider>
      </div>
    </>
  )
}
