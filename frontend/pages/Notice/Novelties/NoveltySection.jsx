/* eslint-disable no-restricted-syntax */
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
// import Slider from 'react-slick'
// import ThemeContext from '../../../utils/useContextTheme'
import HeaderSections from '../../HeaderSections'
// import CardNotices from '../CardNotices'
import CarouselNovelty from './CarouselNovelty'
import imgFake from '../../../assets/img/random/cabin.png'
// import { dataNotices } from '../dataNotices'

export default function NoveltySection() {
  const { idNovelties } = useParams()
  const [dataItem, setDataItem] = useState({})
  // const { theme } = useContext(ThemeContext)

  const apiGet = () => {
    fetch(`http://localhost:3000/news/${idNovelties}`)
      .then(
        (response) => {
          const resp = response.json()
          console.log(resp)
          return resp
        }, // setCarousel([...response.json()])
      )
      .then((data) => {
        const arr = []
        for (const item of data.articles) {
          arr.push({ ...item })
          console.log(JSON.parse(item))
        }
        setDataItem({ ...data, articles: arr })
      })
  }

  useEffect(() => {
    apiGet()
  }, [])

  return (
    <div className="mt-5">
      <HeaderSections
        titleSection={dataItem.title}
        descriptionSection={dataItem.description}
        bgHeader="bg-header-novelty"
      />
      <div className="m-5 p-5 w-90 d-flex flex-wrap">
        <h3 className="w-100">{dataItem.title}</h3>
        {dataItem.articles.map((elmnt, index) =>
          index % 2 === 0 ? (
            <div className="w-100 d-flex">
              <div className="w-60">
                <p>{elmnt.data}</p>
              </div>
              <div className="w-40">
                <img src={imgFake} alt="" className="w-100" />
              </div>
            </div>
          ) : (
            <div className="w-100 d-flex flex-row-reverse">
              <div className="w-60">
                <p>{elmnt.data}</p>
              </div>
              <div className="w-40">
                <img src={imgFake} alt="" className="w-100" />
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
