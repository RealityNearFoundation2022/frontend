import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import CardNotices from '../CardNotices'

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

  const apiGet = () => {
    fetch('http://localhost:3000/news')
      .then(
        (response) => response.json(),
        // setCarousel([...response.json()])
      )
      .then((data) => {
        console.log(data)
        setCarousel([...data])
      })
  }

  useEffect(() => {
    apiGet()
  }, [])
  return (
    <Slider {...settings2}>
      {carousel.map((element) => (
        <Link to={`/notices/novelties/${element.id}`}>
          <CardNotices element={element} />
        </Link>
      ))}
    </Slider>
  )
}
