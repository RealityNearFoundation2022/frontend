import { Link } from 'react-router-dom'
import pageNotFound from '../../assets/img/error-page/page-not-found.png'
import sadFace from '../../assets/img/error-page/sad-face.svg'

export default function PageNotFound() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-7 d-none d-md-block">
          <img src={pageNotFound} className="w-100" />
        </div>
        <div className="col-12 col-md-5 d-flex align-items-center py-5">
          <div className="text-center text-grey">
            <img src={sadFace} alt="" />
            <div className="display-4 mt-3">404</div>
            <h1 className="h3">¡Ups! Esta página no existe</h1>
            <div className="mt-3">
              <p>
                La página que estabas buscando no existe o tal vez ocurrió otro
                error.
              </p>
              <p>Intenta volver a cargar la página o regresar al Home.</p>
            </div>
            <Link to="/">
              <button className="_btn btn btn-primary btn-xl rounded mt-3">
                Home
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
