/* eslint-disable import/no-named-as-default-member */
import React, { useRef, useEffect, useState } from 'react'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import Modal from '@mui/material/Modal'
import Box from '@mui/material/Box'

import TileMap from '../../utils/tilemap'
import MockUp from '../../assets/img/MapaMockUp.jpg'
import WhiteIcon from '../../assets/img/logo-white.svg'

export default function IndexCentreland() {
  const tileSize = 15
  const [column, setColumn] = useState(0)
  const [row, setRow] = useState(0)
  const [top, setTop] = useState(false)
  const [bottom, setBottom] = useState(false)
  const [left, setLeft] = useState(false)
  const [rigth, setRigth] = useState(false)
  const slide = useRef(null)
  const [open, setOpen] = useState(false)
  const [posX, setPosX] = useState(0)
  const [posY, setPosY] = useState(0)

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
  const handleOpen = (posx, posy) => {
    setPosX(posx)
    setPosY(posy)
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }
  useEffect(() => {
    getCentreland(row, column)
  }, [column, row])
  const maxColumnsRows = 4
  useEffect(() => {
    slide.current.addEventListener('scroll', (event) => {
      const {
        scrollHeight,
        scrollWidth,
        scrollTop,
        scrollLeft,
        clientHeight,
        clientWidth,
      } = event.target
      setBottom(
        scrollHeight - scrollTop === clientHeight && column < maxColumnsRows,
      )
      setTop(scrollTop === 0 && column > 0)
      setLeft(scrollLeft === 0 && row > 0)
      setRigth(scrollWidth - scrollLeft === clientWidth && row < maxColumnsRows)
    })
  })
  const getCentreland = (_row, _column) => {
    const canvas = document.getElementById(`centreland${_row}-${_column}`)
    const ctx = canvas.getContext('2d')
    const tileMap = new TileMap(tileSize, _row, _column, handleOpen)
    tileMap.clearCanvas(canvas, ctx)
    tileMap.draw(canvas, ctx)
  }
  return (
    <div>
      <div className="slide" ref={slide}>
        <canvas
          id={`centreland${row}-${column}`}
          type="module"
          className="centreland"
        ></canvas>
      </div>
      {left && (
        <button
          className="btn ctrl-btn ctrl-btn-back"
          type="button"
          onClick={() => setRow((r) => r - 1)}
        >
          <ArrowBackIosNewIcon />
        </button>
      )}
      {rigth && (
        <button
          className="btn ctrl-btn ctrl-btn-next"
          type="button"
          onClick={() => setRow((r) => r + 1)}
        >
          <NavigateNextIcon />
        </button>
      )}
      {top && (
        <button
          className="btn ctrl-btn-top"
          type="button"
          onClick={() => setColumn((r) => r - 1)}
        >
          <KeyboardArrowUpIcon />
        </button>
      )}
      {bottom && (
        <button
          className="btn ctrl-btn-bottom"
          type="button"
          onClick={() => setColumn((r) => r + 1)}
        >
          <KeyboardArrowDownIcon />
        </button>
      )}
      <div>
        <img className="img-mockup" src={MockUp} alt="..." />
        <div className={`boxImg boxImg-${row}${column}`}></div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{ ...style, width: 700, borderRadius: '20px', border: 0, padding: 2 }}>
          <div className='row'>
            <div className='col col-md-3'>
              <img src="https://via.placeholder.com/500" className='rounded' style={{ maxWidth: '100%' }} alt="" />
            </div>
            <div className='col col-md-5 p-2'>
              <h2 className="h4" id="child-modal-title">Realand #{posX}{posY}</h2>
              <p id="child-modal-description" className='h5 text-grey'>
                <span className='pr-2'>
                  <img src={WhiteIcon} className="bg-primary rounded-pill" style={{width: 30}} alt="" />
                </span>
                10000.000000
              </p>
              <p className='h5 font-weight-bold text-grey'>
                Disponible
              </p>
            </div>
            <div style={{minHeight: 150}} className='col col-md-4 d-flex align-items-center justify-content-center'>
              <div>
                <button className='rounded btn-xl btn-primary' style={{shadow: 'none', border: 'none'}}> Comprar </button>
              </div>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  )
}
