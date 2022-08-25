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
      this.#createBox(arrayMap, 71, 77, 86, 91, 7, 6, 5)
      this.#createBox(arrayMap, 71, 77, 93, 100, 7, 8, 5)
      this.#createBox(arrayMap, 79, 86, 86, 95, 8, 10, 5)
      this.#createBox(arrayMap, 79, 86, 97, 100, 8, 4, 5)
      this.#createBox(arrayMap, 88, 100, 90, 95, 13, 6, 5)
      this.#createBox(arrayMap, 88, 92, 86, 88, 5, 3, 5)
      this.#createBox(arrayMap, 88, 95, 97, 100, 8, 4, 5)
      this.#createBox(arrayMap, 97, 100, 97, 100, 4, 4, 5)
      this.#createBox(arrayMap, 94, 100, 86, 88, 7, 3, 5)
      this.#createBox(arrayMap, 62, 65, 1, 23, 4, 11, 5)
      for(let item of [{initY:99, sizeY:2}, {initY:86, sizeY:6}, {initY:73, sizeY:12}, {initY:47, sizeY:8}, {initY:64, sizeY:8}]){
        this.#createBox(arrayMap, 2, 18, item.initY, item.initY+item.sizeY-1, 5, item.sizeY, 5)
        this.#createBox(arrayMap, 25, 59, item.initY, item.initY+item.sizeY-1, 5, item.sizeY, 5)
      }

      for(let item of [{initY:56, sizeY:7}, {initY:64, sizeY:8}, {initY:73, sizeY:12}, {initY:86, sizeY:6}, {initY:93, sizeY:5}, {initY:99, sizeY:2}]){
        this.#createBox(arrayMap, 61, 69, item.initY, item.initY+item.sizeY-1, 9, item.sizeY, 5)
      }
      /*  */
      this.#createBox(arrayMap, 20, 23, 73, 84, 4, 12, 5)
      this.#createBox(arrayMap, 20, 23, 86, 91, 4, 6, 5)
      this.#createBox(arrayMap, 20, 23, 93, 97, 4, 5, 5)
      this.#createBox(arrayMap, 20, 23, 99, 100, 4, 2, 5)
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

      const arr5x5 = [[2, 24, 1, 11], [38, 60, 1, 11], [14, 48, 13, 17], [2, 18, 33, 37], [25, 53, 33, 37], [2, 18, 93, 97], [25, 59, 93, 97], [77, 99, 4, 26],[14, 18, 19, 23]];
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
      this.#createBox(arrayMap, 79, 86, 5, 10, 8, 6, 5)
      this.#createBox(arrayMap, 71, 86, 11, 15, 16, 5, 5)
      this.#createBox(arrayMap, 71, 79, 17, 21, 9, 5, 5)
      this.#createBox(arrayMap, 81, 86, 17, 21, 6, 5, 5)
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
      this.#createBox(arrayMap, 2, 18, 40, 45, 5, 6, 5)
      this.#createBox(arrayMap, 25, 59, 40, 45, 5, 6, 5)
      this.#createBox(arrayMap, 71, 89, 40, 57, 19, 18, 6)
      this.#createBox(arrayMap, 61, 69, 1, 3, 9, 3, 5)
      this.#createBox(arrayMap, 61, 69, 40, 47, 9, 8, 5)
      this.#createBox(arrayMap, 61, 69, 49, 57, 9, 9, 5)
      this.#createBox(arrayMap, 91, 100, 40, 47, 10, 8, 5)
      this.#createBox(arrayMap, 91, 100, 49, 57, 10, 9, 5)
      this.#createBox(arrayMap, 71, 89, 23, 27, 9, 5, 5)
      this.#createBox(arrayMap, 71, 77, 1, 3, 7, 3, 5)
      this.#createBox(arrayMap, 71, 77, 5, 9, 7, 5, 5)
      this.#createBox(arrayMap, 79, 86, 1, 3, 8, 3, 5)
      this.#createBox(arrayMap, 91, 100, 23, 27, 10, 5, 5)
      this.#createBox(arrayMap, 88, 95, 1, 11, 8, 11, 5)
      this.#createBox(arrayMap, 88, 95, 13, 21, 8, 9, 5)
      this.#createBox(arrayMap, 91, 95, 29, 38, 5, 10, 5)
      this.#createBox(arrayMap, 97, 100, 29, 33, 4, 5, 5)
      this.#createBox(arrayMap, 97, 100, 35, 38, 4, 4, 5)

      for(let item of [[2, 18, 5], [20, 23, 4], [25, 59, 5], [61, 69, 9], [71, 75, 5], [77, 89, 6], [91, 95, 5], [97, 100, 4]]){
        this.#createBox(arrayMap, item[0], item[1], 94, 100, item[2], 3, 3)
      }

      for(let item of [{initY:59,sizeY:4}, {initY:64,sizeY:5}, {initY:70,sizeY:4},{initY:75,sizeY:8}, {initY:84,sizeY:9}, {initY:35,sizeY:4}, {initY:40,sizeY:6}, {initY:1,sizeY:3}]){
        this.#createBox(arrayMap, 20, 23, item.initY, item.initY+item.sizeY-1, 4, item.sizeY, 5)
      }

      for(let item of [{initY:1,sizeY:3}, {initY:5,sizeY:7}, {initY:13,sizeY:5},{initY:19,sizeY:4}]){
        this.#createBox(arrayMap, 97, 100, item.initY, item.initY+item.sizeY-1, 4, item.sizeY, 5)
      }

      for(let item of [{initY:59,sizeY:5}, {initY:65,sizeY:9}, {initY:75,sizeY:3},{initY:79,sizeY:7}, {initY:87,sizeY:6}]){
        this.#createBox(arrayMap, 91, 95, item.initY, item.initY+item.sizeY-1, 5, item.sizeY, 5)
        this.#createBox(arrayMap, 97, 100, item.initY, item.initY+item.sizeY-1, 4, item.sizeY, 5)
      }

      for(let item of [{initX:61, sizeX:9}, {initX:71, sizeX:5}, {initX:77, sizeX:6}, {initX:84, sizeX:6}]){
        this.#createBox(arrayMap, item.initX, item.initX+item.sizeX-1, 75, 82, item.sizeX, 8, 5)
        this.#createBox(arrayMap, item.initX, item.initX+item.sizeX-1, 84, 92, item.sizeX, 9, 5)
      }

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

      this.#createBox(arrayMap, 1, 1, 2, 18, 1, 5, 5)
      this.#createBox(arrayMap, 1, 1, 32, 48, 1, 5, 5)
      this.#createBox(arrayMap, 1, 1, 20, 30, 1, 11, 5)
      this.#createBox(arrayMap, 1, 1, 50, 52, 1, 3, 5)
      this.#createBox(arrayMap, 1, 1, 54, 58, 1, 5, 5)
      this.#createBox(arrayMap, 1, 1, 60, 63, 1, 4, 5)

      this.#createBox(arrayMap, 93, 97, 20, 30, 5, 11, 5)
      this.#createBox(arrayMap, 1, 59, 75, 78, 5, 4, 5)
      this.#createBox(arrayMap, 1, 59, 98, 100, 5, 3, 5)
      this.#createBox(arrayMap, 71, 81, 98, 100, 5, 3, 5)
      this.#createBox(arrayMap, 71, 81, 75, 78, 5, 4, 5)
      this.#createBox(arrayMap, 45, 79, 60, 63, 5, 4, 5)
      this.#createBox(arrayMap, 45, 79, 50, 52, 5, 3, 5)
      this.#createBox(arrayMap, 3, 43, 50, 55, 5, 6, 5)
      this.#createBox(arrayMap, 3, 43, 57, 63, 5, 7, 5)
      this.#createBox(arrayMap, 25, 59, 65, 73, 11, 9, 5)
      this.#createBox(arrayMap, 61, 69, 75, 84, 9, 10, 5)
      this.#createBox(arrayMap, 61, 69, 86, 96, 9, 11, 5)
      this.#createBox(arrayMap, 81, 99, 50, 55, 5, 6, 5)
      this.#createBox(arrayMap, 81, 99, 57, 63, 5, 7, 5)
      this.#createBox(arrayMap, 94, 100, 75, 78, 7, 4, 5)
      this.#createBox(arrayMap, 94, 100, 80, 96, 7, 5, 5)
      this.#createBox(arrayMap, 83, 92, 75, 84, 10, 10, 5)
      this.#createBox(arrayMap, 83, 92, 86, 96, 10, 11, 5)
      this.#createBox(arrayMap, 1, 14, 65, 73, 14, 9, 7)
      this.#createBox(arrayMap, 99, 100, 2, 18, 2, 5, 5)
      this.#createBox(arrayMap, 99, 100, 20, 30, 2, 5, 5)
      this.#createBox(arrayMap, 99, 100, 32, 48, 2, 5, 5)
      this.#createBox(arrayMap, 99, 100, 50, 55, 2, 6, 5)
      this.#createBox(arrayMap, 99, 100, 57, 63, 2, 7, 5)
      this.#createBox(arrayMap, 99, 100, 65, 73, 2, 9, 5)
      this.#createBox(arrayMap, 87, 97, 65, 73, 11, 9, 5)
      
      this.#createBox(arrayMap, 61, 69, 98, 100, 9, 3, 5)
      this.#createBox(arrayMap, 83, 92, 98, 100, 10, 3, 5)
      this.#createBox(arrayMap, 94, 100, 98, 100, 7, 3, 5)


      const arr5x5 = [[3, 97, 2, 18], [3, 97, 32, 48], [1, 59, 80, 84],[71, 81, 80, 96 ], [3, 7, 20, 30], [45, 79, 54, 58],[1, 11, 86, 96], [25, 59, 86, 96], [71, 81, 80, 96]];
      for(let item of arr5x5){
        this.#createBox(arrayMap, item[0], item[1], item[2], item[3], 5, 5, 5)
      }

      const arr11x11=[{initX:13, initY:86}]
      for(let i=0;i<arr11x11.length;i++){
        this.#createBox(arrayMap, arr11x11[i].initX, arr11x11[i].initX+10, arr11x11[i].initY, arr11x11[i].initY+10, 11, 11, 5)
      }

      for(let item of [9, 21, 33, 45, 57, 69, 81]){
        this.#createBox(arrayMap, item, item+4, 20, 30, 5, 11, 5)
        this.#createBox(arrayMap, item+6, item+10, 20, 30, 5, 5, 5)
      }

      for(let item of [{initX:16, sizeX:8}, {initX:61, sizeX:9}, {initX:71, sizeX:15}]){
        this.#createBox(arrayMap, item.initX, item.initX+item.sizeX-1, 65, 73, item.sizeX, 9, 5)
      }
    },
    '11': (arrayMap) => {
      this.#createBox(arrayMap, 1, 35, 28, 37, 5, 10, 5)
      this.#createBox(arrayMap, 1, 59, 1, 2, 5, 2, 5)
      this.#createBox(arrayMap, 37, 59, 28, 37, 23, 10, 5)
      this.#createBox(arrayMap, 71, 81, 1, 2, 5, 2, 5)
      this.#createBox(arrayMap, 61, 69, 1, 1, 9, 1, 5)
      this.#createBox(arrayMap, 61, 69, 2, 16, 9, 7, 5)
      this.#createBox(arrayMap, 61, 87, 28, 37, 27, 10, 5)
      this.#createBox(arrayMap, 65, 84, 69, 88, 20, 20, 6)
      this.#createBox(arrayMap, 89, 96, 28, 37, 8, 10, 5)
      this.#createBox(arrayMap, 98, 100, 28, 37, 3, 10, 5)
      this.#createBox(arrayMap, 61, 69, 18, 26, 4, 4, 5)
      this.#createBox(arrayMap, 94, 100, 4, 14, 7, 5, 5)
      this.#createBox(arrayMap, 71, 87, 18, 26, 5, 4, 5)
      this.#createBox(arrayMap, 71, 87, 10, 16, 5, 7, 5)
      this.#createBox(arrayMap, 94, 100, 10, 14, 7, 5, 5)
      this.#createBox(arrayMap, 83, 92, 1, 8, 10, 8, 5)
      this.#createBox(arrayMap, 94, 100, 1, 2, 7, 2, 5)
      this.#createBox(arrayMap, 89, 100, 16, 18, 12, 3, 5)
      this.#createBox(arrayMap, 89, 96, 20, 26, 8, 7, 5)
      this.#createBox(arrayMap, 98, 100, 20, 26, 3, 7, 5)
      this.#createBox(arrayMap, 19, 33, 73, 77, 7, 5, 5)
      this.#createBox(arrayMap, 19, 33, 79, 84, 7, 6, 5)
      this.#createBox(arrayMap, 9, 26, 39, 45, 18, 7, 5)
      this.#createBox(arrayMap, 28, 40, 39, 45, 13, 7, 5)
      this.#createBox(arrayMap, 9, 22, 47, 54, 14, 8, 5)
      this.#createBox(arrayMap, 24, 40, 47, 54, 17, 8, 5)
      this.#createBox(arrayMap, 19, 25, 86, 100, 7, 15, 5)
      this.#createBox(arrayMap, 31, 40, 56, 71, 10, 16, 7)
      this.#createBox(arrayMap, 27, 30, 56, 71, 4, 16, 6)
      this.#createBox(arrayMap, 1, 7, 39, 45, 7, 7, 5)
      this.#createBox(arrayMap, 2, 7, 47, 54, 6, 8, 5)
      this.#createBox(arrayMap, 19, 25, 56, 62, 7, 7, 5)
      this.#createBox(arrayMap, 19, 25, 64, 71, 7, 8, 5)
      this.#createBox(arrayMap, 9, 17, 90, 100, 9, 11, 7)
      this.#createBox(arrayMap, 27, 33, 86, 93, 7, 8, 5)
      this.#createBox(arrayMap, 27, 33, 95, 99, 7, 5, 5)
      this.#createBox(arrayMap, 57, 63, 73, 84, 7, 12, 7)
      this.#createBox(arrayMap, 86, 90, 69, 82, 5, 14, 4)
      this.#createBox(arrayMap, 86, 90, 84, 93, 5, 10, 4)
      this.#createBox(arrayMap, 80, 90, 95, 99, 5, 5, 4)
      this.#createBox(arrayMap, 70, 78, 95, 100, 4, 6, 4)
      this.#createBox(arrayMap, 65, 68, 95, 99, 4, 5, 4)
      this.#createBox(arrayMap, 65, 73, 90, 93, 9, 4, 4)
      this.#createBox(arrayMap, 75, 84, 90, 93, 10, 4, 4)
      this.#createBox(arrayMap, 1, 7, 90, 95, 7, 6, 5)
      this.#createBox(arrayMap, 1, 7, 97, 100, 7, 4, 5)
      
      for(let item of [{initX:65, sizeX:9}, {initX:75, sizeX:16}, {initX:92, sizeX:5}, {initX:98, sizeX:3}]){
        this.#createBox(arrayMap, item.initX, item.initX+item.sizeX-1, 63, 67, item.sizeX, 5, 5)
      }

      for(let item of [{initY:69, sizeY:7}, {initY:77, sizeY:6}, {initY:84, sizeY:5}, {initY:90, sizeY:4}, {initY:95, sizeY:5}]){
        this.#createBox(arrayMap, 92, 96, item.initY, item.initY+item.sizeY-1, 5, item.sizeY, 4)
        this.#createBox(arrayMap, 98, 100, item.initY, item.initY+item.sizeY-1, 3, item.sizeY, 4)
      }
      
      for(let item of [{initY:63, sizeY:9}, {initY:86, sizeY:8}, {initY:95, sizeY:5}]){
        this.#createBox(arrayMap, 57, 63, item.initY, item.initY+item.sizeY-1, 7, item.sizeY, 5)
      }

      for(let item of [{initY:56, sizeY:7}, {initY:64, sizeY:8}, {initY:73, sizeY:12}, {initY:73, sizeY:12}, {initY:86, sizeY:3}]){
        this.#createBox(arrayMap, 2, 7, item.initY, item.initY+item.sizeY-1, 6, item.sizeY, 5)
        this.#createBox(arrayMap, 9, 17, item.initY, item.initY+item.sizeY-1, 9, item.sizeY, 5)
      }
/////////////////////////////////7
      for(let item of [{initY:39, sizeY:7}, {initY:47, sizeY:4}, {initY:52, sizeY:3}, {initY:56, sizeY:6}]){
        this.#createBox(arrayMap, 57, 63, item.initY, item.initY+item.sizeY-1, 7, item.sizeY, 5)
        this.#createBox(arrayMap, 65, 73, item.initY, item.initY+item.sizeY-1, 9, item.sizeY, 5)
        this.#createBox(arrayMap, 75, 81, item.initY, item.initY+item.sizeY-1, 7, item.sizeY, 5)
        this.#createBox(arrayMap, 83, 90, item.initY, item.initY+item.sizeY-1, 8, item.sizeY, 5)
        this.#createBox(arrayMap, 92, 96, item.initY, item.initY+item.sizeY-1, 5, item.sizeY, 5)
        this.#createBox(arrayMap, 98, 100, item.initY, item.initY+item.sizeY-1, 3, item.sizeY, 5)
      }
      /////////////////////////////////////////77777
      for(let item of [{initY:39, sizeY:7}, {initY:47, sizeY:8}, {initY:56, sizeY:6}, {initY:63, sizeY:9}, {initY:73, sizeY:5}, {initY:79, sizeY:6}, {initY:86, sizeY:8}, {initY:95, sizeY:5}]){
        this.#createBox(arrayMap, 42, 48, item.initY, item.initY+item.sizeY-1, 7, item.sizeY, 5)
        this.#createBox(arrayMap, 50, 55, item.initY, item.initY+item.sizeY-1, 6, item.sizeY, 5)
      }
      ////////////////7777
      for(let item of [{initY:73, sizeY:5}, {initY:79, sizeY:6}, {initY:86, sizeY:8}, {initY:95, sizeY:5}]){
        this.#createBox(arrayMap, 35, 40, item.initY, item.initY+item.sizeY-1, 6, item.sizeY, 5)
      }///////////////////////

      const arr5x5 = [[37, 59, 4, 26], [1, 35, 16, 26], [13, 23, 4, 14], [71, 81, 4, 8], [88, 92, 10, 14]];
      for(let item of arr5x5){
        this.#createBox(arrayMap, item[0], item[1], item[2], item[3], 5, 5, 5)
      }

      const arr11x11=[{initX:1, initY:4}, {initX:25, initY:4}]
      for(let i=0;i<arr11x11.length;i++){
        this.#createBox(arrayMap, arr11x11[i].initX, arr11x11[i].initX+10, arr11x11[i].initY, arr11x11[i].initY+10, 11, 11, 5)
      }
    },
    '12': (arrayMap) => {

      this.#createBox(arrayMap, 80, 96, 29, 63, 5, 5, 4)
      this.#createBox(arrayMap, 65, 78, 29, 63, 4, 5, 4)
      this.#createBox(arrayMap, 98, 100, 29, 63, 3, 5, 4)
      this.#createBox(arrayMap, 80, 96, 1, 17, 5, 5, 4)
      this.#createBox(arrayMap, 65, 68, 1, 17, 4, 5, 4)
      this.#createBox(arrayMap, 70, 78, 1, 5, 4, 5, 4)
      this.#createBox(arrayMap, 70, 78, 7, 17, 4, 11, 4)
      this.#createBox(arrayMap, 70, 78, 19, 27, 4, 9, 4)

      for(let item of [{initY:29, sizeY:5}, {initY:35, sizeY:4}, {initY:40, sizeY:8}, {initY:49, sizeY:9}, {initY:59, sizeY:5}, {initY:65, sizeY:9}, {initY:75, sizeY:3}, {initY:79, sizeY:7}, {initY:87, sizeY:6}]){
        this.#createBox(arrayMap, 1, 3, item.initY, item.initY+item.sizeY-1, 3, item.sizeY, 5)
      }

      for(let item of [{initY:29, sizeY:5}, {initY:35, sizeY:4}, {initY:40, sizeY:6}, {initY:47, sizeY:5}, {initY:53, sizeY:5}, {initY:59, sizeY:5}, {initY:65, sizeY:9}, {initY:75, sizeY:3}, {initY:79, sizeY:7}, {initY:87, sizeY:6}]){
        this.#createBox(arrayMap, 5, 11, item.initY, item.initY+item.sizeY-1, 7, item.sizeY, 5)
        this.#createBox(arrayMap, 13, 17, item.initY, item.initY+item.sizeY-1, 5, item.sizeY, 5)
        this.#createBox(arrayMap, 19, 25, item.initY, item.initY+item.sizeY-1, 7, item.sizeY, 5)
      }

      for(let item of [{initY:65, sizeY:4}, {initY:70, sizeY:4}, {initY:75, sizeY:3}, {initY:79, sizeY:7}, {initY:87, sizeY:6}, {initY:94, sizeY:3}, {initY:98, sizeY:3}]){
        this.#createBox(arrayMap, 65, 78, item.initY, item.initY+item.sizeY-1, 4, item.sizeY, 4)
        this.#createBox(arrayMap, 80, 96, item.initY, item.initY+item.sizeY-1, 5, item.sizeY, 4)
        this.#createBox(arrayMap, 98, 100, item.initY, item.initY+item.sizeY-1, 3, item.sizeY, 4)
      }

      for(let item of [{initX:1, sizeX:3}, {initX:5, sizeX:7}, {initX:13, sizeX:5}, {initX:19, sizeX:7}, {initX:27, sizeX:7}, {initX:35, sizeX:7}, {initX:43, sizeX:6}, {initX:50, sizeX:14}]){
        this.#createBox(arrayMap, item.initX, item.initX+item.sizeX-1, 94, 100, item.sizeX, 3, 3)
      }
    },
    '13': (arrayMap) => {},
    '14': (arrayMap) => {},
    '20': (arrayMap) => {
      for(let item of [[75, 93, 8, 9], [50, 62, 17, 13], [64, 68, 17, 5], [70, 73, 17, 4], [95, 100, 17, 6]]){
        this.#createBox(arrayMap, 28, 44, item[0], item[1], item[2], item[3], 5)
      }

      for(let item of [[2, 18, 5], [20, 30, 11], [32, 48, 5], [50, 55, 6], [57, 63, 7]]){
        this.#createBox(arrayMap, 5, 8, item[0], item[1], 4, item[2], 5)
      }
      this.#createBox(arrayMap, 1, 3, 50, 55, 3, 6, 5)
      this.#createBox(arrayMap, 1, 3, 57, 63, 3, 7, 5)
      this.#createBox(arrayMap, 1, 8, 65, 73, 8, 9, 5)
      this.#createBox(arrayMap, 4, 8, 75, 87, 5, 6, 5)
      this.#createBox(arrayMap, 4, 8, 89, 100, 5, 12, 5)
      this.#createBox(arrayMap, 1, 2, 80, 96, 2, 5, 5)
      this.#createBox(arrayMap, 1, 2, 75, 78, 2, 4, 5)
      this.#createBox(arrayMap, 92, 100, 2, 48, 5, 5, 2)

      const array = [{initX:1, sizeX:3}, {initX:10, sizeX:7}, {initX:18, sizeX:9}, {initX:28, sizeX:8}, {initX:37, sizeX:8}, {initX:46, sizeX:9}, {initX:56, sizeX:8}, {initX:65, sizeX:7}, {initX:73, sizeX:7}, {initX:81, sizeX:10}]
      for(let item of array){
        this.#createBox(arrayMap, item.initX, item.initX+item.sizeX-1, 2, 48, item.sizeX, 5, 5)
      }


      for(let item of [{initY:50, sizeY:19}, {initY:70, sizeY:4}, {initY:75, sizeY:6}, {initY:82, sizeY:6}, {initY:89, sizeY:5}, {initY:95, sizeY:6}]){
        this.#createBox(arrayMap, 10, 16, item.initY, item.initY+item.sizeY-1, 7, item.sizeY, 5)
        this.#createBox(arrayMap, 18, 26, item.initY, item.initY+item.sizeY-1, 9, item.sizeY, 5)
      }

      for(let item of [{initY:50, sizeY:6}, {initY:57, sizeY:6}, {initY:64, sizeY:10}]){
        this.#createBox(arrayMap, 46, 54, item.initY, item.initY+item.sizeY-1, 9, item.sizeY, 5)
        this.#createBox(arrayMap, 56, 63, item.initY, item.initY+item.sizeY-1, 8, item.sizeY, 5)
      }

      for(let item of [{initY:57, sizeY:6}, {initY:64, sizeY:5}, {initY:70, sizeY:4}]){
        this.#createBox(arrayMap, 65, 79, item.initY, item.initY+item.sizeY-1, 7, item.sizeY, 5)
      }
      for(let item of [{initY:50, sizeY:6}, {initY:75, sizeY:9}, {initY:85, sizeY:9}, {initY:95, sizeY:6}]){
        this.#createBox(arrayMap, 65, 79, item.initY, item.initY+item.sizeY-1, 15, item.sizeY, 5)
      }
    },
    '21': (arrayMap) => {
      for(let item of [{initX:10, sizeX:7}, {initX:18, sizeX:9}, {initX:28, sizeX:6}, {initX:35, sizeX:5}, {initX:41, sizeX:6}, {initX:48, sizeX:6}, {initX:55, sizeX:7}]){
        this.#createBox(arrayMap, item.initX, item.initX+item.sizeX-1, 20, 26, item.sizeX, 7, 5)
        this.#createBox(arrayMap, item.initX, item.initX+item.sizeX-1, 28, 31, item.sizeX, 4, 5)
        this.#createBox(arrayMap, item.initX, item.initX+item.sizeX-1, 33, 37, item.sizeX, 5, 5)
        this.#createBox(arrayMap, item.initX, item.initX+item.sizeX-1, 39, 45, item.sizeX, 7, 5)
        this.#createBox(arrayMap, item.initX, item.initX+item.sizeX-1, 47, 54, item.sizeX, 8, 5)
        this.#createBox(arrayMap, item.initX, item.initX+item.sizeX-1, 56, 61, item.sizeX, 6, 5)
        this.#createBox(arrayMap, item.initX, item.initX+item.sizeX-1, 63, 67, item.sizeX, 5, 5)
      }
    },
    '22': (arrayMap) => {
      //ejemplo
      this.#createBox(arrayMap, 2, 30, 2, 6, 5, 5, 4)
    },
    '23': (arrayMap) => {},
    '24': (arrayMap) => {},
    '30': (arrayMap) => {
      for(let item of [{initX:1, sizeX:2}, {initX:3, sizeX:6}, {initX:10, sizeX:5}, {initX:16, sizeX:8}, {initX:25, sizeX:5}, {initX:31, sizeX:8}, {initX:57, sizeX:11}, {initX:69, sizeX:10}, {initX:80, sizeX:13}, {initX:94, sizeX:7}, {initX:1, sizeX:1}]){
        this.#createBox(arrayMap, item.initX, item.initX+item.sizeX-1, 2, 48, item.sizeX, 5, 2)
      }
    },
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
      const newSelected = this.map[selectedIdY-1][selectedIdX -1].toString().includes('s') ? this.map[selectedIdX-1][selectedIdY-1] : `${this.map[selectedIdX-1][selectedIdY-1]}-s`
      console.log('newSelected', newSelected)
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
