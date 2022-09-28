import React, { useRef, useEffect, useState } from 'react'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'

import TileMap from '../../utils/tilemap'
import MockUp from '../../assets/img/MapaMockUp.jpg'

export default function IndexCentreland() {
  const tileSize = 15
  const [column, setColumn] = useState(0)
  const [row, setRow] = useState(0)
  const [top, setTop] = useState(false)
  const [bottom, setBottom] = useState(false)
  const [left, setLeft] = useState(false)
  const [rigth, setRigth] = useState(false)
  const slide = useRef(null)
  const maxColumnsRows = 4

  useEffect(() => {
    getCentreland(row, column)
  }, [column, row])

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
    const tileMap = new TileMap(tileSize, _row, _column)
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
    </div>
  )
}
