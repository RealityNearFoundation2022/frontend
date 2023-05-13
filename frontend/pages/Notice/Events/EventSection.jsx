import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Fade } from 'react-slideshow-image'
import ThemeContext from '../../../utils/useContextTheme'
import HeaderSections from '../../HeaderSections'
import imgFake from '../../../assets/img/landingPage/momentsCarousel/MaskGroup1.png'
import CarouselEvents from './CarouselEvents'
import 'react-slideshow-image/dist/styles.css'
import { getData } from '../../../api/methods'
import LoadingModal from '../../../components/LoadingModal'
import { useTranslation } from 'react-i18next'

export default function EventSection() {
  const { idEvents } = useParams()
  const [dataItem, setDataItem] = useState({})
  // const [imgsData, setImages] = useState([])
  const { theme } = useContext(ThemeContext)
  const [isLoading, setIsLoading] = useState(false)
  const { t } = useTranslation()

  const apiGet = async () => {
    try {
      setIsLoading(true)
      const data = await getData(`events/${idEvents}`)
      console.log(data)
      setDataItem({ ...data })
    } finally {
      setIsLoading(false)
    }
  }

  function handleClose() {
    setIsLoading(false)
  }

  useEffect(() => {
    apiGet()
  }, [])

  return (
    <div className={`${theme.bg} ${theme.txt}`}>
      <LoadingModal open={isLoading} handleClose={handleClose} />
      <HeaderSections
        titleSection={dataItem.title}
        descriptionSection={dataItem.description}
        bgHeader="bg-header-event"
      />
      <div className="w-100 d-flex flex-wrap align-items-center justify-content-between px-7-5porcent mt-5">
        <div className="w-60">
          <h1>{dataItem.title}</h1>
          <p>{dataItem.description}</p>
          <p>{dataItem.long_description}</p>
        </div>
        <div className="w-40">
          <div className="slide-container w-100 h-100 rounded">
            <Fade>
              {/* imgsData.map((eachImg) => ( */}
              {[1, 2].map((e) => (
                <div className="each-fade h-100 w-100" key={e}>
                  <img
                    src={imgFake}
                    /* src={api+eachImg.path} */
                    className="bg-img-size-cover w-100 rounded"
                    style={{ height: '100%' }}
                    alt=""
                  />
                </div>
              ))}
            </Fade>
          </div>
        </div>
      </div>
      <div className="px-7-5porcent w-100">
        <div className="d-flex align-items-center mt-5 mb-4">
          <h1 className="m-1 text-primary pr-2">{t('Artículos Similares')}</h1>
        </div>
        <CarouselEvents />
      </div>
    </div>
  )
}
