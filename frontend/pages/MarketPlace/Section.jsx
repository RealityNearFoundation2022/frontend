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
import { useTranslation } from 'react-i18next'
import ComingSoon from '../ErrorPage/ComingSoon'
// import { Category } from './Category'

export default function Section() {
  // const categories = [...filtersMarketplace]
  const { theme } = useContext(ThemeContext)
  const [categories, setCategories] = useState([])
  const [error, setError] = useState(false)
  const { t } = useTranslation()
  async function fetchList() {
    console.log('1')
    const listMenu = await nft_tokens('0', 20)
    console.log('2')
    const data = listMenu.map((e) => ({
      ...e.metadata,
      author: e.owner_id,
      id: e.token_id,
    }))
    const resultNovelties = []
    const resultOferts = []
    const resultNfts = []
    const resultOthers = []
    data.forEach((element, index) => {
      if (index <= 2) {
        resultNovelties.push({
          id: element.id,
          author: element.author,
          img: element.media,
          titleItem: element.title,
          description: element.description,
          price: 143000,
        })
      } else if (index <= 6) {
        resultOferts.push({
          id: element.id,
          author: element.author,
          img: element.media,
          titleItem: element.title,
          description: element.description,
          price: 143000,
        })
      } else if (index <= 10) {
        resultNfts.push({
          id: element.id,
          author: element.author,
          img: element.media,
          titleItem: element.title,
          description: element.description,
          price: 143000,
        })
      } else {
        resultOthers.push({
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
      { id: 6, title: 'Otros', itemCards: resultOthers },
    ]
    setCategories(result)
  }

  useEffect(() => {
    try {
      fetchList()
    } catch {
      console.log('error')
      setError(true)
    }
  }, [])

  const settings = {
    className: 'center',
    infinite: true,
    centerPadding: '60px',
    slidesToShow: 3,
    slidesToScroll: 1,
    rows: 1,
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
    <>
      {!error ? (
        <div className="">
          <Typography mt={2} />
          {categories
            .filter(
              (element) =>
                element.title.toLowerCase() !== 'realands' &&
                element.title.toLowerCase() !== 'patchas',
            )
            .map((item) => (
              <div className="w-100" key={item.title}>
                <div
                  className="d-flex align-items-center pb-4"
                  id="mpResponsive"
                >
                  <h1 className={`${theme.txt} m-1 text-primary pr-2`}>
                    {t(item?.title)}
                  </h1>
                  <Link
                    to={`/marketplace/${item.title.toLowerCase()}`}
                    className="mt-3"
                  >
                    <span className="text-grey fw-bolder mt-3 show-more">
                      {t('Ver más')}
                    </span>
                    <CaretRight size={28} color="#33cc99" weight="bold" />
                  </Link>
                </div>
                <Slider {...settings}>
                  {item?.itemCards.map((element) => (
                    <Card
                      key={element}
                      elementsCard={element}
                      category={item?.title}
                    />
                  ))}
                </Slider>
              </div>
            ))}
        </div>
      ) : (
        <ComingSoon />
      )}
    </>
  )
}
