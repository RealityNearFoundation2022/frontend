/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
import React, { useContext, useEffect, useState } from 'react'
import { Typography } from '@mui/material'
import Slider from 'react-slick'
import { CaretRight } from 'phosphor-react'
import { Link } from 'react-router-dom'
import Card from './Card'
import ThemeContext from '../../utils/useContextTheme'
// import { filtersMarketplace } from './Data_Categories/Categories'
import { nft_tokens } from '../../assets/js/near/utils'
// import { Category } from './Category'

export default function Section() {
  // const categories = [...filtersMarketplace]
  const { theme } = useContext(ThemeContext)
  const [categories, setCategories] = useState([])

  useEffect(() => {
    async function fetchList() {
      /* Trae la data de Firebase en un array de objetos */
      const listMenu = await nft_tokens('0', 20)
      const data = listMenu.map((e) => ({
        ...e.metadata,
        author: e.owner_id,
        id: e.token_id,
      }))
      const resultNovelties = []
      const resultOferts = []
      const resultNfts = []
      data.forEach((element, index) => {
        if (index <= 4) {
          resultNovelties.push({
            id: element.id,
            author: element.author,
            img: element.media,
            titleItem: element.title,
            description: element.description,
            price: 143000,
          })
        } else if (index <= 9) {
          resultOferts.push({
            id: element.id,
            author: element.author,
            img: element.media,
            titleItem: element.title,
            description: element.description,
            price: 143000,
          })
        } else {
          resultNfts.push({
            id: element.id,
            author: element.author,
            img: element.media,
            titleItem: element.title,
            description: element.description,
            price: 143000,
          })
        }
      })
      const result = [
        { id: 1, title: 'Novedades', itemCards: resultNovelties },
        { id: 2, title: 'Ofertas', itemCards: resultOferts },
        { id: 3, title: 'Realands', itemCards: [] },
        { id: 4, title: 'Patchas', itemCards: [] },
        { id: 5, title: 'NFTs', itemCards: resultNfts },
        { id: 6, title: 'Otros', itemCards: [] },
      ]
      setCategories(result)
      console.log(data)
    }
    fetchList()
  }, [])

  const settings = {
    className: 'center',
    infinite: true,
    centerPadding: '60px',
    slidesToShow: 3.5,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2.5,
        },
      },
      {
        breakpoint: 420,
        settings: {
          slidesToShow: 1.5,
        },
      },
    ],
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
      {categories
        .filter(
          (element) =>
            element.title.toLowerCase() !== 'realands' &&
            element.title.toLowerCase() !== 'patchas',
        )
        .map((item) => (
          <div className="w-100">
            <div className="d-flex align-items-center pb-4" id="mpResponsive">
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
