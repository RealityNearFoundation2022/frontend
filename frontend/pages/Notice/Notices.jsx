import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { CaretRight } from 'phosphor-react'
import ThemeContext from '../../utils/useContextTheme'
import HeaderSections from '../HeaderSections'
import CarouselNovelty from './Novelties/Carousel'
import CarouselEvents from './Events/CarouselEvents'
import { useTranslation } from 'react-i18next'

export default function Notices() {
  const { theme } = useContext(ThemeContext)
  const { t } = useTranslation()
  const [showEvents, setShowEvents] = useState(true)
  const [showNews, setShowNews] = useState(true)
  return (
    <div className={`${theme.bg}`}>
      <HeaderSections
        titleSection="Noticias"
        descriptionSection="Entérate de las últimas novedades en Reality Near"
        bgHeader="bg-header-notices"
      />
      <div className="w-100 container">
        {showNews ? (
          <div>
            <div className="d-flex align-items-center mt-5 mb-4">
              <h1 className={`${theme.txt} m-1 text-primary pr-2`}>
                {t('Noticias')}
              </h1>
              <Link to="/notices/novelties" className="mt-3">
                <span className={`${theme.txt} fw-bolder pt-4 show-more`}>
                  {t('Ver más')}
                </span>
                <CaretRight size={15} color="#33cc99" weight="bold" />
              </Link>
            </div>
            <CarouselNovelty setShow={setShowNews} />
          </div>
        ) : (
          <div className="h-30vh"></div>
        )}
        {showEvents ? (
          <div>
            <div className="d-flex align-items-center mt-5 mb-4">
              <h1 className={`${theme.txt} m-1 text-primary pr-2`}>
                {t('Eventos')}
              </h1>
              <Link to="/notices/events" className="mt-3 show-more">
                <span className={`${theme.txt} fw-bolder pt-4 show-more`}>
                  {t('Ver más')}
                </span>
                <CaretRight size={15} color="#33cc99" weight="bold" />
              </Link>
            </div>
            <CarouselEvents setShow={setShowEvents} />
          </div>
        ) : (
          <div className="h-30vh"></div>
        )}
      </div>
    </div>
  )
}
