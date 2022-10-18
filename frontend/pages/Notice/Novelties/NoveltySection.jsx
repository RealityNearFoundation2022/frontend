/* eslint-disable no-restricted-syntax */
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
// import Slider from 'react-slick'
// import ThemeContext from '../../../utils/useContextTheme'
// import axios from 'axios'
import HeaderSections from '../../HeaderSections'
import { api } from '../rutaApiNotices'
// import CardNotices from '../CardNotices'
import CarouselNovelty from './CarouselNovelty'
// import imgFake from '../../../assets/img/random/cabin.png'
// import { dataNotices } from '../dataNotices'

export default function NoveltySection() {
  const { idNovelties } = useParams()
  const [dataItem, setDataItem] = useState({})
  const [articles, setArticles] = useState([])
  // const { theme } = useContext(ThemeContext)

  const apiGet = () => {
    fetch(`${api}/api/v1/news/${idNovelties}`)
      .then(
        (response) => response.json(), // setCarousel([...response.json()])
      )
      .then((obj) => {
        setArticles([...obj.articles])
        setDataItem({ ...obj })
      })
  }

  useEffect(() => {
    apiGet()
  }, [])

  return (
    <div className="">
      <HeaderSections
        titleSection={dataItem.title}
        descriptionSection={dataItem.description}
        bgHeader="bg-header-novelty"
      />
      <div className="m-5 p-5 w-90 d-flex flex-wrap">
        <h3 className="w-100">{dataItem.title}</h3>
        {articles.map((elmnt, index) =>
          index % 2 === 0 ? (
            <div className="w-100 d-flex">
              <div className="w-60">
                <p>{elmnt.data}</p>
              </div>
              <div className="w-40">
                <img
                  src={`${api}${elmnt.image}`}
                  alt=""
                  className="w-100 rounded"
                />
              </div>
            </div>
          ) : (
            <div className="w-100 d-flex flex-row-reverse">
              <div className="w-60">
                <p>{elmnt.data}</p>
              </div>
              <div className="w-40">
                <img
                  src={`${api}${elmnt.image}`}
                  alt=""
                  className="w-100 rounded"
                />
              </div>
            </div>
          ),
        )}
      </div>
      <div className="my-3 mx-2 px-5">
        <div className="d-flex align-items-center mt-5 mb-4">
          <h1 className="m-1 text-primary pr-2">Artículos Similares</h1>
        </div>
        <CarouselNovelty />
      </div>
    </div>
  )
}
