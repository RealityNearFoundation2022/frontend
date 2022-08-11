export default class TileMap {
  constructor(tileSize) {
    this.tileSize = tileSize
    this['1'] = this.#image('1')
    this['0'] = this.#image('0')
  }
  map = this.#createMap()

  #createMap(){
    const array = Array.apply(null, Array(500)).map((e) => Array.apply(null, Array(500)).map(Number.prototype.valueOf,0))
    this.#addRegion(array, 1,1, 5,5, 5)
    return array;

  }

  #addRegion(array, initialX, initialY, sizeX, sizeY, value ){
    for (let iX = initialX; iX < initialX + sizeX + 1;  iX++) {
        for (let iY = initialY; iY < initialY + sizeY + 1; iY++) {
            // console.log(array[iXiY])
            array[iX][iY] = value;
        }
    }
  }

  #image(fileName) {
    const img = new Image()
    img.src = `/assets/reelands/${fileName}.png`
    return img
  }
  #setCanvasSize(canvas) {
    canvas.height = this.map.length * this.tileSize
    canvas.width = this.map[0].length * this.tileSize
  }
  #clearCanvas(canvas, ctx) {
    ctx.fillStyle = 'black'
    ctx.fillRect(0, 0, canvas.width, canvas.heigth)
  }


  #drawMap(ctx) {
    this.map.forEach((row, rowIndex) => {
      row.forEach((tile, columnIndex) => {
        const image = this.#image(tile)
        // switch (tile) {
        //   case 1:
        //     image = this.azul
        //     break
        //   case 0:
        //     image = this.verde
        //   default:
        //     break
        // }
        // console.log(`${rowIndex}-${columnIndex}`)
        // image.id= `${rowIndex}-${columnIndex}`

        // image.addEventListener('click', (e) => this.#doMouseClick(e, rowIndex, columnIndex))

        if (image != null) {
          ctx.drawImage(
            image,
            columnIndex * this.tileSize,
            rowIndex * this.tileSize,
            this.tileSize,
            this.tileSize,
          )
        }
      })
    })
    // document.addEventListener('click', this.#selected)
  }

  #getPosition(canvas) {
    const getMousePosition = (canvas, event) => {
      let rect = canvas.getBoundingClientRect()
      let x = event.clientX - rect.left
      let y = event.clientY - rect.top
      console.log(Math.ceil(y/this.tileSize), Math.ceil(x/this.tileSize))
    }
    canvas.addEventListener('click', (e) => {
      getMousePosition(canvas, e)
    })
  }
  draw(canvas, ctx) {
    this.#setCanvasSize(canvas)
    this.#clearCanvas(canvas, ctx)
    this.#drawMap(ctx)
    this.#getPosition(canvas)
  }
}
