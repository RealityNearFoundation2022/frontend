import React, { useContext } from 'react'
import { Fade } from 'react-slideshow-image'
import ThemeContext from '../../utils/useContextTheme'
import 'react-slideshow-image/dist/styles.css'
import PropTypes from 'prop-types'
import imgBack from '../../assets/img/random/No_Photo_Available.png'
export default function CardNotices({ element, medias }) {
  const { theme } = useContext(ThemeContext)
  return (
    <div
      key={`novelties${element._id}`}
      className="slide-container position-relative rounded"
    >
      <div className="rounded">
        <img
          src={medias?.length ? medias[0] : imgBack}
          className="bg-img-size-cover w-100 rounded"
          style={{ height: '250px' }}
        />
      </div>
      <div
        className={`${theme.bg} position-absolute bottom-0 w-100 p-3 opacity-9 text-overflow`}
        style={{ zIndex: '5000', height: '40%' }}
      >
        <h6 className={`${theme.txt} my-0 py-0 fw-bolder`}>{element.title}</h6>
        <p className={`${theme.txt} my-0 py-0 fw-bolder`}>
          {element.description}
        </p>
        <p className={`${theme.txt} my-0 py-0 fw-bolder`}>{element.date}</p>
      </div>
    </div>
  )
}

CardNotices.propTypes = {
  element: PropTypes.object.isRequired,
  medias: PropTypes.array.isRequired,
}
