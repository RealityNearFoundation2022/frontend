import React, { useEffect } from 'react'
import checkCircle from '../../assets/img/icons/check_circle.png'
import { useNavigate } from 'react-router-dom'

export default function CallbackNuruk() {
  // const { posX, posY } = useParams()
  const navigate = useNavigate()

  const goToLands = () => {
    navigate('/marketplace/my-lands')
  }

  useEffect(() => {
    console.log('useEffect Callback')

    // setIsLoading(true)
    //getHash()
  }, [])

  return (
    <>
      <div className="container py-5">
        <div className="row">
          <div className="col-12 col-md-6 px-5 mb-5">
            <div className="text-center">
              <img src={checkCircle} alt="" />
            </div>

            <div className="h3 text-center my-4">¡TRANSACCIÓN COMPLETADA!</div>

            <div className="col-12 text-center">
              <button
                type="button"
                className="rounded btn btn-lg px-5 btn-primary _btn"
                onClick={goToLands}
              >
                Ok
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
