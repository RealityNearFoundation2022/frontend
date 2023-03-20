import React, { useRef, useEffect, useState } from 'react'
import Modal from '@mui/material/Modal'
import Box from '@mui/material/Box'
import PropTypes from 'prop-types'
import WhiteIcon from '../assets/img/logo-white.svg'
import TileMap from '../utils/tilemap'
import '../assets/css/components/nuruk.css'
import mapboxgl from 'mapbox-gl'
import { tokenMapBox } from '../utils/mapboxUtils'
import { buildRealandMetadata, getPriceRealand } from '../utils/walletUtils'
import { get_by_position } from '../assets/js/near/utils'

export default function ModalBuy({ open, handleClose, go, idX, idY, img }) {
  // const [ coordX, setCoordX] = useState(idX)
  // const [ coordY, setCoordY] = useState(idY)
  const [price, setPrice] = useState(0)
  const [sale, setSale] = useState(false)

  const currentUser = window.accountId || ''

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
  }
  const mapContainer = useRef(null)
  const map = useRef(null)
  mapboxgl.accessToken = tokenMapBox

  const getImg = () => {
    if (open) {
      const canvas = document.getElementById('modal-buy')
      const ctx = canvas.getContext('2d')

      const tileMap = new TileMap(15, idX, idY, null, img)
      tileMap.clearCanvas(canvas, ctx)
      tileMap.draw(canvas, ctx)
    }
  }

  const getMap = () => {
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/outdoors-v12?optimize=true',
      center: [idX, idY],
      zoom: 20,
      tileLayer: {
        continuousWorld: false,
        noWrap: true,
      },
    })
  }

  useEffect(() => {
    if (img === 'map' && open) {
      getMap()
    } else {
      getImg()
    }

    if (open) {
      get_by_position(`${idX}-${idY}`).then((result) => {
        console.log(result)
        if (result != null) {
          setSale(true)
          setPrice(0)
        } else {
          setSale(false)
          const args = buildRealandMetadata(currentUser, idX, idY)
          console.log(args)
          getPriceRealand(args, currentUser).then((result) => {
            console.log(result)
            setPrice(result)
          })
        }
      })
    }
  }, [open])

  return (
    <Modal
      keepMounted
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={{
          ...style,
          width: 700,
          borderRadius: '20px',
          border: 0,
          padding: 2,
        }}
      >
        <div className="row">
          <div className="col col-md-3">
            {img === 'map' ? (
              <div
                ref={mapContainer}
                className="map-container map-container-small"
              />
            ) : (
              <canvas id="modal-buy" type="module" className="img__modal" />
            )}
          </div>
          <div className="col col-md-5 p-2">
            <h1 className="h4" id="child-modal-title">
              Realand
              {idX}
              {idY}
            </h1>

            {price != 0 && (
              <p id="child-modal-description" className="h5 text-grey">
                <span className="pr-2">
                  <img
                    src={WhiteIcon}
                    className="bg-primary rounded-pill"
                    style={{ width: 30 }}
                    alt=""
                  />
                </span>
                {price}
              </p>
            )}
            <p className="h5 font-weight-bold text-grey">
              {!sale ? <span>Disponible</span> : <span>No Disponible </span>}{' '}
            </p>
          </div>
          <div
            style={{ minHeight: 150 }}
            className="col col-md-4 d-flex align-items-center justify-content-center"
          >
            <div>
              {!sale && (
                <button
                  type="button"
                  onClick={go}
                  className="rounded _btn-xl btn btn-primary"
                  style={{ shadow: 'none', border: 'none' }}
                >
                  Comprar
                </button>
              )}
            </div>
          </div>
        </div>
      </Box>
    </Modal>
  )
}

ModalBuy.propTypes = {
  open: PropTypes.string.isRequired,
  handleClose: PropTypes.func.isRequired,
  go: PropTypes.func.isRequired,
  idX: PropTypes.string.isRequired,
  idY: PropTypes.string.isRequired,
  img: PropTypes.array || PropTypes.bool,
}

ModalBuy.defaultProps = {
  img: false,
}
