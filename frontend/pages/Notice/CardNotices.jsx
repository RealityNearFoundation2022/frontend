/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
import React, { useContext, useEffect, useState } from 'react'
import { Fade } from 'react-slideshow-image'
import ThemeContext from '../../utils/useContextTheme'
import 'react-slideshow-image/dist/styles.css'
// import { height } from '@mui/system'
// import imgFake from '../../assets/img/random/cabin.png'

export default function CardNotices({ element, medias }) {
  const { theme } = useContext(ThemeContext)
  const [fadeImages, setFadeImg] = useState([...medias])

  useEffect(() => {
    console.log(medias)
    /* setFadeImg([
      ...element.media.map((el) => `http://45.77.115.23:8081${el.path}`),
    ]) */
  }, [])

  return (
    <div
      key={`novelties${element._id}`}
      className="slide-container position-relative rounded"
    >
      <div className="rounded">
        <Fade>
          {fadeImages.map((eachImg) => (
            <div className="each-fade h-100 w-100">
              <img
                src={eachImg}
                className="bg-img-size-cover w-100 rounded"
                style={{ height: '200px' }}
              />
            </div>
          ))}
        </Fade>
      </div>
      <div
        className={`${theme.bg} position-absolute bottom-0 w-100 p-3`}
        style={{ zIndex: '5000', height: '50%' }}
      >
        <h4 className={`${theme.txt} my-0 py-0`}>{element.title}</h4>
        <p className={`${theme.txt} my-0 py-0 fw-bolder`}>
          {element.description}
        </p>
        <p className={`${theme.txt} my-0 py-0 fw-bolder`}>{element.date}</p>
      </div>
    </div>
  )
}
