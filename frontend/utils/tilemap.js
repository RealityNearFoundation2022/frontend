export default class TileMap {
  constructor(tileSize) {
    this.tileSize = tileSize
    this.drawed = false
  }
  map = this.#createMap()

  #createMap() {
    const arrayMap = Array.apply(null, Array(100)).map((e) =>
      Array.apply(null, Array(100)).map(Number.prototype.valueOf, 0),
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

    // INTENTO YUMARI START
    // arrayMap, initialX, finalX, initialY, finalY, sizeX, sizeY, value
    // this.#createBox(arrayMap, 2, 18, 294, 296, 5, 3, 5)

    // this.#createBox(arrayMap, 2, 18, 298, 301, 5, 4, 5)
    // this.#createBox(arrayMap, 2, 18, 303, 307, 5, 5, 5)
    // this.#createBox(arrayMap, 2, 18, 309, 323, 5, 7, 5)
    // this.#createBox(arrayMap, 2, 18, 325, 328, 5, 4, 5)
    // this.#createBox(arrayMap, 2, 18, 330, 336, 5, 7, 5)
    // this.#createBox(arrayMap, 2, 18, 338, 343, 5, 6, 5)
    // this.#createBox(arrayMap, 2, 18, 345, 358, 5, 4, 5)
    // this.#createBox(arrayMap, 2, 18, 360, 364, 5, 5, 5)
    // this.#createBox(arrayMap, 2, 18, 366, 377, 5, 12, 5)
    // this.#createBox(arrayMap, 2, 18, 379, 389, 5, 5, 5)
    // this.#createBox(arrayMap, 2, 18, 391, 393, 5, 3, 5)
    // this.#createBox(arrayMap, 2, 18, 395, 399, 5, 5, 5)
    // this.#createBox(arrayMap, 2, 18, 401, 420, 5, 6, 5)
    // this.#createBox(arrayMap, 2, 18, 422, 492, 5, 11, 5)
    // this.#createBox(arrayMap, 8, 18, 422, 492, 5, 5, 5)
    // this.#createBox(arrayMap, 2, 18, 494, 499, 5, 6, 5)
    // this.#createBox(arrayMap, 20, 23, 309, 323, 4, 7, 5)
    // this.#createBox(arrayMap, 20, 23, 345, 358, 4, 4, 5)
    // this.#createBox(arrayMap, 20, 23, 379, 389, 4, 5, 5)
    // this.#createBox(arrayMap, 20, 23, 401, 420, 4, 6, 5)
    // this.#createBox(arrayMap, 20, 23, 422, 492, 4, 5, 5)
    // this.#createBox(arrayMap, 25, 59, 294, 296, 5, 3, 5)
    // this.#createBox(arrayMap, 25, 59, 298, 301, 5, 4, 5)
    // this.#createBox(arrayMap, 25, 59, 303, 307, 5, 5, 5)
    // this.#createBox(arrayMap, 25, 59, 309, 323, 5, 7, 5)
    // this.#createBox(arrayMap, 25, 59, 325, 328, 5, 4, 5)
    // this.#createBox(arrayMap, 25, 59, 330, 336, 5, 7, 5)
    // this.#createBox(arrayMap, 25, 59, 338, 343, 5, 6, 5)
    // this.#createBox(arrayMap, 25, 59, 345, 358, 5, 4, 5)
    // this.#createBox(arrayMap, 25, 59, 360, 364, 5, 5, 5)
    // this.#createBox(arrayMap, 25, 59, 366, 377, 5, 12, 5)
    // this.#createBox(arrayMap, 25, 59, 379, 389, 5, 5, 5)
    // this.#createBox(arrayMap, 25, 59, 391, 393, 5, 3, 5)
    // this.#createBox(arrayMap, 25, 59, 395, 399, 5, 5, 5)
    // this.#createBox(arrayMap, 25, 59, 401, 420, 5, 6, 5)
    // this.#createBox(arrayMap, 37, 53, 422, 492, 5, 5, 5)
    // this.#createBox(arrayMap, 37, 59, 494, 499, 5, 6, 5)
    // this.#createBox(arrayMap, 55, 59, 422, 492, 5, 11, 5)
    // this.#createBox(arrayMap, 61, 69, 309, 323, 9, 7, 5)
    // this.#createBox(arrayMap, 61, 69, 345, 358, 9, 4, 5)
    // debugger
    // [ 71, 91].forEach((item) => {
    //   this.#createBox(arrayMap, item, item+4, 309, 323, 5, 7, 5)
    //   this.#createBox(arrayMap, item, item+4, 345, 358, 5, 4, 5)
    //   this.#createBox(arrayMap, item, item+4, 360, 370, 5, 5, 5)
    // })
    // debugger
    // /* this.#createBox(arrayMap, 71, 75, 309, 323, 5, 7, 5)
    // this.#createBox(arrayMap, 71, 75, 345, 358, 5, 4, 5) 
    // this.#createBox(arrayMap, 71, 75, 360, 370, 5, 5, 5) */
    // this.#createBox(arrayMap, 61, 75, 379, 389, 15, 5, 5)
    // this.#createBox(arrayMap, 61, 75, 391, 393, 7, 3, 5)
    // this.#createBox(arrayMap, 61, 75, 395, 399, 7, 5, 5)
    // this.#createBox(arrayMap, 61, 75, 401, 413, 7, 6, 5)
    // this.#createBox(arrayMap, 61, 75, 415, 428, 7, 4, 5)
    // this.#createBox(arrayMap, 61, 75, 435, 445, 15, 5, 5)
    // this.#createBox(arrayMap, 61, 75, 454, 494, 7, 5, 5)
    // this.#createBox(arrayMap, 61, 75, 496, 499, 7, 4, 5)

    // this.#addRegion(arrayMap, 20, 294, 4, 3, 5);
    // this.#addRegion(arrayMap, 20, 298, 4, 4, 5);
    // this.#addRegion(arrayMap, 20, 303, 4, 5, 5);
    // this.#addRegion(arrayMap, 20, 325, 4, 4, 5);
    // this.#addRegion(arrayMap, 20, 330, 4, 7, 5);
    // this.#addRegion(arrayMap, 20, 338, 4, 6, 5);
    // this.#addRegion(arrayMap, 20, 360, 4, 5, 5);
    // this.#addRegion(arrayMap, 20, 366, 4, 12, 5);
    // this.#addRegion(arrayMap, 20, 391, 4, 3, 5);
    // this.#addRegion(arrayMap, 20, 395, 4, 5, 5);
    // [ 422, 434, 446, 458, 470, 482].forEach((item)=>{
    //   this.#addRegion(arrayMap, 25, item, 11, 5, 5);//estadio
    //   this.#addRegion(arrayMap, 25, item+6, 6, 5, 5);
    //   this.#addRegion(arrayMap, 32, item+6, 4, 5, 5);
    // })
    // debugger
    // this.#addRegion(arrayMap, 25, 494, 11, 6, 5)
    // this.#addRegion(arrayMap, 61, 294, 9, 3, 5)
    // this.#addRegion(arrayMap, 61, 298, 9, 4, 5)
    // this.#addRegion(arrayMap, 61, 303, 9, 5, 5)
    // this.#addRegion(arrayMap, 61, 325, 9, 4, 5)
    // this.#addRegion(arrayMap, 61, 330, 9, 7, 5)
    // this.#addRegion(arrayMap, 61, 338, 9, 6, 5)
    // this.#addRegion(arrayMap, 61, 360, 9, 5, 5)
    // this.#addRegion(arrayMap, 61, 366, 9, 12, 5)
    // this.#addRegion(arrayMap, 70, 372, 6, 6, 5)
    // [ 71, 91].forEach((item) => {
    //   this.#addRegion(arrayMap, item, 294, 5, 3, 5)
    //   this.#addRegion(arrayMap, item, 298, 5, 4, 5)
    //   this.#addRegion(arrayMap, item, 303, 5, 5, 5)
    //   this.#addRegion(arrayMap, item, 325, 5, 4, 5)
    //   this.#addRegion(arrayMap, item, 330, 5, 7, 5)
    //   this.#addRegion(arrayMap, item, 338, 5, 6, 5)
    // })
    // debugger
    // /* this.#addRegion(arrayMap, 71, 294, 5, 3, 5)
    // this.#addRegion(arrayMap, 71, 298, 5, 4, 5)
    // this.#addRegion(arrayMap, 71, 303, 5, 5, 5) 
    // this.#addRegion(arrayMap, 71, 325, 5, 4, 5) 
    // this.#addRegion(arrayMap, 71, 330, 5, 7, 5)
    // this.#addRegion(arrayMap, 71, 338, 5, 6, 5) */
    // this.#addRegion(arrayMap, 61, 430, 15, 4, 5)
    // this.#addRegion(arrayMap, 61, 447, 15, 6, 5)
    // /* this.#addRegion(arrayMap, 25, 422, 11, 5, 5);//estadio
    // this.#addRegion(arrayMap, 25, 428, 6, 5, 5);
    // this.#addRegion(arrayMap, 32, 428, 4, 5, 5);
    // this.#addRegion(arrayMap, 25, 434, 11, 5, 5);//estadio
    // this.#addRegion(arrayMap, 25, 440, 6, 5, 5);
    // this.#addRegion(arrayMap, 32, 440, 4, 5, 5);
    // this.#addRegion(arrayMap, 25, 446, 11, 5, 5);//estadio
    // this.#addRegion(arrayMap, 25, 452, 6, 5, 5);
    // this.#addRegion(arrayMap, 32, 452, 4, 5, 5);
    // this.#addRegion(arrayMap, 25, 458, 11, 5, 5);//estadio
    // this.#addRegion(arrayMap, 25, 464, 6, 5, 5);
    // this.#addRegion(arrayMap, 32, 464, 4, 5, 5);
    // this.#addRegion(arrayMap, 25, 470, 11, 5, 5);//estadio
    // this.#addRegion(arrayMap, 25, 476, 6, 5, 5);
    // this.#addRegion(arrayMap, 32, 476, 4, 5, 5);
    // this.#addRegion(arrayMap, 25, 482, 11, 5, 5);//estadio
    // this.#addRegion(arrayMap, 25, 488, 6, 5, 5);
    // this.#addRegion(arrayMap, 32, 488, 4, 5, 5); */
    // // INTENTO YUMARI END



    // this.#addRegion(arrayMap, 14, 8, 11, 5, 5);
    // this.#addRegion(arrayMap, 14, 44, 11, 5, 5);

    // this.#addRegion(arrayMap, 14, 20, 28, 5, 7);
    // this.#addRegion(arrayMap, 14, 25, 5, 12, 7);
    // debugger
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
        console.log(iY,iX, array[iY][iX])
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
