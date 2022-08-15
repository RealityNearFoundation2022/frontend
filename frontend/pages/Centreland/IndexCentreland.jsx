import React, { useEffect } from 'react'
import TileMap from '../../utils/tilemap'
export default function IndexCentreland() {
  const tileSize = 15

  // let canvas
  // let ctx
  // const tileSize = 5
  // const tileMap = new TileMap(tileSize)
  useEffect(() => {
    const canvas = document.getElementById('centreland')
    const ctx = canvas.getContext('2d')

    const tileMap = new TileMap(tileSize)
    console.log(canvas)
    tileMap.draw(canvas, ctx)

    // gameLoop()

  }, [])
  // const gameLoop = () => {
  //   tileMap.draw(canvas, ctx)
  // }
 
  return (
    <div className="top">
      <h1>centreland</h1>
      <canvas id="centreland" type="module" className="centreland"></canvas>    </div>
  )
}
