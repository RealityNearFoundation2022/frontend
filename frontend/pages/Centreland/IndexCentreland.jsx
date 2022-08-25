import React, { useEffect, useState } from 'react'
import TileMap from '../../utils/tilemap'
export default function IndexCentreland() {
  const tileSize = 15
  const [columns, setColumns] = useState([0])
  const [rows, setRows] = useState([0])

  // let canvas
  // let ctx
  // const tileSize = 5
  // const tileMap = new TileMap(tileSize)
  useEffect(() => {
    console.log('columns', columns)
    rows.forEach((column) => {
      columns.forEach((row) => {
        getCentreland(row, column)
      })
    })
  }, [columns])
  useEffect(() => {
    document.addEventListener('scroll', (e) => {
      console.log(window.scrollX)
      if (window.scrollX > 400) {
        setColumns([0, 1])
      }
    })
  })
  // const gameLoop = () => {
  //   tileMap.draw(canvas, ctx)
  // }
  const getCentreland = (row, column) => {
    const canvas = document.getElementById(`centreland${row}-${column}`)
    const ctx = canvas.getContext('2d')

    const tileMap = new TileMap(tileSize, row, column)
    tileMap.draw(canvas, ctx)
  }
  return (
    <div className="top">
      <h1>centreland</h1>
      {rows.map((column) => (
        <div className="d-flex">
          {columns.map((row) => (
            <canvas
              id={`centreland${row}-${column}`}
              type="module"
              className="centreland"
            ></canvas>
          ))}
        </div>
      ))}
    </div>
  )
}
