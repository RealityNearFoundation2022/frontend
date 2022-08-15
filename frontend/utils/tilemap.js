export default class TileMap {
  constructor(tileSize) {
    this.tileSize = tileSize
    this.drawed = false
  }
  map = this.#createMap()

  #createMap() {
    const arrayMap = Array.apply(null, Array(150)).map((e) =>
      Array.apply(null, Array(150)).map(Number.prototype.valueOf, 0),
    );
    // [1, 7, 13, 19, 25, 42, 48, 54,60,66,72,78,84, 90, 96, 102, 108,  ].forEach((initialY) =>
    //   this.#addRegion(arrayMap, 1, initialY, 5, 5, 5),
    // )
    this.#createBox(arrayMap, 2, 30, 2, 6, 5, 5, 5)
    this.#createBox(arrayMap, 32, 41, 2, 18, 10, 5, 5);
    this.#createBox(arrayMap, 2, 12, 8, 48, 5, 5, 5)
    this.#createBox(arrayMap, 26, 30, 8, 18, 5, 5, 5)
    this.#createBox(arrayMap, 14, 24, 14, 18, 5, 5, 5)
    this.#createBox(arrayMap, 20, 30, 26, 36, 5, 5, 5)
    this.#createBox(arrayMap, 32, 41, 26, 42, 10, 5, 5)
    this.#createBox(arrayMap, 14, 30, 38, 42, 5, 5, 5)

    this.#addRegion(arrayMap, 14, 8, 11, 5, 5);
    this.#addRegion(arrayMap, 14, 44, 11, 5, 5);

    this.#addRegion(arrayMap, 14, 20, 28, 5, 7);
    this.#addRegion(arrayMap, 14, 25, 5, 12, 7);

    // [7, 13, 19, 25, 31, 37, 43 ].forEach((initialX) => {
    //   [1, 7].forEach((initialY) => {
    //     this.#addRegion(arrayMap, initialX, initialY, 5, 5, 5);
    //   })
    // })
    return arrayMap
  }
  #createBox(arrayMap, initialX, finalX, initialY, finalY, sizeX, sizeY, value) {
    for (let iX = initialX; iX <=finalX - sizeX + 1 ; iX = iX + sizeX+ 1) {
      for (let iY = initialY; iY <= finalY - sizeY + 1 ; iY = iY + sizeY +1) {
        this.#addRegion(arrayMap, iX, iY, sizeX, sizeY, value)
      }
    }
  }
  #addRegion(array, initialX, initialY, sizeX, sizeY, value) {
    for (let iY = initialY - 1; iY < initialY + sizeY -1 ; iY++) {
      for (let iX = initialX - 1; iX < initialX + sizeX -1 ; iX++) {
        // console.log(array[iXiY])
        array[iY][iX] = value
      }
    }
  }

  #image(fileName, callback) {
    const img = document.createElement("img");
    img.onload = function () {
      callback(img)
    }
    img.src = `/assets/reelands/${fileName}.png`;
    
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
        this.#image(tile, (image) => {
          if (image) {
          ctx.drawImage(
            image,
            columnIndex * this.tileSize,
            rowIndex * this.tileSize,
            this.tileSize,
            this.tileSize,
          )
        }})
      })
    })
    // document.addEventListener('click', this.#selected)
  }

  #getPosition(canvas) {
    const getMousePosition = (canvas, event) => {
      let rect = canvas.getBoundingClientRect()
      let x = event.clientX - rect.left
      let y = event.clientY - rect.top
      console.log(Math.ceil(y / this.tileSize), Math.ceil(x / this.tileSize))
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
    console.log('drawed!')
    this.drawed = true
  }
}
