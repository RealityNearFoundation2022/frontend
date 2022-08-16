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
    [0,1,2,3,4,5,6,7,8].map((i) => centreland('centreland' + i))
  
  }, [])
  // const gameLoop = () => {
  //   tileMap.draw(canvas, ctx)
  // }
 const centreland = (name) => {
  const canvas = document.getElementById(name)
    const ctx = canvas.getContext('2d')

    const tileMap = new TileMap(tileSize)
    console.log(canvas)
    tileMap.draw(canvas, ctx)
 }
  return (
    <div className="top">
      <h1>centreland</h1>
      <canvas
        id="centreland0"
        type="module"
        className="centreland"
      ></canvas>
<canvas
        id="centreland1"
        type="module"
        className="centreland"
      ></canvas>
       <canvas
        id="centreland2"
        type="module"
        className="centreland"
      ></canvas>
       <canvas
        id="centreland3"
        type="module"
        className="centreland"
      ></canvas>
       <canvas
        id="centreland4"
        type="module"
        className="centreland"
      ></canvas>
<canvas
        id="centreland5"
        type="module"
        className="centreland"
      ></canvas>
       <canvas
        id="centreland6"
        type="module"
        className="centreland"
      ></canvas>
       <canvas
        id="centreland7"
        type="module"
        className="centreland"
      ></canvas>
       <canvas
        id="centreland8"
        type="module"
        className="centreland"
      ></canvas>
    </div>
    
  )
}
