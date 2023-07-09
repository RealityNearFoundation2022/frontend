/* eslint-disable no-restricted-syntax */
import React, { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { getData } from '../../../api/methods'
import LoadingModal from '../../../components/LoadingModal'
import HeaderSections from '../../HeaderSections'
import CarouselNovelty from './Carousel'
require('dotenv').config()
const api = process.env.REACT_APP_API
import { useTranslation } from 'react-i18next'
import ThemeContext from '../../../utils/useContextTheme'

export default function NoveltySection() {
  const { idNovelties } = useParams()
  const [dataItem, setDataItem] = useState({})
  const [articles, setArticles] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const { t } = useTranslation()
  const { theme } = useContext(ThemeContext)

  const apiGet = async () => {
    try {
      setIsLoading(true)
      const obj = await getData(`news/${idNovelties}`)
      if (obj.articles) setArticles([...obj.articles])
      setDataItem({ ...obj })
    } finally {
      setIsLoading(false)
    }
  }

  function handleClose() {
    setIsLoading(false)
  }

  useEffect(() => {
    apiGet()
  }, [idNovelties])

  return (
    <div className={`${theme.bg} ${theme.txt}`}>
      <LoadingModal open={isLoading} handleClose={handleClose} />
      <HeaderSections
        titleSection={dataItem.title}
        descriptionSection={dataItem.description}
        bgHeader="bg-header-novelty"
      />
      <div className={`p-5  d-flex flex-wrap`}>
        <h1 className="w-100 text-center">{t(dataItem.title)}</h1>
        {articles.map(({ data, image }, index) => (
          <div
            className={`w-100 d-flex ${
              !(index % 2) ? 'flex-row' : 'flex-row-reverse'
            } img-col`}
            key={image}
          >
            <div className="d-flex align-items-center v-col">
              <p>{data}</p>
            </div>
            <div className="d-flex justify-content-center v-col">
              <img
                src={`${api}${image}`}
                alt=""
                className={`img-notice rounded ${
                  !(index % 2) ? 'order-first' : 'order-last'
                }`}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="carousel">
        <div className="d-flex align-items-center mt-5 mb-4">
          <h1 className="m-1 text-primary pr-2">{t('Artículos Similares')}</h1>
        </div>
        <CarouselNovelty />
      </div>
    </div>
  )
}
