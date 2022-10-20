/* eslint-disable react/prop-types */
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Slider from 'react-slick'
import Card from './Card'
import ThemeContext from '../../utils/useContextTheme'
import { filtersMarketplace } from './Data_Categories/Categories'
import logo from '../../assets/img/random/logo1.png'
import { nft_tokens } from '../../assets/js/near/utils'

export function CardSection() {
  const { idCard, category } = useParams()
  const { theme } = useContext(ThemeContext)

  // const [filtersMarketplace, setData] = useState([])

  useEffect(() => {
    async function fetchList() {
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
      console.log(result)
    }
    fetchList()
  }, [])

  const dataCategory = filtersMarketplace?.find(
    (item) => item.title.toLowerCase() === category,
  )
  console.log(dataCategory?.itemCards)
  const dataCard = dataCategory?.itemCards?.find(
    ({ id }) => id === Number(idCard),
  )
  console.log(dataCard)
  const settings = {
    className: 'center',
    infinite: true,
    centerPadding: '60px',
    slidesToShow: 4,
    swipeToSlide: true,
    afterChange(index) {
      console.log(
        `Slider Changed to: ${index + 1}, background: #222; color: #bada55`,
      )
    },
  }
  useEffect(() => {
    console.log(category)
  }, [category])
  return (
    <section className={`${theme.bg} p-5 m-5`}>
      <div className="d-flex justify-content-between align-items-center w-100 h-75vh">
        <div className="w-50 mx-5">
          <h1 className={`${theme.txt} text-primary my-1`}>
            {dataCard.titleItem}
          </h1>
          <hr />
          <div className="d-flex align-items-center m-0">
            <img src={logo} alt="" width="50" height="50" />
            <h2 className={`${theme.txt} text-grey`}>{dataCard.price}</h2>
          </div>
          <hr />
          <h4 className={theme.txt}>Descripción</h4>
          <p className={theme.txt}>{dataCard.description}</p>
          <h4 className={theme.txt}>Creador</h4>
          <p className={theme.txt}>{dataCard.author}</p>
          <center>
            <button type="button" className="btn btn-primary disabled w-40">
              Adquirir
            </button>
          </center>
        </div>
        <div className="w-40 h-100 px-5 ml-5">
          <img src={dataCard.img} alt="" className="h-100" />
        </div>
      </div>
      <div className="mt-5 mx-5">
        <div className="w-100">
          <h1 className="text-primary">Artículos Similares</h1>
          <Slider {...settings}>
            {dataCategory.itemCards.map((element) => (
              <Card elementsCard={element} category={category} />
            ))}
          </Slider>
        </div>
      </div>
    </section>
  )
}
