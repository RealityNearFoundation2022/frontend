import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CaretRight } from 'phosphor-react'
import ThemeContext from '../../utils/useContextTheme'
import HeaderSections from '../HeaderSections'
import CarouselNovelty from './Novelties/Carousel'
import CarouselEvents from './Events/CarouselEvents'

export default function Notices() {
  const { theme } = useContext(ThemeContext)

  return (
    <div className={`${theme.bg}`}>
      <HeaderSections
        titleSection="Noticias"
        descriptionSection="Entérate de las últimas novedades en Reality Near"
        bgHeader="bg-header-notices"
      />
      <div className="w-100 container">
        <div>
          <div className="d-flex align-items-center mt-5 mb-4">
            <h1 className={`${theme.txt} m-1 text-primary pr-2`}>Novedades</h1>
            <Link to="/notices/novelties" className="mt-3">
              <span className="text-grey fw-bolder pt-4 show-more">
                Ver más
              </span>
              <CaretRight size={15} color="#33cc99" weight="bold" />
            </Link>
          </div>
          <CarouselNovelty />
        </div>
        <div>
          <div className="d-flex align-items-center mt-5 mb-4">
            <h1 className={`${theme.txt} m-1 text-primary pr-2`}>Eventos</h1>
            <Link to="/notices/events" className="mt-3 show-more">
              <span className="text-grey fw-bolder"> Ver más</span>
              <CaretRight size={15} color="#33cc99" weight="bold" />
            </Link>
          </div>
          <CarouselEvents />
        </div>
      </div>
    </div>
  )
}
