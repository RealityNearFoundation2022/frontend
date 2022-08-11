import React, { useEffect } from 'react'
import TileMap from '../../utils/tilemap'
export default function IndexCentreland() {
  let canvas
  let ctx
  const tileSize = 5
  const tileMap = new TileMap(tileSize)
  useEffect(() => {
    canvas = document.getElementById('centreland')
    ctx = canvas.getContext('2d')
    gameLoop()
    gameLoop()
    gameLoop()

  })
  const gameLoop = () => {
    tileMap.draw(canvas, ctx)
  }
 
  return (
    <div className="top">
      <h1>centreland</h1>
      <canvas id="centreland" type="module" className="centreland"></canvas>    </div>
  )
}
