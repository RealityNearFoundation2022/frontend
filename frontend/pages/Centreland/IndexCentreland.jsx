import React, { useEffect } from 'react'
import TileMap from '../../utils/tilemap'
export default function IndexCentreland() {
  const tileSize = 15

  // let canvas
  // let ctx
  // const tileSize = 5
  // const tileMap = new TileMap(tileSize)
  useEffect(() => {
    // const canvas = document.getElementById('centreland')
    // const ctx = canvas.getContext('2d')

    // const tileMap = new TileMap(tileSize)
    // console.log(canvas)
    // tileMap.draw(canvas, ctx)
    ;[0, 1, 2, 3].forEach((column) => {
      ;[0, 1, 2].forEach((row) => {
        getCentreland(row, column)
      })
    })
  }, [])
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
      {[0, 1, 2, 3, 4].map((column) => (
        <div className="d-flex">
          {[0, 1, 2, 3, 4].map((row) => (
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
