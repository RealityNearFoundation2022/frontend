import React, { useRef, useEffect, useState } from 'react'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import { useNavigate } from 'react-router-dom'
import ModalBuy from '../../components/ModalBuy'
import TileMap from '../../utils/tilemap'
import MockUp from '../../assets/img/MapaMockUp.jpg'

export default function IndexCentreland() {
  console.log('aqui')
  const tileSize = 15
  /*
    Desc: Size of global.css --sizeMockup
  */
  const sizeMockup = 200
  const sizeBoxImg = sizeMockup / 5
  const navigate = useNavigate()
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
  const [imgMap, setImgMap] = useState([0])

  const getPosition = (e) => {
    const cursorX = e.pageX
    const cursorY = e.pageY
    const [element] = document.getElementsByClassName('img-mockup')
    const rect = element.getBoundingClientRect()
    const newPosX = Math.floor((cursorX - rect.left) / sizeBoxImg)
    const newPosY = Math.floor(
      (cursorY - (rect.top + window.pageYOffset)) / sizeBoxImg,
    )
    setRow(newPosX)
    setColumn(newPosY)
  }

  const handleOpen = (posx, posy, imMap) => {
    setPosX(posx)
    setPosY(posy)
    setOpen(true)
    setImgMap(imMap)
  }

  useEffect(() => {
    getCentreland(row, column)
  }, [column, row])

  useEffect(() => {
    window.addEventListener(
      'keydown',
      ({ keyCode }) => {
        switch (keyCode) {
          case 37:
            // left
            setRow((r) => (r > 0 ? r - 1 : r))

            break
          case 38:
            // up
            setColumn((r) => (r > 0 ? r - 1 : r))

            break
          case 39:
            // right
            setRow((r) => (r < maxColumnsRows ? r + 1 : r))

            break
          case 40:
            // down
            setColumn((r) => (r < maxColumnsRows ? r + 1 : r))
            break
          default:
            // do nothing
            break
        }
      },
      false,
    )
  }, [])

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

    console.log('scroll')
  })

  function goToPlotNurk(x, y) {
    navigate(`/nuruk/${x}/${y}`, {
      state: { imgMap },
    })
  }

  const handleClose = () => {
    setOpen(false)
  }

  const getCentreland = (_row, _column) => {
    const canvas = document.getElementById(`centreland${_row}-${_column}`)
    const ctx = canvas.getContext('2d')

    const tileMap = new TileMap(tileSize, _row, _column, handleOpen)

    tileMap.clearCanvas(canvas, ctx)
    tileMap.draw(canvas, ctx)
  }

  return (
    <div className="justify-content-xxl-center">
      <div className="slide" ref={slide}>
        <canvas
          id={`centreland${row}-${column}`}
          type="module"
          className="centreland"
        ></canvas>
      </div>

      {left && (
        <button
          className="ctrl-btn ctrl-btn-back _btn ctrl-btn btn-back"
          type="button"
          onClick={() => setRow((r) => r - 1)}
        >
          <ArrowBackIosNewIcon />
        </button>
      )}
      {rigth && (
        <button
          className="ctrl-btn ctrl-btn-next _btn ctrl-btn btn-next"
          type="button"
          onClick={() => setRow((r) => r + 1)}
        >
          <NavigateNextIcon />
        </button>
      )}
      {top && (
        <button
          className=" ctrl-btn ctrl-btn-top _btn  btn-top"
          type="button"
          onClick={() => setColumn((r) => r - 1)}
        >
          <KeyboardArrowUpIcon />
        </button>
      )}
      {bottom && (
        <button
          className=" ctrl-btn ctrl-btn-bottom _btn ctrl-btn btn-bottom"
          type="button"
          onClick={() => setColumn((r) => r + 1)}
        >
          <KeyboardArrowDownIcon />
        </button>
      )}

      <div>
        <button type="button" className="little-map" onClick={getPosition}>
          <img className="img-mockup" src={MockUp} alt="..." />
        </button>
        <div className={`boxImg boxImg-${row}${column}`}></div>
      </div>

      <ModalBuy
        open={open}
        handleClose={handleClose}
        go={() => goToPlotNurk(posX, posY)}
        idX={posX}
        idY={posY}
        img={imgMap}
      />
    </div>
  )
}
