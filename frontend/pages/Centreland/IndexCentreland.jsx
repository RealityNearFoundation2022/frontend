import React, { useRef, useEffect, useState } from 'react'
import TileMap from '../../utils/tilemap'
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
    // rows.forEach((column) => {
    //   columns.forEach((row) => {
    getCentreland(row, column)
    //   })
    // })
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
        scrollHeight - scrollTop === clientHeight && row < maxColumnsRows,
      )
      setTop(scrollTop === 0 && row > 0)
      setLeft(scrollLeft === 0 && column > 0)
      setRigth(
        scrollWidth - scrollLeft === clientWidth && column < maxColumnsRows,
      )
    })
    // return () => {
    //   slide?.current.removeEventListener((e) => {
    //     console.log(e)
    //   })
    // }
  })
  // const gameLoop = () => {
  //   tileMap.draw(canvas, ctx)
  // }
  const getCentreland = (_row, _column) => {
    const canvas = document.getElementById(`centreland${_row}-${_column}`)
    const ctx = canvas.getContext('2d')

    const tileMap = new TileMap(tileSize, _row, _column)
    tileMap.draw(canvas, ctx)
  }
  return (
    <div className="top">
      <h1>Nuruk</h1>
      <div className="slide" ref={slide} t>
        {/* {rows.map((column) => (
          <div className="d-flex">
            {columns.map((row) => ( */}
        <canvas
          id={`centreland${row}-${column}`}
          type="module"
          className="centreland"
        ></canvas>
        {/* ))}
          </div>
        ))} */}
      </div>
      {left && (
        <button className="btn ctrl-btn ctrl-btn-back" type="button">
          L
        </button>
      )}
      {rigth && (
        <button className="btn ctrl-btn ctrl-btn-next" type="button">
          R
        </button>
      )}
      {top && (
        <button
          className="btn ctrl-btn-top"
          type="button"
          onClick={() => setRow((r) => r - 1)}
        >
          T
        </button>
      )}
      {bottom && (
        <button
          className="btn ctrl-btn-bottom"
          type="button"
          onClick={() => setRow((r) => r + 1)}
        >
          B
        </button>
      )}
    </div>
  )
}
