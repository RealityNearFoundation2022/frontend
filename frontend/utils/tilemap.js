export default class TileMap {
  constructor(tileSize, row, column) {
    this.tileSize = tileSize
    this.row = row
    this.column = column
    this.map = this.#createMap()
    this.drawed = false
  }
  #createMap() {
    const arrayMap = Array.apply(null, Array(100)).map((e) =>
      Array.apply(null, Array(100)).map(Number.prototype.valueOf, 0),
    )
    const index = `${this.row}${this.column}`;
    this.setCanvas[index](arrayMap)
    return arrayMap
  }

  setCanvas =  {
    '00': (arrayMap) => {
      // this.#createBox(arrayMap, 2, 30, 2, 6, 5, 5, 5)
      this.#createBox(arrayMap, 32, 41, 2, 18, 10, 5, 5)
      this.#createBox(arrayMap, 32, 41, 26, 48, 10, 5, 5)
      // this.#createBox(arrayMap, 14, 30, 38, 42, 5, 5, 5)
      this.#createBox(arrayMap, 14, 24, 8, 12, 11, 5, 5)
      this.#createBox(arrayMap, 2, 48, 50, 55, 5, 6, 5)
      this.#createBox(arrayMap, 2, 48, 57, 63, 5, 7, 5)
      this.#createBox(arrayMap, 50, 65, 50, 63, 16, 14, 5)
      this.#createBox(arrayMap, 67, 95, 50, 52, 5, 3, 5)
      this.#createBox(arrayMap, 67, 95, 60, 63, 5, 4, 5)
      this.#createBox(arrayMap, 62, 65, 65, 99, 4, 11, 5)
      this.#createBox(arrayMap, 77, 99, 98, 100, 5, 3, 5)
      this.#createBox(arrayMap, 77, 99, 75, 78, 5, 4, 5)
      this.#createBox(arrayMap, 97, 100, 2, 18, 4, 5, 5)
      this.#createBox(arrayMap, 97, 100, 32, 48, 4, 5, 5)
      this.#createBox(arrayMap, 97, 100, 20, 30, 4, 11, 5)
      this.#createBox(arrayMap, 77, 87, 65, 73, 11, 9, 5)

      this.#createBox(arrayMap, 97, 100, 50, 52, 4, 3, 5)
      this.#createBox(arrayMap, 97, 100, 54, 58, 4, 5, 5)
      this.#createBox(arrayMap, 97, 100, 60, 63, 4, 4, 5)
      
      this.#createBox(arrayMap, 14, 41, 20, 24, 28, 5, 7)
      this.#createBox(arrayMap, 14, 18, 25, 36, 5, 12, 7)
      this.#createBox(arrayMap, 89, 100, 65, 73, 12, 9, 7)
      

      const arr5x5 = [[2, 30, 2, 6], [2, 12, 8, 48], [26, 30, 8, 18], [14, 24, 14, 18], [20, 30, 26, 36], [14, 30, 38, 42], [43, 95, 2, 6], [43, 47, 8, 48], [61, 95, 8, 18], [14, 48, 65, 75], [2, 24, 77, 87], [38, 60, 77, 87], [2, 12, 89, 99], [26, 36, 89, 99], [50, 60, 89, 99], [67, 95, 54, 58], [61, 71, 20, 48], [26, 30, 44, 48], [73, 95, 32, 48], [77, 99, 80, 96]];
      for(let item of arr5x5){
        this.#createBox(arrayMap, item[0], item[1], item[2], item[3], 5, 5, 5)
      }

      const arr11x11=[{initX:2, initY:65},{initX:14, initY:89},{initX:26, initY:77},{initX:38, initY:89},{initX:50, initY:65}]
      for(let i=0;i<arr11x11.length;i++){
        this.#createBox(arrayMap, arr11x11[i].initX, arr11x11[i].initX+10, arr11x11[i].initY, arr11x11[i].initY+10, 11, 11, 5)
      }

      for(let item of [14,49]){
        this.#createBox(arrayMap, item, item+10, 44, 48, 11, 5, 5)
      }
      for(let item of [8,20,32]){
        this.#createBox(arrayMap, 49, 59, item, item+4, 11, 5, 5)
        this.#createBox(arrayMap, 49, 59, item+6, item+10, 5, 5, 5)
      }
      for(let item of [73, 85]){
        this.#createBox(arrayMap, item, item+4, 20, 30, 5, 11, 5)
        this.#createBox(arrayMap, item+6, item+10, 20, 30, 5, 5, 5)
      }
      for(let item of [{initY:65,sizeY:9}, {initY:75,sizeY:10}, {initY:86,sizeY:11},{initY:98,sizeY:3}]){
        this.#createBox(arrayMap, 67, 75, item.initY, item.initY+item.sizeY-1, 9, item.sizeY, 5)
      }

    },
    '01': (arrayMap) => {
      //ejemplo
      this.#createBox(arrayMap, 77, 99, 1, 2, 5, 2, 5)
      this.#createBox(arrayMap, 71, 99, 28, 38, 5, 10, 5)
      this.#createBox(arrayMap, 62, 65, 1, 23, 4, 11, 5)
      for(let item of [{initY:99, sizeY:2}, {initY:86, sizeY:6}, {initY:73, sizeY:12}, {initY:47, sizeY:8}, {initY:64, sizeY:8}]){
        this.#createBox(arrayMap, 2, 18, item.initY, item.initY+item.sizeY-1, 5, item.sizeY, 5)
        this.#createBox(arrayMap, 25, 59, item.initY, item.initY+item.sizeY-1, 5, item.sizeY, 5)
      }

      for(let item of [{initY:56, sizeY:7}, {initY:64, sizeY:8}, {initY:73, sizeY:12}, {initY:86, sizeY:6}, {initY:93, sizeY:5}, {initY:99, sizeY:2}]){
        this.#createBox(arrayMap, 61, 69, item.initY, item.initY+item.sizeY-1, 9, item.sizeY, 5)
      }
      /*  */
      this.#createBox(arrayMap, 20, 27, 19, 23, 8, 5, 5)
      this.#createBox(arrayMap, 29, 38, 19, 23, 10, 5, 5)
      this.#createBox(arrayMap, 40, 48, 19, 23, 9, 5, 5)
      this.#createBox(arrayMap, 67, 75, 1, 8, 9, 8, 5)
      this.#createBox(arrayMap, 67, 75, 10, 20, 9, 11, 5)
      this.#createBox(arrayMap, 67, 75, 22, 26, 9, 5, 5)
      this.#createBox(arrayMap, 62, 65, 25, 31, 4, 7, 5)
      this.#createBox(arrayMap, 66, 69, 28, 31, 4, 4, 5)
      this.#createBox(arrayMap, 55, 60, 25, 31, 6, 7, 5)
      this.#createBox(arrayMap, 55, 60, 33, 37, 6, 5, 5)
      this.#createBox(arrayMap, 55, 60, 39, 45, 6, 7, 5)
      this.#createBox(arrayMap, 55, 60, 47, 54, 6, 8, 5)
      this.#createBox(arrayMap, 20, 23, 33, 37, 4, 5, 5)
      this.#createBox(arrayMap, 20, 23, 47, 54, 4, 8, 5)
      this.#createBox(arrayMap, 20, 23, 64, 71, 4, 8, 5)
      this.#createBox(arrayMap, 92, 100, 39, 45, 9, 7, 5)
      this.#createBox(arrayMap, 79, 90, 39, 45, 12, 7, 5)
      for(let elem of [{initX:71, sizeX:7}, {initX:79, sizeX:8}, {initX:88, sizeX:5}, {initX:94, sizeX:7}]){
        for(let item of [{initY:39, sizeY:7}, {initY:47, sizeY:8}, {initY:56, sizeY:7}, {initY:64, sizeY:8}, {initY:73, sizeY:12}]){
          this.#createBox(arrayMap, elem.initX, elem.initX+elem.sizeX-1, item.initY, item.initY+item.sizeY-1, elem.sizeX, item.sizeY, 5)
        }
      }
      
      for(let item of [25, 39, 56]){
        this.#createBox(arrayMap, 20, 23, item, item + 6, 4, 7, 5)
      }
      for(let item of [{initY:33, sizeY:5}, {initY:39, sizeY:7}, {initY:47, sizeY:8}]){
        this.#createBox(arrayMap, 62, 69, item.initY, item.initY+item.sizeY-1, 8, item.sizeY, 5)
      }
      for(let item of [{initX:71, sizeX:7}, {initX:79, sizeX:12}, {initX:92, sizeX:9}]){
        this.#createBox(arrayMap, item.initX, item.initX+item.sizeX-1, 39, 45, item.sizeX, 7, 5)
      }

      const arr5x5 = [[2, 24, 1, 11], [38, 60, 1, 11], [14, 48, 13, 17], [2, 18, 33, 37], [25, 53, 33, 37], [2, 18, 93, 97], [25, 53, 93, 97], [77, 99, 4, 26],[14, 18, 19, 23]];
      for(let item of arr5x5){
        this.#createBox(arrayMap, item[0], item[1], item[2], item[3], 5, 5, 5)
      }

      const arr5x7 = [[2, 18, 25, 31], [25, 53, 25, 31], [2, 18, 39, 45], [25, 53, 39, 45], [2, 18, 56, 62], [25, 59, 56, 62] ];
      for(let item of arr5x7){
        this.#createBox(arrayMap, item[0], item[1], item[2], item[3], 5, 7, 5)
      }

      const arr11x11=[{initX:2, initY:13},{initX:26, initY:1},{initX:50, initY:13}]
      for(let i=0;i<arr11x11.length;i++){
        this.#createBox(arrayMap, arr11x11[i].initX, arr11x11[i].initX+10, arr11x11[i].initY, arr11x11[i].initY+10, 11, 11, 5)
      }
    },
    '02': (arrayMap) => {
      this.#createBox(arrayMap, 61, 89, 29, 38, 9, 10, 5)
      this.#createBox(arrayMap, 2, 18, 1, 3, 5, 3, 5)
      this.#createBox(arrayMap, 2, 18, 75, 82, 5, 8, 5)
      this.#createBox(arrayMap, 2, 18, 84, 92, 5, 9, 5)
      this.#createBox(arrayMap, 25, 59, 1, 3, 5, 3, 5)
      this.#createBox(arrayMap, 25, 59, 75, 82, 5, 8, 5)
      this.#createBox(arrayMap, 25, 59, 84, 92, 5, 9, 5)
      this.#createBox(arrayMap, 61, 69, 5, 27, 9, 5, 5)
      this.#createBox(arrayMap, 61, 95, 29, 38, 9, 10, 5)
      this.#createBox(arrayMap, 61, 95, 59, 73, 9, 15, 5)
      this.#createBox(arrayMap, 20, 23, 5, 33, 4, 5, 5)
      this.#createBox(arrayMap, 20, 23, 47, 57, 4, 5, 5)

      const arr5x5 = [[2, 18, 5, 33], [25, 59, 5, 33], [2, 18, 47, 57], [25, 59, 47, 57], [2, 18, 64, 68], [25, 59, 64, 68 ]];
      for(let item of arr5x5){
        this.#createBox(arrayMap, item[0], item[1], item[2], item[3], 5, 5, 5)
      }

      const arr5x4 = [[2, 18, 70, 73], [25, 59, 70, 73], [2, 18, 35, 38], [25, 59, 35, 38], [2, 18, 59, 62], [25, 59, 59, 62]];
      for(let item of arr5x4){
        this.#createBox(arrayMap, item[0], item[1], item[2], item[3], 5, 4, 5)
      }
    },
    '03': (arrayMap) => {},
    '04': (arrayMap) => {},
    '10': (arrayMap) => {
      const arr5x5 = [[2, 18, 3, 97], [32, 48, 3, 97], [1, 59, 80, 84]];
      for(let item of arr5x5){
        this.#createBox(arrayMap, item[0], item[1], item[2], item[3], 5, 5, 5)
      }

      const arr11x11=[{initX:13, initY:86}]
      for(let i=0;i<arr11x11.length;i++){
        this.#createBox(arrayMap, arr11x11[i].initX, arr11x11[i].initX+10, arr11x11[i].initY, arr11x11[i].initY+10, 11, 11, 5)
      }
    },
    '11': (arrayMap) => {},
    '12': (arrayMap) => {},
    '13': (arrayMap) => {},
    '14': (arrayMap) => {},
    '20': (arrayMap) => {},
    '21': (arrayMap) => {},
    '22': (arrayMap) => {
      //ejemplo
      this.#createBox(arrayMap, 2, 30, 2, 6, 5, 5, 4)
    },
    '23': (arrayMap) => {},
    '24': (arrayMap) => {},
    '30': (arrayMap) => {},
    '31': (arrayMap) => {},
    '32': (arrayMap) => {},
    '33': (arrayMap) => {},
    '34': (arrayMap) => {},
    '40': (arrayMap) => {},
    '41': (arrayMap) => {},
    '42': (arrayMap) => {},
    '43': (arrayMap) => {},
    '44': (arrayMap) => {},
  }

  #createBox(
    arrayMap,
    initialX,
    finalX,
    initialY,
    finalY,
    sizeX,
    sizeY,
    value,
  ) {
    for (let iX = initialX; iX <= finalX - sizeX + 1; iX = iX + sizeX + 1) {
      for (let iY = initialY; iY <= finalY - sizeY + 1; iY = iY + sizeY + 1) {
        this.#addRegion(arrayMap, iX, iY, sizeX, sizeY, value)
      }
    }
  }
  #addRegion(array, initialX, initialY, sizeX, sizeY, value) {
    for (let iY = initialY - 1; iY < initialY + sizeY - 1; iY++) {
      for (let iX = initialX - 1; iX < initialX + sizeX - 1; iX++) {
        console.log(iY, iX, array[iY][iX])
        array[iY][iX] = value
      }
    }
  }

  #image(fileName, callback) {
    const img = document.createElement('img')
    img.onload = function () {
      callback(img)
    }
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
        this.#image(tile, (image) => {
          if (image) {
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
    })
    // document.addEventListener('click', this.#selected)
  }

  #getPosition(canvas, ctx) {
    const getMousePosition = (canvas, event) => {
      let rect = canvas.getBoundingClientRect()
      let x = event.clientX - rect.left
      let y = event.clientY - rect.top
      const selectedIdX =Math.ceil(x / this.tileSize);
      const selectedIdY =Math.ceil(y / this.tileSize);
      const newMap = this.map;
      const newSelected = this.map[selectedIdY-1][selectedIdX -1].toString().includes('s') ? this.map[selectedIdX][selectedIdY] : `${this.map[selectedIdX][selectedIdY]}-s`
      newMap[selectedIdY-1][selectedIdX-1] = newSelected
      this.map = newMap
      this.#drawMap(ctx)
      const posY = this.row*100 +(selectedIdY);
      const posX =this.column * 100 +(selectedIdX);
      console.log( 'posY', posY,'posY', posX)
    }
    canvas.addEventListener('click', (e) => {
      getMousePosition(canvas, e)
    })
  }
  draw(canvas, ctx) {
    this.#setCanvasSize(canvas)
    this.#clearCanvas(canvas, ctx)
    this.#drawMap(ctx)
    this.#getPosition(canvas, ctx)
    console.log('drawed!')
    this.drawed = true
  }
}
