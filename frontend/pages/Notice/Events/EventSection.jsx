import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ThemeContext from '../../../utils/useContextTheme'
import HeaderSections from '../../HeaderSections'
import imgFake from '../../../assets/img/random/cabin.png'
import CarouselEvents from './CarouselEvents'

export default function EventSection() {
  const { idEvents } = useParams()
  const [dataItem, setDataItem] = useState({})
  const { theme } = useContext(ThemeContext)

  const apiGet = () => {
    fetch(`http://localhost:3000/events/${idEvents}`)
      .then(
        (response) => response.json(),
        // setCarousel([...response.json()])
      )
      .then((data) => {
        console.log(data)
        setDataItem({ ...data })
      })
  }

  useEffect(() => {
    apiGet()
  }, [])

  return (
    <div className={`${theme.bg} mt-5`}>
      <HeaderSections
        titleSection={dataItem.title}
        descriptionSection={dataItem.description}
        bgHeader="bg-header-event"
      />
      <div className="w-100 d-flex flex-wrap align-items-center justify-content-between px-7-5porcent mt-5">
        <div className="w-60">
          <h2>{dataItem.title}</h2>
          <p>{dataItem.long_description}</p>
          <center>
            <button type="button" className="w-40 btn btn-primary disabled">
              Ir
            </button>
          </center>
        </div>
        <div className="w-40">
          <img src={imgFake} alt="" className="w-100 rounded" />
        </div>
      </div>
      <div className="px-7-5porcent w-100">
        <div className="d-flex align-items-center mt-5 mb-4">
          <h1 className="m-1 text-primary pr-2">Artículos Similares</h1>
        </div>
        <CarouselEvents />
      </div>
    </div>
  )
}
