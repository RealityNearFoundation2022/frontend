import React, { useState, useEffect } from 'react'
import { useParams, useNavigate, useLocation } from 'react-router-dom'
import TileMap from '../../utils/tilemap'
import ModalDetailBuy from '../../components/ModalDetailBuy'
import near from '../../assets/img/icons/near.svg'
import LoadingModal from '../../components/LoadingModal'
import { buildRealandMetadata, buildRealandTokenMetadata, getPriceRealand } from '../../utils/walletUtils'

export default function PlotNuruk() {
  const { posX, posY } = useParams()
  const { state } = useLocation()
  const [ price, setPrice ] = useState(0)
  const [ description, setDescription ] = useState(null)
  const [openNearWallet, setOpenNearWallet] = useState(false)
  const [img, setImgMap] = useState([0])
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  const currentUser = window.accountId || ""

  const getImg = () => {
    if (!state) {
      navigate(`/nuruk`)
      setIsLoading(false)
      return
    }
    const canvas = document.getElementById('modal-buy')
    const ctx = canvas.getContext('2d')
    const { imgMap } = state
    setImgMap(imgMap)
    const tileMap = new TileMap(15, posX, posY, null, imgMap)
    tileMap.clearCanvas(canvas, ctx)
    tileMap.draw(canvas, ctx)
    setIsLoading(false)
  }
  useEffect(() => {
    setIsLoading(true)
    getImg()

    const args = buildRealandMetadata(currentUser, posX, posY)
    const token_metadata = buildRealandTokenMetadata(0)

    setDescription(token_metadata.description)
    console.log(args);
    getPriceRealand(args, currentUser)
    .then((result)=>{
      setPrice(result)
    })

  }, [posX, posY])

  return (
    <div className="container py-5">
      <LoadingModal open={isLoading} handleClose={() => setIsLoading(false)} />
      <div className="row">
        <div className="col-12 col-md-6 px-5 mb-5">
          <h1 className="text-primary">
            Parcela #{posX} {posY}
          </h1>
          <hr />
          <p className="h2 text-grey">
            <span className="pr-2">
              <img src={near} style={{ width: 60 }} alt="" />
            </span>
            {price}
          </p>
          <hr />
          <div className="text-grey">
            <h3 className="h5">Descripción</h3>
            <p>{description}</p>
          </div>
          <div className="text-center mt-5">
            <button
              onClick={() => setOpenNearWallet(true)}
              type="button"
              className="rounded btn btn-xl px-5 btn-primary _btn"
            >
              Adquirir
            </button>
          </div>
        </div>
        <div className="col col-md-6 text-center">
          <canvas
            id="modal-buy"
            type="module"
            className="img__modal__big"
          ></canvas>
        </div>
      </div>
      <ModalDetailBuy
        openNearWallet={openNearWallet}
        setOpenNearWallet={setOpenNearWallet}
        img={img}
        posX={posX}
        posY={posY}
        description={description}
        price={price}
      />
    </div>
  )
}
