export default class TileMap {
  constructor(tileSize, row, column, handleOpen, isModal) {
    this.tileSize = tileSize;
    this.row = row;
    this.column = column;
    this.isModal = !!isModal;
    this.map = isModal || this.createMap();
    this.drawed = false;
    this.handleOpen = handleOpen;
  }

  createMap() {
    const arrayMap = Array.apply(null, Array(100)).map(() =>
      Array.apply(null, Array(100)).map(Number.prototype.valueOf, 0)
    );
    const index = `${this.row}${this.column}`;
    this.setCanvas[index](arrayMap);
    return arrayMap;
  }

  setCanvas = {
    "00": (arrayMap) => {
      // this.#createBox(arrayMap, 2, 30, 2, 6, 5, 5, 5)
      this.#createBox(arrayMap, 32, 41, 2, 18, 10, 5, 5);
      this.#createBox(arrayMap, 32, 41, 26, 48, 10, 5, 5);
      // this.#createBox(arrayMap, 14, 30, 38, 42, 5, 5, 5)
      this.#createBox(arrayMap, 14, 24, 8, 12, 11, 5, 5);
      this.#createBox(arrayMap, 2, 48, 50, 55, 5, 6, 5);
      this.#createBox(arrayMap, 2, 48, 57, 63, 5, 7, 5);
      this.#createBox(arrayMap, 50, 65, 50, 63, 16, 14, 5);
      this.#createBox(arrayMap, 67, 95, 50, 52, 5, 3, 5);
      this.#createBox(arrayMap, 67, 95, 60, 63, 5, 4, 5);
      this.#createBox(arrayMap, 62, 65, 65, 99, 4, 11, 5);
      this.#createBox(arrayMap, 77, 99, 98, 100, 5, 3, 5);
      this.#createBox(arrayMap, 77, 99, 75, 78, 5, 4, 5);
      this.#createBox(arrayMap, 97, 100, 2, 18, 4, 5, 5);
      this.#createBox(arrayMap, 97, 100, 32, 48, 4, 5, 5);
      this.#createBox(arrayMap, 97, 100, 20, 30, 4, 11, 5);
      this.#createBox(arrayMap, 77, 87, 65, 73, 11, 9, 5);

      this.#createBox(arrayMap, 97, 100, 50, 52, 4, 3, 5);
      this.#createBox(arrayMap, 97, 100, 54, 58, 4, 5, 5);
      this.#createBox(arrayMap, 97, 100, 60, 63, 4, 4, 5);

      this.#createBox(arrayMap, 14, 41, 20, 24, 28, 5, 7);
      this.#createBox(arrayMap, 14, 18, 25, 36, 5, 12, 7);
      this.#createBox(arrayMap, 89, 100, 65, 73, 12, 9, 7);

      const arr5x5 = [
        [2, 30, 2, 6],
        [2, 12, 8, 48],
        [26, 30, 8, 18],
        [14, 24, 14, 18],
        [20, 30, 26, 36],
        [14, 30, 38, 42],
        [43, 95, 2, 6],
        [43, 47, 8, 48],
        [61, 95, 8, 18],
        [14, 48, 65, 75],
        [2, 24, 77, 87],
        [38, 60, 77, 87],
        [2, 12, 89, 99],
        [26, 36, 89, 99],
        [50, 60, 89, 99],
        [67, 95, 54, 58],
        [61, 71, 20, 48],
        [26, 30, 44, 48],
        [73, 95, 32, 48],
        [77, 99, 80, 96],
      ];
      for (let item of arr5x5) {
        this.#createBox(arrayMap, item[0], item[1], item[2], item[3], 5, 5, 5);
      }

      const arr11x11 = [
        { initX: 2, initY: 65 },
        { initX: 14, initY: 89 },
        { initX: 26, initY: 77 },
        { initX: 38, initY: 89 },
        { initX: 50, initY: 65 },
      ];
      for (let i = 0; i < arr11x11.length; i++) {
        this.#createBox(
          arrayMap,
          arr11x11[i].initX,
          arr11x11[i].initX + 10,
          arr11x11[i].initY,
          arr11x11[i].initY + 10,
          11,
          11,
          5
        );
      }

      for (let item of [14, 49]) {
        this.#createBox(arrayMap, item, item + 10, 44, 48, 11, 5, 5);
      }
      for (let item of [8, 20, 32]) {
        this.#createBox(arrayMap, 49, 59, item, item + 4, 11, 5, 5);
        this.#createBox(arrayMap, 49, 59, item + 6, item + 10, 5, 5, 5);
      }
      for (let item of [73, 85]) {
        this.#createBox(arrayMap, item, item + 4, 20, 30, 5, 11, 5);
        this.#createBox(arrayMap, item + 6, item + 10, 20, 30, 5, 5, 5);
      }
      for (let item of [
        { initY: 65, sizeY: 9 },
        { initY: 75, sizeY: 10 },
        { initY: 86, sizeY: 11 },
        { initY: 98, sizeY: 3 },
      ]) {
        this.#createBox(
          arrayMap,
          67,
          75,
          item.initY,
          item.initY + item.sizeY - 1,
          9,
          item.sizeY,
          5
        );
      }
    },
    "01": (arrayMap) => {
      //ejemplo
      this.#createBox(arrayMap, 77, 99, 1, 2, 5, 2, 5);
      this.#createBox(arrayMap, 71, 99, 28, 38, 5, 10, 5);
      this.#createBox(arrayMap, 71, 77, 86, 91, 7, 6, 5);
      this.#createBox(arrayMap, 71, 77, 93, 100, 7, 8, 5);
      this.#createBox(arrayMap, 79, 86, 86, 95, 8, 10, 5);
      this.#createBox(arrayMap, 79, 86, 97, 100, 8, 4, 5);
      this.#createBox(arrayMap, 88, 100, 90, 95, 13, 6, 5);
      this.#createBox(arrayMap, 88, 92, 86, 88, 5, 3, 5);
      this.#createBox(arrayMap, 88, 95, 97, 100, 8, 4, 5);
      this.#createBox(arrayMap, 97, 100, 97, 100, 4, 4, 5);
      this.#createBox(arrayMap, 94, 100, 86, 88, 7, 3, 5);
      this.#createBox(arrayMap, 62, 65, 1, 23, 4, 11, 5);
      for (let item of [
        { initY: 99, sizeY: 2 },
        { initY: 86, sizeY: 6 },
        { initY: 73, sizeY: 12 },
        { initY: 47, sizeY: 8 },
        { initY: 64, sizeY: 8 },
      ]) {
        this.#createBox(
          arrayMap,
          2,
          18,
          item.initY,
          item.initY + item.sizeY - 1,
          5,
          item.sizeY,
          5
        );
        this.#createBox(
          arrayMap,
          25,
          59,
          item.initY,
          item.initY + item.sizeY - 1,
          5,
          item.sizeY,
          5
        );
      }

      for (let item of [
        { initY: 56, sizeY: 7 },
        { initY: 64, sizeY: 8 },
        { initY: 73, sizeY: 12 },
        { initY: 86, sizeY: 6 },
        { initY: 93, sizeY: 5 },
        { initY: 99, sizeY: 2 },
      ]) {
        this.#createBox(
          arrayMap,
          61,
          69,
          item.initY,
          item.initY + item.sizeY - 1,
          9,
          item.sizeY,
          5
        );
      }
      /*  */
      this.#createBox(arrayMap, 20, 23, 73, 84, 4, 12, 5);
      this.#createBox(arrayMap, 20, 23, 86, 91, 4, 6, 5);
      this.#createBox(arrayMap, 20, 23, 93, 97, 4, 5, 5);
      this.#createBox(arrayMap, 20, 23, 99, 100, 4, 2, 5);
      this.#createBox(arrayMap, 20, 27, 19, 23, 8, 5, 5);
      this.#createBox(arrayMap, 29, 38, 19, 23, 10, 5, 5);
      this.#createBox(arrayMap, 40, 48, 19, 23, 9, 5, 5);
      this.#createBox(arrayMap, 67, 75, 1, 8, 9, 8, 5);
      this.#createBox(arrayMap, 67, 75, 10, 20, 9, 11, 5);
      this.#createBox(arrayMap, 67, 75, 22, 26, 9, 5, 5);
      this.#createBox(arrayMap, 62, 65, 25, 31, 4, 7, 5);
      this.#createBox(arrayMap, 66, 69, 28, 31, 4, 4, 5);
      this.#createBox(arrayMap, 55, 60, 25, 31, 6, 7, 5);
      this.#createBox(arrayMap, 55, 60, 33, 37, 6, 5, 5);
      this.#createBox(arrayMap, 55, 60, 39, 45, 6, 7, 5);
      this.#createBox(arrayMap, 55, 60, 47, 54, 6, 8, 5);
      this.#createBox(arrayMap, 20, 23, 33, 37, 4, 5, 5);
      this.#createBox(arrayMap, 20, 23, 47, 54, 4, 8, 5);
      this.#createBox(arrayMap, 20, 23, 64, 71, 4, 8, 5);
      this.#createBox(arrayMap, 92, 100, 39, 45, 9, 7, 5);
      this.#createBox(arrayMap, 79, 90, 39, 45, 12, 7, 5);
      for (let elem of [
        { initX: 71, sizeX: 7 },
        { initX: 79, sizeX: 8 },
        { initX: 88, sizeX: 5 },
        { initX: 94, sizeX: 7 },
      ]) {
        for (let item of [
          { initY: 39, sizeY: 7 },
          { initY: 47, sizeY: 8 },
          { initY: 56, sizeY: 7 },
          { initY: 64, sizeY: 8 },
          { initY: 73, sizeY: 12 },
        ]) {
          this.#createBox(
            arrayMap,
            elem.initX,
            elem.initX + elem.sizeX - 1,
            item.initY,
            item.initY + item.sizeY - 1,
            elem.sizeX,
            item.sizeY,
            5
          );
        }
      }

      for (let item of [25, 39, 56]) {
        this.#createBox(arrayMap, 20, 23, item, item + 6, 4, 7, 5);
      }
      for (let item of [
        { initY: 33, sizeY: 5 },
        { initY: 39, sizeY: 7 },
        { initY: 47, sizeY: 8 },
      ]) {
        this.#createBox(
          arrayMap,
          62,
          69,
          item.initY,
          item.initY + item.sizeY - 1,
          8,
          item.sizeY,
          5
        );
      }
      for (let item of [
        { initX: 71, sizeX: 7 },
        { initX: 79, sizeX: 12 },
        { initX: 92, sizeX: 9 },
      ]) {
        this.#createBox(
          arrayMap,
          item.initX,
          item.initX + item.sizeX - 1,
          39,
          45,
          item.sizeX,
          7,
          5
        );
      }

      const arr5x5 = [
        [2, 24, 1, 11],
        [38, 60, 1, 11],
        [14, 48, 13, 17],
        [2, 18, 33, 37],
        [25, 53, 33, 37],
        [2, 18, 93, 97],
        [25, 59, 93, 97],
        [77, 99, 4, 26],
        [14, 18, 19, 23],
      ];
      for (let item of arr5x5) {
        this.#createBox(arrayMap, item[0], item[1], item[2], item[3], 5, 5, 5);
      }

      const arr5x7 = [
        [2, 18, 25, 31],
        [25, 53, 25, 31],
        [2, 18, 39, 45],
        [25, 53, 39, 45],
        [2, 18, 56, 62],
        [25, 59, 56, 62],
      ];
      for (let item of arr5x7) {
        this.#createBox(arrayMap, item[0], item[1], item[2], item[3], 5, 7, 5);
      }

      const arr11x11 = [
        { initX: 2, initY: 13 },
        { initX: 26, initY: 1 },
        { initX: 50, initY: 13 },
      ];
      for (let i = 0; i < arr11x11.length; i++) {
        this.#createBox(
          arrayMap,
          arr11x11[i].initX,
          arr11x11[i].initX + 10,
          arr11x11[i].initY,
          arr11x11[i].initY + 10,
          11,
          11,
          5
        );
      }
    },
    "02": (arrayMap) => {
      this.#createBox(arrayMap, 79, 86, 5, 10, 8, 6, 5);
      this.#createBox(arrayMap, 71, 86, 11, 15, 16, 5, 5);
      this.#createBox(arrayMap, 71, 79, 17, 21, 9, 5, 5);
      this.#createBox(arrayMap, 81, 86, 17, 21, 6, 5, 5);
      this.#createBox(arrayMap, 61, 89, 29, 38, 9, 10, 5);
      this.#createBox(arrayMap, 2, 18, 1, 3, 5, 3, 5);
      this.#createBox(arrayMap, 2, 18, 75, 82, 5, 8, 5);
      this.#createBox(arrayMap, 2, 18, 84, 92, 5, 9, 5);
      this.#createBox(arrayMap, 25, 59, 1, 3, 5, 3, 5);
      this.#createBox(arrayMap, 25, 59, 75, 82, 5, 8, 5);
      this.#createBox(arrayMap, 25, 59, 84, 92, 5, 9, 5);
      this.#createBox(arrayMap, 61, 69, 5, 27, 9, 5, 5);
      this.#createBox(arrayMap, 61, 95, 29, 38, 9, 10, 5);
      this.#createBox(arrayMap, 61, 95, 59, 73, 9, 15, 5);
      this.#createBox(arrayMap, 20, 23, 5, 33, 4, 5, 5);
      this.#createBox(arrayMap, 20, 23, 47, 57, 4, 5, 5);
      this.#createBox(arrayMap, 2, 18, 40, 45, 5, 6, 5);
      this.#createBox(arrayMap, 25, 59, 40, 45, 5, 6, 5);
      this.#createBox(arrayMap, 71, 89, 40, 57, 19, 18, 6);
      this.#createBox(arrayMap, 61, 69, 1, 3, 9, 3, 5);
      this.#createBox(arrayMap, 61, 69, 40, 47, 9, 8, 5);
      this.#createBox(arrayMap, 61, 69, 49, 57, 9, 9, 5);
      this.#createBox(arrayMap, 91, 100, 40, 47, 10, 8, 5);
      this.#createBox(arrayMap, 91, 100, 49, 57, 10, 9, 5);
      this.#createBox(arrayMap, 71, 89, 23, 27, 9, 5, 5);
      this.#createBox(arrayMap, 71, 77, 1, 3, 7, 3, 5);
      this.#createBox(arrayMap, 71, 77, 5, 9, 7, 5, 5);
      this.#createBox(arrayMap, 79, 86, 1, 3, 8, 3, 5);
      this.#createBox(arrayMap, 91, 100, 23, 27, 10, 5, 5);
      this.#createBox(arrayMap, 88, 95, 1, 11, 8, 11, 5);
      this.#createBox(arrayMap, 88, 95, 13, 21, 8, 9, 5);
      this.#createBox(arrayMap, 91, 95, 29, 38, 5, 10, 5);
      this.#createBox(arrayMap, 97, 100, 29, 33, 4, 5, 5);
      this.#createBox(arrayMap, 97, 100, 35, 38, 4, 4, 5);

      for (let item of [
        [2, 18, 5],
        [20, 23, 4],
        [25, 59, 5],
        [61, 69, 9],
        [71, 75, 5],
        [77, 89, 6],
        [91, 95, 5],
        [97, 100, 4],
      ]) {
        this.#createBox(arrayMap, item[0], item[1], 94, 100, item[2], 3, 3);
      }

      for (let item of [
        { initY: 59, sizeY: 4 },
        { initY: 64, sizeY: 5 },
        { initY: 70, sizeY: 4 },
        { initY: 75, sizeY: 8 },
        { initY: 84, sizeY: 9 },
        { initY: 35, sizeY: 4 },
        { initY: 40, sizeY: 6 },
        { initY: 1, sizeY: 3 },
      ]) {
        this.#createBox(
          arrayMap,
          20,
          23,
          item.initY,
          item.initY + item.sizeY - 1,
          4,
          item.sizeY,
          5
        );
      }

      for (let item of [
        { initY: 1, sizeY: 3 },
        { initY: 5, sizeY: 7 },
        { initY: 13, sizeY: 5 },
        { initY: 19, sizeY: 4 },
      ]) {
        this.#createBox(
          arrayMap,
          97,
          100,
          item.initY,
          item.initY + item.sizeY - 1,
          4,
          item.sizeY,
          5
        );
      }

      for (let item of [
        { initY: 59, sizeY: 5 },
        { initY: 65, sizeY: 9 },
        { initY: 75, sizeY: 3 },
        { initY: 79, sizeY: 7 },
        { initY: 87, sizeY: 6 },
      ]) {
        this.#createBox(
          arrayMap,
          91,
          95,
          item.initY,
          item.initY + item.sizeY - 1,
          5,
          item.sizeY,
          5
        );
        this.#createBox(
          arrayMap,
          97,
          100,
          item.initY,
          item.initY + item.sizeY - 1,
          4,
          item.sizeY,
          5
        );
      }

      for (let item of [
        { initX: 61, sizeX: 9 },
        { initX: 71, sizeX: 5 },
        { initX: 77, sizeX: 6 },
        { initX: 84, sizeX: 6 },
      ]) {
        this.#createBox(
          arrayMap,
          item.initX,
          item.initX + item.sizeX - 1,
          75,
          82,
          item.sizeX,
          8,
          5
        );
        this.#createBox(
          arrayMap,
          item.initX,
          item.initX + item.sizeX - 1,
          84,
          92,
          item.sizeX,
          9,
          5
        );
      }

      const arr5x5 = [
        [2, 18, 5, 33],
        [25, 59, 5, 33],
        [2, 18, 47, 57],
        [25, 59, 47, 57],
        [2, 18, 64, 68],
        [25, 59, 64, 68],
      ];
      for (let item of arr5x5) {
        this.#createBox(arrayMap, item[0], item[1], item[2], item[3], 5, 5, 5);
      }

      const arr5x4 = [
        [2, 18, 70, 73],
        [25, 59, 70, 73],
        [2, 18, 35, 38],
        [25, 59, 35, 38],
        [2, 18, 59, 62],
        [25, 59, 59, 62],
      ];
      for (let item of arr5x4) {
        this.#createBox(arrayMap, item[0], item[1], item[2], item[3], 5, 4, 5);
      }
    },
    "03": (arrayMap) => {
      this.#createBox(arrayMap, 68, 70, 79, 89, 3, 5, 3);
      this.#createBox(arrayMap, 70, 70, 72, 77, 1, 6, 3);
      this.#createBox(arrayMap, 69, 70, 91, 93, 2, 3, 3);
      this.#createBox(arrayMap, 69, 70, 95, 99, 2, 5, 3);

      for (let item of [
        [1, 1, 1],
        [3, 7, 5],
        [9, 23, 7],
        [25, 28, 4],
        [30, 36, 7],
        [38, 43, 6],
        [45, 58, 4],
        [60, 64, 5],
        [66, 77, 12],
        [79, 89, 5],
        [91, 93, 3],
        [95, 99, 5],
      ]) {
        this.#createBox(arrayMap, 2, 18, item[0], item[1], 5, item[2], 3);
        this.#createBox(arrayMap, 20, 23, item[0], item[1], 4, item[2], 3);
        this.#createBox(arrayMap, 25, 59, item[0], item[1], 5, item[2], 3);
        this.#createBox(arrayMap, 61, 67, item[0], item[1], 7, item[2], 3);
      }
      for (let item of [
        [1, 1, 1],
        [3, 7, 5],
        [9, 23, 7],
        [25, 28, 4],
        [30, 36, 7],
        [38, 43, 6],
        [45, 58, 4],
        [60, 64, 5],
        [66, 77, 12],
      ]) {
        this.#createBox(arrayMap, 68, 70, item[0], item[1], 2, item[2], 3);
      }

      for (let item of [
        [1, 1, 1],
        [3, 7, 5],
        [9, 23, 7],
        [25, 28, 4],
        [30, 36, 7],
        [38, 43, 6],
        [45, 58, 4],
        [60, 64, 5],
        [66, 70, 5],
        [72, 77, 6],
        [79, 89, 5],
        [91, 93, 3],
        [95, 99, 5],
      ]) {
        this.#createBox(arrayMap, 71, 75, item[0], item[1], 5, item[2], 3);
        this.#createBox(arrayMap, 77, 89, item[0], item[1], 6, item[2], 3);
        this.#createBox(arrayMap, 91, 95, item[0], item[1], 5, item[2], 3);
        this.#createBox(arrayMap, 97, 100, item[0], item[1], 4, item[2], 3);
      }
    },
    "04": (arrayMap) => {
      this.#createBox(arrayMap, 25, 35, 1, 20, 5, 6, 3);
      this.#createBox(arrayMap, 25, 35, 94, 99, 11, 6, 3);

      for (let item of [
        [1, 20, 6],
        [22, 92, 11],
        [94, 99, 6],
      ]) {
        this.#createBox(arrayMap, 2, 6, item[0], item[1], 5, item[2], 3);
        this.#createBox(arrayMap, 55, 59, item[0], item[1], 5, item[2], 3);
      }

      for (let item of [22, 34, 46, 58, 70, 82]) {
        this.#createBox(arrayMap, 25, 35, item, item + 4, 11, 5, 7);
        this.#createBox(arrayMap, 25, 30, item + 6, item + 10, 6, 5, 3);
        this.#createBox(arrayMap, 32, 35, item + 6, item + 10, 4, 5, 3);
      }

      for (let item of [
        [1, 20, 6],
        [22, 92, 5],
        [94, 99, 6],
      ]) {
        this.#createBox(arrayMap, 8, 18, item[0], item[1], 5, item[2], 3);
        this.#createBox(arrayMap, 20, 23, item[0], item[1], 4, item[2], 3);
        this.#createBox(arrayMap, 37, 53, item[0], item[1], 5, item[2], 3);
      }
      for (let item of [
        [1, 13, 7, 6],
        [15, 28, 7, 4],
        [30, 33, 15, 4],
        [35, 45, 15, 5],
        [47, 52, 15, 6],
        [54, 94, 7, 5],
        [96, 99, 7, 4],
      ]) {
        this.#createBox(
          arrayMap,
          61,
          75,
          item[0],
          item[1],
          item[2],
          item[3],
          3
        );
      }

      for (let item of [
        [1, 13, 6],
        [15, 33, 4],
        [35, 45, 5],
        [47, 52, 6],
        [54, 94, 5],
        [96, 99, 4],
      ]) {
        this.#createBox(arrayMap, 77, 89, item[0], item[1], 6, item[2], 3);
        this.#createBox(arrayMap, 91, 95, item[0], item[1], 5, item[2], 3);
        this.#createBox(arrayMap, 97, 100, item[0], item[1], 4, item[2], 3);
      }
    },
    10: (arrayMap) => {
      this.#createBox(arrayMap, 1, 1, 2, 18, 1, 5, 5);
      this.#createBox(arrayMap, 1, 1, 32, 48, 1, 5, 5);
      this.#createBox(arrayMap, 1, 1, 20, 30, 1, 11, 5);
      this.#createBox(arrayMap, 1, 1, 50, 52, 1, 3, 5);
      this.#createBox(arrayMap, 1, 1, 54, 58, 1, 5, 5);
      this.#createBox(arrayMap, 1, 1, 60, 63, 1, 4, 5);

      this.#createBox(arrayMap, 93, 97, 20, 30, 5, 11, 5);
      this.#createBox(arrayMap, 1, 59, 75, 78, 5, 4, 5);
      this.#createBox(arrayMap, 1, 59, 98, 100, 5, 3, 5);
      this.#createBox(arrayMap, 71, 81, 98, 100, 5, 3, 5);
      this.#createBox(arrayMap, 71, 81, 75, 78, 5, 4, 5);
      this.#createBox(arrayMap, 45, 79, 60, 63, 5, 4, 5);
      this.#createBox(arrayMap, 45, 79, 50, 52, 5, 3, 5);
      this.#createBox(arrayMap, 3, 43, 50, 55, 5, 6, 5);
      this.#createBox(arrayMap, 3, 43, 57, 63, 5, 7, 5);
      this.#createBox(arrayMap, 25, 59, 65, 73, 11, 9, 5);
      this.#createBox(arrayMap, 61, 69, 75, 84, 9, 10, 5);
      this.#createBox(arrayMap, 61, 69, 86, 96, 9, 11, 5);
      this.#createBox(arrayMap, 81, 99, 50, 55, 5, 6, 5);
      this.#createBox(arrayMap, 81, 99, 57, 63, 5, 7, 5);
      this.#createBox(arrayMap, 94, 100, 75, 78, 7, 4, 5);
      this.#createBox(arrayMap, 94, 100, 80, 96, 7, 5, 5);
      this.#createBox(arrayMap, 83, 92, 75, 84, 10, 10, 5);
      this.#createBox(arrayMap, 83, 92, 86, 96, 10, 11, 5);
      this.#createBox(arrayMap, 1, 14, 65, 73, 14, 9, 7);
      this.#createBox(arrayMap, 99, 100, 2, 18, 2, 5, 5);
      this.#createBox(arrayMap, 99, 100, 20, 30, 2, 5, 5);
      this.#createBox(arrayMap, 99, 100, 32, 48, 2, 5, 5);
      this.#createBox(arrayMap, 99, 100, 50, 55, 2, 6, 5);
      this.#createBox(arrayMap, 99, 100, 57, 63, 2, 7, 5);
      this.#createBox(arrayMap, 99, 100, 65, 73, 2, 9, 5);
      this.#createBox(arrayMap, 87, 97, 65, 73, 11, 9, 5);
      this.#createBox(arrayMap, 61, 69, 98, 100, 9, 3, 5);
      this.#createBox(arrayMap, 83, 92, 98, 100, 10, 3, 5);
      this.#createBox(arrayMap, 94, 100, 98, 100, 7, 3, 5);

      const arr5x5 = [
        [3, 97, 2, 18],
        [3, 97, 32, 48],
        [1, 59, 80, 84],
        [71, 81, 80, 96],
        [3, 7, 20, 30],
        [45, 79, 54, 58],
        [1, 11, 86, 96],
        [25, 59, 86, 96],
        [71, 81, 80, 96],
      ];
      for (let item of arr5x5) {
        this.#createBox(arrayMap, item[0], item[1], item[2], item[3], 5, 5, 5);
      }

      const arr11x11 = [{ initX: 13, initY: 86 }];
      for (let i = 0; i < arr11x11.length; i++) {
        this.#createBox(
          arrayMap,
          arr11x11[i].initX,
          arr11x11[i].initX + 10,
          arr11x11[i].initY,
          arr11x11[i].initY + 10,
          11,
          11,
          5
        );
      }

      for (let item of [9, 21, 33, 45, 57, 69, 81]) {
        this.#createBox(arrayMap, item, item + 4, 20, 30, 5, 11, 5);
        this.#createBox(arrayMap, item + 6, item + 10, 20, 30, 5, 5, 5);
      }

      for (let item of [
        { initX: 16, sizeX: 8 },
        { initX: 61, sizeX: 9 },
        { initX: 71, sizeX: 15 },
      ]) {
        this.#createBox(
          arrayMap,
          item.initX,
          item.initX + item.sizeX - 1,
          65,
          73,
          item.sizeX,
          9,
          5
        );
      }
    },
    11: (arrayMap) => {
      this.#createBox(arrayMap, 1, 35, 28, 37, 5, 10, 5);
      this.#createBox(arrayMap, 1, 59, 1, 2, 5, 2, 5);
      this.#createBox(arrayMap, 37, 59, 28, 37, 23, 10, 5);
      this.#createBox(arrayMap, 71, 81, 1, 2, 5, 2, 5);
      this.#createBox(arrayMap, 61, 69, 1, 1, 9, 1, 5);
      this.#createBox(arrayMap, 61, 69, 2, 16, 9, 7, 5);
      this.#createBox(arrayMap, 61, 87, 28, 37, 27, 10, 5);
      this.#createBox(arrayMap, 65, 84, 69, 88, 20, 20, 6);
      this.#createBox(arrayMap, 89, 96, 28, 37, 8, 10, 5);
      this.#createBox(arrayMap, 98, 100, 28, 37, 3, 10, 5);
      this.#createBox(arrayMap, 61, 69, 18, 26, 4, 4, 5);
      this.#createBox(arrayMap, 94, 100, 4, 14, 7, 5, 5);
      this.#createBox(arrayMap, 71, 87, 18, 26, 5, 4, 5);
      this.#createBox(arrayMap, 71, 87, 10, 16, 5, 7, 5);
      this.#createBox(arrayMap, 94, 100, 10, 14, 7, 5, 5);
      this.#createBox(arrayMap, 83, 92, 1, 8, 10, 8, 5);
      this.#createBox(arrayMap, 94, 100, 1, 2, 7, 2, 5);
      this.#createBox(arrayMap, 89, 100, 16, 18, 12, 3, 5);
      this.#createBox(arrayMap, 89, 96, 20, 26, 8, 7, 5);
      this.#createBox(arrayMap, 98, 100, 20, 26, 3, 7, 5);
      this.#createBox(arrayMap, 19, 33, 73, 77, 7, 5, 5);
      this.#createBox(arrayMap, 19, 33, 79, 84, 7, 6, 5);
      this.#createBox(arrayMap, 9, 26, 39, 45, 18, 7, 5);
      this.#createBox(arrayMap, 28, 40, 39, 45, 13, 7, 5);
      this.#createBox(arrayMap, 9, 22, 47, 54, 14, 8, 5);
      this.#createBox(arrayMap, 24, 40, 47, 54, 17, 8, 5);
      this.#createBox(arrayMap, 19, 25, 86, 100, 7, 15, 5);
      this.#createBox(arrayMap, 31, 40, 56, 71, 10, 16, 7);
      this.#createBox(arrayMap, 27, 30, 56, 71, 4, 16, 6);
      this.#createBox(arrayMap, 1, 7, 39, 45, 7, 7, 5);
      this.#createBox(arrayMap, 2, 7, 47, 54, 6, 8, 5);
      this.#createBox(arrayMap, 19, 25, 56, 62, 7, 7, 5);
      this.#createBox(arrayMap, 19, 25, 64, 71, 7, 8, 5);
      this.#createBox(arrayMap, 9, 17, 90, 100, 9, 11, 7);
      this.#createBox(arrayMap, 27, 33, 86, 93, 7, 8, 5);
      this.#createBox(arrayMap, 27, 33, 95, 99, 7, 5, 5);
      this.#createBox(arrayMap, 57, 63, 73, 84, 7, 12, 7);
      this.#createBox(arrayMap, 86, 90, 69, 82, 5, 14, 4);
      this.#createBox(arrayMap, 86, 90, 84, 93, 5, 10, 4);
      this.#createBox(arrayMap, 80, 90, 95, 99, 5, 5, 4);
      this.#createBox(arrayMap, 70, 78, 95, 100, 4, 6, 4);
      this.#createBox(arrayMap, 65, 68, 95, 99, 4, 5, 4);
      this.#createBox(arrayMap, 65, 73, 90, 93, 9, 4, 4);
      this.#createBox(arrayMap, 75, 84, 90, 93, 10, 4, 4);
      this.#createBox(arrayMap, 1, 7, 90, 95, 7, 6, 5);
      this.#createBox(arrayMap, 1, 7, 97, 100, 7, 4, 5);

      for (let item of [
        { initX: 65, sizeX: 9 },
        { initX: 75, sizeX: 16 },
        { initX: 92, sizeX: 5 },
        { initX: 98, sizeX: 3 },
      ]) {
        this.#createBox(
          arrayMap,
          item.initX,
          item.initX + item.sizeX - 1,
          63,
          67,
          item.sizeX,
          5,
          5
        );
      }

      for (let item of [
        { initY: 69, sizeY: 7 },
        { initY: 77, sizeY: 6 },
        { initY: 84, sizeY: 5 },
        { initY: 90, sizeY: 4 },
        { initY: 95, sizeY: 5 },
      ]) {
        this.#createBox(
          arrayMap,
          92,
          96,
          item.initY,
          item.initY + item.sizeY - 1,
          5,
          item.sizeY,
          4
        );
        this.#createBox(
          arrayMap,
          98,
          100,
          item.initY,
          item.initY + item.sizeY - 1,
          3,
          item.sizeY,
          4
        );
      }

      for (let item of [
        { initY: 63, sizeY: 9 },
        { initY: 86, sizeY: 8 },
        { initY: 95, sizeY: 5 },
      ]) {
        this.#createBox(
          arrayMap,
          57,
          63,
          item.initY,
          item.initY + item.sizeY - 1,
          7,
          item.sizeY,
          5
        );
      }

      for (let item of [
        { initY: 56, sizeY: 7 },
        { initY: 64, sizeY: 8 },
        { initY: 73, sizeY: 12 },
        { initY: 73, sizeY: 12 },
        { initY: 86, sizeY: 3 },
      ]) {
        this.#createBox(
          arrayMap,
          2,
          7,
          item.initY,
          item.initY + item.sizeY - 1,
          6,
          item.sizeY,
          5
        );
        this.#createBox(
          arrayMap,
          9,
          17,
          item.initY,
          item.initY + item.sizeY - 1,
          9,
          item.sizeY,
          5
        );
      }
      /////////////////////////////////7
      for (let item of [
        { initY: 39, sizeY: 7 },
        { initY: 47, sizeY: 4 },
        { initY: 52, sizeY: 3 },
        { initY: 56, sizeY: 6 },
      ]) {
        this.#createBox(
          arrayMap,
          57,
          63,
          item.initY,
          item.initY + item.sizeY - 1,
          7,
          item.sizeY,
          5
        );
        this.#createBox(
          arrayMap,
          65,
          73,
          item.initY,
          item.initY + item.sizeY - 1,
          9,
          item.sizeY,
          5
        );
        this.#createBox(
          arrayMap,
          75,
          81,
          item.initY,
          item.initY + item.sizeY - 1,
          7,
          item.sizeY,
          5
        );
        this.#createBox(
          arrayMap,
          83,
          90,
          item.initY,
          item.initY + item.sizeY - 1,
          8,
          item.sizeY,
          5
        );
        this.#createBox(
          arrayMap,
          92,
          96,
          item.initY,
          item.initY + item.sizeY - 1,
          5,
          item.sizeY,
          5
        );
        this.#createBox(
          arrayMap,
          98,
          100,
          item.initY,
          item.initY + item.sizeY - 1,
          3,
          item.sizeY,
          5
        );
      }
      /////////////////////////////////////////77777
      for (let item of [
        { initY: 39, sizeY: 7 },
        { initY: 47, sizeY: 8 },
        { initY: 56, sizeY: 6 },
        { initY: 63, sizeY: 9 },
        { initY: 73, sizeY: 5 },
        { initY: 79, sizeY: 6 },
        { initY: 86, sizeY: 8 },
        { initY: 95, sizeY: 5 },
      ]) {
        this.#createBox(
          arrayMap,
          42,
          48,
          item.initY,
          item.initY + item.sizeY - 1,
          7,
          item.sizeY,
          5
        );
        this.#createBox(
          arrayMap,
          50,
          55,
          item.initY,
          item.initY + item.sizeY - 1,
          6,
          item.sizeY,
          5
        );
      }
      ////////////////7777
      for (let item of [
        { initY: 73, sizeY: 5 },
        { initY: 79, sizeY: 6 },
        { initY: 86, sizeY: 8 },
        { initY: 95, sizeY: 5 },
      ]) {
        this.#createBox(
          arrayMap,
          35,
          40,
          item.initY,
          item.initY + item.sizeY - 1,
          6,
          item.sizeY,
          5
        );
      } ///////////////////////

      const arr5x5 = [
        [37, 59, 4, 26],
        [1, 35, 16, 26],
        [13, 23, 4, 14],
        [71, 81, 4, 8],
        [88, 92, 10, 14],
      ];
      for (let item of arr5x5) {
        this.#createBox(arrayMap, item[0], item[1], item[2], item[3], 5, 5, 5);
      }

      const arr11x11 = [
        { initX: 1, initY: 4 },
        { initX: 25, initY: 4 },
      ];
      for (let i = 0; i < arr11x11.length; i++) {
        this.#createBox(
          arrayMap,
          arr11x11[i].initX,
          arr11x11[i].initX + 10,
          arr11x11[i].initY,
          arr11x11[i].initY + 10,
          11,
          11,
          5
        );
      }
    },
    12: (arrayMap) => {
      this.#createBox(arrayMap, 8, 17, 13, 17, 10, 5, 5);
      this.#createBox(arrayMap, 8, 17, 19, 27, 10, 9, 5);

      this.#createBox(arrayMap, 9, 17, 1, 11, 9, 11, 7);
      this.#createBox(arrayMap, 19, 25, 1, 17, 7, 17, 5);
      this.#createBox(arrayMap, 19, 25, 19, 27, 7, 9, 5);

      this.#createBox(arrayMap, 27, 33, 41, 45, 7, 5, 5);
      this.#createBox(arrayMap, 35, 48, 41, 45, 14, 5, 5);
      this.#createBox(arrayMap, 50, 63, 87, 92, 14, 6, 5);
      this.#createBox(arrayMap, 80, 96, 29, 63, 5, 5, 4);
      this.#createBox(arrayMap, 65, 78, 29, 63, 4, 5, 4);
      this.#createBox(arrayMap, 98, 100, 29, 63, 3, 5, 4);
      this.#createBox(arrayMap, 80, 96, 1, 17, 5, 5, 4);
      this.#createBox(arrayMap, 65, 68, 1, 17, 4, 5, 4);
      this.#createBox(arrayMap, 70, 78, 1, 5, 4, 5, 4);
      this.#createBox(arrayMap, 70, 78, 7, 17, 4, 11, 4);
      this.#createBox(arrayMap, 70, 78, 19, 27, 4, 9, 4);

      this.#createBox(arrayMap, 80, 84, 19, 27, 5, 4, 4);
      this.#createBox(arrayMap, 86, 93, 19, 27, 8, 4, 4);
      this.#createBox(arrayMap, 95, 100, 19, 27, 6, 4, 4);
      this.#createBox(arrayMap, 98, 100, 1, 17, 3, 5, 4);

      for (let item of [
        { initY: 29, sizeY: 5 },
        { initY: 35, sizeY: 4 },
        { initY: 40, sizeY: 8 },
        { initY: 49, sizeY: 9 },
        { initY: 59, sizeY: 5 },
        { initY: 65, sizeY: 9 },
        { initY: 75, sizeY: 3 },
        { initY: 79, sizeY: 7 },
        { initY: 87, sizeY: 6 },
      ]) {
        this.#createBox(
          arrayMap,
          1,
          3,
          item.initY,
          item.initY + item.sizeY - 1,
          3,
          item.sizeY,
          5
        );
      }

      for (let item of [
        { initY: 1, sizeY: 3 },
        { initY: 5, sizeY: 7 },
        { initY: 13, sizeY: 5 },
        { initY: 19, sizeY: 9 },
      ]) {
        this.#createBox(
          arrayMap,
          1,
          7,
          item.initY,
          item.initY + item.sizeY - 1,
          7,
          item.sizeY,
          5
        );
      }

      for (let item of [
        { initY: 29, sizeY: 5 },
        { initY: 35, sizeY: 4 },
        { initY: 40, sizeY: 6 },
        { initY: 47, sizeY: 5 },
        { initY: 53, sizeY: 5 },
        { initY: 59, sizeY: 5 },
        { initY: 65, sizeY: 9 },
        { initY: 75, sizeY: 3 },
        { initY: 79, sizeY: 7 },
        { initY: 87, sizeY: 6 },
      ]) {
        this.#createBox(
          arrayMap,
          5,
          11,
          item.initY,
          item.initY + item.sizeY - 1,
          7,
          item.sizeY,
          5
        );
        this.#createBox(
          arrayMap,
          13,
          17,
          item.initY,
          item.initY + item.sizeY - 1,
          5,
          item.sizeY,
          5
        );
        this.#createBox(
          arrayMap,
          19,
          25,
          item.initY,
          item.initY + item.sizeY - 1,
          7,
          item.sizeY,
          5
        );
      }

      for (let item of [
        { initY: 65, sizeY: 4 },
        { initY: 70, sizeY: 4 },
        { initY: 75, sizeY: 3 },
        { initY: 79, sizeY: 7 },
        { initY: 87, sizeY: 6 },
        { initY: 94, sizeY: 3 },
        { initY: 98, sizeY: 3 },
      ]) {
        this.#createBox(
          arrayMap,
          65,
          78,
          item.initY,
          item.initY + item.sizeY - 1,
          4,
          item.sizeY,
          4
        );
        this.#createBox(
          arrayMap,
          80,
          96,
          item.initY,
          item.initY + item.sizeY - 1,
          5,
          item.sizeY,
          4
        );
        this.#createBox(
          arrayMap,
          98,
          100,
          item.initY,
          item.initY + item.sizeY - 1,
          3,
          item.sizeY,
          4
        );
      }

      for (let item of [
        { initX: 1, sizeX: 3 },
        { initX: 5, sizeX: 7 },
        { initX: 13, sizeX: 5 },
        { initX: 19, sizeX: 7 },
        { initX: 27, sizeX: 7 },
        { initX: 35, sizeX: 7 },
        { initX: 43, sizeX: 6 },
        { initX: 50, sizeX: 14 },
      ]) {
        this.#createBox(
          arrayMap,
          item.initX,
          item.initX + item.sizeX - 1,
          94,
          100,
          item.sizeX,
          3,
          3
        );
      }

      for (let item of [
        { initX: 27, sizeX: 7 },
        { initX: 35, sizeX: 14 },
        { initX: 50, sizeX: 6 },
        { initX: 57, sizeX: 7 },
      ]) {
        this.#createBox(
          arrayMap,
          item.initX,
          item.initX + item.sizeX - 1,
          1,
          5,
          item.sizeX,
          5,
          5
        );
      }

      for (let item of [
        [27, 33, 5],
        [35, 39, 5],
        [41, 48, 5],
        [50, 55, 5],
        [57, 63, 5],
        [65, 68, 4],
      ]) {
        this.#createBox(
          arrayMap,
          item[0],
          item[1],
          7,
          17,
          item[1] - item[0] + 1,
          5,
          item[2]
        );
        this.#createBox(
          arrayMap,
          item[0],
          item[1],
          19,
          27,
          item[1] - item[0] + 1,
          4,
          item[2]
        );
        this.#createBox(
          arrayMap,
          item[0],
          item[1],
          29,
          39,
          item[1] - item[0] + 1,
          5,
          item[2]
        );
      }

      for (let item of [
        [47, 63, 5],
        [65, 73, 9],
        [75, 77, 3],
        [79, 85, 7],
        [87, 92, 6],
      ]) {
        this.#createBox(arrayMap, 27, 41, item[0], item[1], 7, item[2], 5);
        this.#createBox(arrayMap, 43, 48, item[0], item[1], 6, item[2], 5);
      }

      for (let item of [
        [41, 63, 5],
        [65, 73, 4],
        [75, 77, 3],
        [79, 85, 7],
      ]) {
        this.#createBox(arrayMap, 50, 55, item[0], item[1], 6, item[2], 5);
        this.#createBox(arrayMap, 57, 63, item[0], item[1], 7, item[2], 5);
      }
    },
    13: (arrayMap) => {
      this.#createBox(arrayMap, 19, 22, 13, 19, 4, 7, 3);
      this.#createBox(arrayMap, 27, 41, 1, 1, 7, 1, 3);
      this.#createBox(arrayMap, 27, 41, 3, 7, 7, 5, 3);
      this.#createBox(arrayMap, 27, 41, 9, 12, 7, 4, 3);

      this.#createBox(arrayMap, 43, 48, 1, 12, 6, 12, 3);
      this.#createBox(arrayMap, 50, 63, 1, 2, 14, 2, 3);
      this.#createBox(arrayMap, 50, 54, 4, 12, 5, 9, 3);
      this.#createBox(arrayMap, 56, 63, 3, 7, 8, 5, 3);
      this.#createBox(arrayMap, 56, 58, 9, 12, 3, 4, 3);
      this.#createBox(arrayMap, 60, 63, 9, 13, 4, 5, 3);

      this.#createBox(arrayMap, 36, 44, 20, 28, 9, 4, 3);
      this.#createBox(arrayMap, 36, 44, 44, 52, 9, 9, 3);
      this.#createBox(arrayMap, 65, 84, 9, 28, 20, 20, 6);
      this.#createBox(arrayMap, 36, 63, 30, 42, 28, 13, 7);
      this.#createBox(arrayMap, 65, 78, 1, 1, 4, 1, 4);
      this.#createBox(arrayMap, 80, 84, 1, 1, 5, 1, 4);
      this.#createBox(arrayMap, 65, 73, 3, 7, 9, 5, 4);
      this.#createBox(arrayMap, 75, 84, 3, 7, 10, 5, 4);
      this.#createBox(arrayMap, 83, 99, 30, 58, 5, 5, 3);
      this.#createBox(arrayMap, 71, 81, 36, 58, 5, 5, 3);
      this.#createBox(arrayMap, 71, 81, 30, 34, 11, 5, 3);
      this.#createBox(arrayMap, 65, 69, 30, 52, 5, 5, 3);

      for (let item of [
        [27, 39, 13],
        [41, 59, 4],
        [61, 65, 5],
        [67, 69, 3],
      ]) {
        this.#createBox(arrayMap, item[0], item[1], 54, 58, item[2], 5, 3);
      }

      for (let item of [
        [1, 1, 1],
        [3, 7, 5],
        [9, 23, 7],
        [25, 28, 4],
        [30, 36, 7],
        [38, 43, 6],
        [45, 58, 4],
        [60, 64, 5],
        [66, 70, 5],
        [72, 77, 6],
        [79, 89, 5],
        [91, 93, 3],
        [95, 99, 5],
      ]) {
        this.#createBox(arrayMap, 1, 3, item[0], item[1], 3, item[2], 3);
        this.#createBox(arrayMap, 5, 11, item[0], item[1], 7, item[2], 3);
        this.#createBox(arrayMap, 13, 17, item[0], item[1], 5, item[2], 3);
      }

      for (let item of [
        [1, 1, 1],
        [3, 7, 5],
        [9, 28, 6],
      ]) {
        this.#createBox(arrayMap, 86, 96, item[0], item[1], 5, item[2], 4);
        this.#createBox(arrayMap, 98, 100, item[0], item[1], 3, item[2], 4);
      }

      for (let item of [
        [60, 70, 5],
        [72, 77, 6],
        [79, 89, 5],
        [91, 93, 3],
        [95, 99, 5],
      ]) {
        this.#createBox(arrayMap, 19, 25, item[0], item[1], 7, item[2], 3);
        this.#createBox(arrayMap, 27, 39, item[0], item[1], 6, item[2], 3);
        this.#createBox(arrayMap, 41, 59, item[0], item[1], 4, item[2], 3);
        this.#createBox(arrayMap, 61, 65, item[0], item[1], 5, item[2], 3);
        this.#createBox(arrayMap, 67, 69, item[0], item[1], 3, item[2], 3);
        this.#createBox(arrayMap, 71, 99, item[0], item[1], 5, item[2], 3);
      }

      for (let item of [
        [1, 1, 1],
        [3, 7, 5],
        [9, 12, 4],
        [20, 28, 4],
        [30, 36, 7],
        [38, 43, 6],
        [45, 58, 4],
      ]) {
        this.#createBox(arrayMap, 19, 25, item[0], item[1], 7, item[2], 3);
      }

      for (let item of [
        [20, 28, 4],
        [30, 36, 7],
        [38, 48, 11],
        [50, 53, 4],
      ]) {
        this.#createBox(arrayMap, 27, 34, item[0], item[1], 8, item[2], 3);
      }

      for (let item of [
        [20, 28, 9],
        [44, 52, 9],
      ]) {
        this.#createBox(arrayMap, 46, 54, item[0], item[1], 9, item[2], 3);
        this.#createBox(arrayMap, 56, 63, item[0], item[1], 8, item[2], 3);
      }

      for (let item of [
        [24, 34, 5],
        [36, 48, 6],
        [50, 54, 5],
        [56, 58, 3],
        [60, 63, 4],
      ]) {
        this.#createBox(arrayMap, item[0], item[1], 14, 18, item[2], 5, 3);
      }
    },
    14: (arrayMap) => {
      for (let item of [
        [1, 13, 6],
        [15, 33, 4],
        [35, 45, 5],
        [47, 52, 6],
        [54, 94, 5],
        [96, 99, 4],
      ]) {
        this.#createBox(arrayMap, 1, 3, item[0], item[1], 3, item[2], 3);
        this.#createBox(arrayMap, 34, 39, item[0], item[1], 6, item[2], 3);
        this.#createBox(arrayMap, 41, 59, item[0], item[1], 4, item[2], 3);
        this.#createBox(arrayMap, 61, 65, item[0], item[1], 5, item[2], 3);
        this.#createBox(arrayMap, 67, 69, item[0], item[1], 3, item[2], 3);
        this.#createBox(arrayMap, 89, 99, item[0], item[1], 5, item[2], 3);
      }

      for (let item of [
        [35, 39],
        [47, 52],
        [60, 64],
        [72, 76],
      ]) {
        this.#createBox(
          arrayMap,
          5,
          17,
          item[0],
          item[1],
          13,
          item[1] - item[0] + 1,
          3
        );
        this.#createBox(
          arrayMap,
          19,
          32,
          item[0],
          item[1],
          14,
          item[1] - item[0] + 1,
          3
        );
      }

      for (let item of [
        [1, 13, 6],
        [15, 33, 4],
        [54, 58, 5],
        [78, 94, 5],
        [96, 99, 4],
      ]) {
        this.#createBox(arrayMap, 5, 11, item[0], item[1], 7, item[2], 3);
        this.#createBox(arrayMap, 13, 17, item[0], item[1], 5, item[2], 3);
        this.#createBox(arrayMap, 19, 25, item[0], item[1], 7, item[2], 3);
        this.#createBox(arrayMap, 27, 32, item[0], item[1], 6, item[2], 3);
      }

      for (let item of [
        [1, 13, 5, 6, 3],
        [15, 33, 5, 4, 3],
        [35, 52, 17, 18, 7],
        [54, 64, 5, 5, 3],
        [66, 82, 17, 17, 7],
        [84, 94, 5, 5, 3],
        [96, 99, 5, 4, 3],
      ]) {
        this.#createBox(
          arrayMap,
          71,
          87,
          item[0],
          item[1],
          item[2],
          item[3],
          item[4]
        );
      }
      for (let [x, y] of [
        [5, 40],
        [26, 40],
        [5, 65],
        [26, 65],
      ]) {
        this.#addRegion(arrayMap, x, y, 7, 7, 3);
      }
      for (let [x, y] of [
        [13, 41],
        [13, 66],
      ]) {
        this.#addRegion(arrayMap, x, y, 12, 5, 3);
      }
    },
    20: (arrayMap) => {
      for (let item of [
        [75, 93, 8, 9],
        [50, 62, 17, 13],
        [64, 68, 17, 5],
        [70, 73, 17, 4],
        [95, 100, 17, 6],
      ]) {
        this.#createBox(
          arrayMap,
          28,
          44,
          item[0],
          item[1],
          item[2],
          item[3],
          5
        );
      }

      for (let item of [
        [2, 18, 5],
        [20, 30, 11],
        [32, 48, 5],
        [50, 55, 6],
        [57, 63, 7],
      ]) {
        this.#createBox(arrayMap, 5, 8, item[0], item[1], 4, item[2], 5);
      }
      this.#createBox(arrayMap, 1, 3, 50, 55, 3, 6, 5);
      this.#createBox(arrayMap, 1, 3, 57, 63, 3, 7, 5);
      this.#createBox(arrayMap, 1, 8, 65, 73, 8, 9, 5);
      this.#createBox(arrayMap, 4, 8, 75, 87, 5, 6, 5);
      this.#createBox(arrayMap, 4, 8, 89, 100, 5, 12, 5);
      this.#createBox(arrayMap, 1, 2, 80, 96, 2, 5, 5);
      this.#createBox(arrayMap, 1, 2, 75, 78, 2, 4, 5);
      this.#createBox(arrayMap, 1, 2, 98, 100, 2, 3, 5);
      this.#createBox(arrayMap, 46, 63, 75, 93, 18, 19, 6);
      this.#createBox(arrayMap, 46, 63, 95, 100, 18, 6, 5);

      for (let item of [
        { initY: 50, sizeY: 13 },
        { initY: 64, sizeY: 5 },
        { initY: 70, sizeY: 4 },
        { initY: 75, sizeY: 6 },
        { initY: 82, sizeY: 5 },
        { initY: 89, sizeY: 5 },
        { initY: 95, sizeY: 6 },
      ]) {
        this.#createBox(
          arrayMap,
          81,
          90,
          item.initY,
          item.initY + item.sizeY - 1,
          10,
          item.sizeY,
          5
        );
      }
      this.#createBox(arrayMap, 92, 100, 2, 48, 4, 5, 2);
      this.#createBox(arrayMap, 92, 100, 50, 68, 4, 9, 2);

      for (let item of [
        { initY: 70, sizeY: 4 },
        { initY: 75, sizeY: 6 },
        { initY: 82, sizeY: 5 },
        { initY: 89, sizeY: 5 },
        { initY: 95, sizeY: 6 },
      ]) {
        this.#createBox(
          arrayMap,
          92,
          100,
          item.initY,
          item.initY + item.sizeY - 1,
          4,
          item.sizeY,
          2
        );
      }

      const array = [
        { initX: 1, sizeX: 3 },
        { initX: 10, sizeX: 7 },
        { initX: 18, sizeX: 9 },
        { initX: 28, sizeX: 8 },
        { initX: 37, sizeX: 8 },
        { initX: 46, sizeX: 9 },
        { initX: 56, sizeX: 8 },
        { initX: 65, sizeX: 7 },
        { initX: 73, sizeX: 7 },
        { initX: 81, sizeX: 10 },
      ];
      for (let item of array) {
        this.#createBox(
          arrayMap,
          item.initX,
          item.initX + item.sizeX - 1,
          2,
          48,
          item.sizeX,
          5,
          5
        );
      }

      for (let item of [
        { initY: 50, sizeY: 19 },
        { initY: 70, sizeY: 4 },
        { initY: 75, sizeY: 6 },
        { initY: 82, sizeY: 6 },
        { initY: 89, sizeY: 5 },
        { initY: 95, sizeY: 6 },
      ]) {
        this.#createBox(
          arrayMap,
          10,
          16,
          item.initY,
          item.initY + item.sizeY - 1,
          7,
          item.sizeY,
          5
        );
        this.#createBox(
          arrayMap,
          18,
          26,
          item.initY,
          item.initY + item.sizeY - 1,
          9,
          item.sizeY,
          5
        );
      }

      for (let item of [
        { initY: 50, sizeY: 6 },
        { initY: 57, sizeY: 6 },
        { initY: 64, sizeY: 10 },
      ]) {
        this.#createBox(
          arrayMap,
          46,
          54,
          item.initY,
          item.initY + item.sizeY - 1,
          9,
          item.sizeY,
          5
        );
        this.#createBox(
          arrayMap,
          56,
          63,
          item.initY,
          item.initY + item.sizeY - 1,
          8,
          item.sizeY,
          5
        );
      }

      for (let item of [
        { initY: 57, sizeY: 6 },
        { initY: 64, sizeY: 5 },
        { initY: 70, sizeY: 4 },
      ]) {
        this.#createBox(
          arrayMap,
          65,
          79,
          item.initY,
          item.initY + item.sizeY - 1,
          7,
          item.sizeY,
          5
        );
      }
      for (let item of [
        { initY: 50, sizeY: 6 },
        { initY: 75, sizeY: 9 },
        { initY: 85, sizeY: 9 },
        { initY: 95, sizeY: 6 },
      ]) {
        this.#createBox(
          arrayMap,
          65,
          79,
          item.initY,
          item.initY + item.sizeY - 1,
          15,
          item.sizeY,
          5
        );
      }
    },
    21: (arrayMap) => {
      this.#createBox(arrayMap, 4, 8, 1, 14, 5, 14, 5);
      this.#createBox(arrayMap, 10, 16, 2, 14, 7, 13, 5);

      this.#createBox(arrayMap, 4, 16, 16, 18, 13, 3, 5);

      this.#createBox(arrayMap, 4, 26, 56, 61, 5, 6, 5);
      this.#createBox(arrayMap, 4, 26, 63, 67, 5, 5, 5);

      this.#createBox(arrayMap, 18, 26, 2, 14, 9, 13, 5);
      this.#createBox(arrayMap, 18, 26, 16, 18, 9, 3, 6);

      this.#createBox(arrayMap, 28, 36, 7, 14, 9, 8, 5);
      this.#createBox(arrayMap, 37, 51, 7, 14, 15, 8, 7);
      this.#createBox(arrayMap, 52, 61, 7, 14, 10, 8, 5);

      this.#createBox(arrayMap, 28, 61, 2, 5, 34, 4, 5);
      this.#createBox(arrayMap, 28, 61, 16, 18, 34, 3, 6);

      this.#createBox(arrayMap, 63, 73, 2, 14, 11, 13, 5);
      this.#createBox(arrayMap, 63, 73, 16, 18, 11, 3, 6);
      this.#createBox(arrayMap, 63, 73, 56, 61, 11, 6, 5);
      this.#createBox(arrayMap, 63, 73, 63, 67, 11, 5, 5);

      this.#createBox(arrayMap, 75, 85, 2, 14, 5, 6, 5);
      this.#createBox(arrayMap, 87, 90, 2, 14, 4, 6, 5);
      this.#createBox(arrayMap, 75, 90, 16, 18, 16, 3, 5);

      this.#createBox(arrayMap, 92, 100, 2, 14, 4, 6, 2);
      this.#createBox(arrayMap, 92, 100, 16, 18, 9, 3, 2);

      for (let item of [
        { initX: 28, sizeX: 6, color: 5 },
        { initX: 35, sizeX: 5, color: 5 },
        { initX: 41, sizeX: 6, color: 5 },
        { initX: 48, sizeX: 6, color: 5 },
        { initX: 55, sizeX: 7, color: 5 },
        { initX: 75, sizeX: 10, color: 5 },
        { initX: 86, sizeX: 5, color: 5 },
        { initX: 92, sizeX: 5, color: 2 },
        { initX: 98, sizeX: 3, color: 2 },
      ]) {
        this.#createBox(
          arrayMap,
          item.initX,
          item.initX + item.sizeX - 1,
          20,
          26,
          item.sizeX,
          7,
          item.color
        );
        this.#createBox(
          arrayMap,
          item.initX,
          item.initX + item.sizeX - 1,
          28,
          31,
          item.sizeX,
          4,
          item.color
        );
        this.#createBox(
          arrayMap,
          item.initX,
          item.initX + item.sizeX - 1,
          33,
          37,
          item.sizeX,
          5,
          item.color
        );
        this.#createBox(
          arrayMap,
          item.initX,
          item.initX + item.sizeX - 1,
          39,
          45,
          item.sizeX,
          7,
          item.color
        );
        this.#createBox(
          arrayMap,
          item.initX,
          item.initX + item.sizeX - 1,
          56,
          61,
          item.sizeX,
          6,
          item.color
        );
        this.#createBox(
          arrayMap,
          item.initX,
          item.initX + item.sizeX - 1,
          63,
          67,
          item.sizeX,
          5,
          item.color
        );
      }

      for (let item of [
        { initY: 1, sizeY: 2 },
        { initY: 4, sizeY: 5 },
        { initY: 10, sizeY: 5 },
        { initY: 16, sizeY: 3 },
        { initY: 20, sizeY: 7 },
        { initY: 28, sizeY: 10 },
        { initY: 39, sizeY: 7 },
        { initY: 47, sizeY: 4 },
        { initY: 52, sizeY: 3 },
        { initY: 56, sizeY: 6 },
        { initY: 63, sizeY: 5 },
      ]) {
        this.#createBox(
          arrayMap,
          1,
          2,
          item.initY,
          item.initY + item.sizeY - 1,
          2,
          item.sizeY,
          5
        );
      }

      for (let item of [
        { initY: 69, sizeY: 7 },
        { initY: 77, sizeY: 6 },
        { initY: 84, sizeY: 5 },
        { initY: 90, sizeY: 4 },
        { initY: 95, sizeY: 5 },
      ]) {
        this.#createBox(
          arrayMap,
          4,
          20,
          item.initY,
          item.initY + item.sizeY - 1,
          5,
          item.sizeY,
          4
        );
        this.#createBox(
          arrayMap,
          1,
          2,
          item.initY,
          item.initY + item.sizeY - 1,
          2,
          item.sizeY,
          4
        );
      }

      for (let item of [
        [4, 14, 5, 5],
        [16, 26, 11, 5],
        [63, 73, 11, 5],
        [75, 84, 10, 5],
        [86, 90, 5, 5],
        [92, 96, 5, 2],
        [98, 100, 3, 2],
      ]) {
        this.#createBox(
          arrayMap,
          item[0],
          item[1],
          47,
          50,
          item[2],
          4,
          item[3]
        );
        this.#createBox(
          arrayMap,
          item[0],
          item[1],
          52,
          54,
          item[2],
          3,
          item[3]
        );
      }

      for (let item of [
        [4, 8, 5],
        [63, 73, 11],
      ]) {
        this.#createBox(arrayMap, item[0], item[1], 20, 26, item[2], 7, 5);
        this.#createBox(arrayMap, item[0], item[1], 28, 37, item[2], 10, 5);
        this.#createBox(arrayMap, item[0], item[1], 39, 45, item[2], 7, 5);
      }

      for (let item of [
        [20, 26],
        [28, 31],
        [33, 37],
        [39, 45],
      ]) {
        this.#createBox(
          arrayMap,
          10,
          16,
          item[0],
          item[1],
          7,
          item[1] - item[0] + 1,
          5
        );
        this.#createBox(
          arrayMap,
          18,
          26,
          item[0],
          item[1],
          9,
          item[1] - item[0] + 1,
          5
        );
      }

      for (let item of [
        [28, 33, 6],
        [35, 39, 5],
        [41, 53, 6],
        [55, 61, 7],
      ]) {
        this.#createBox(arrayMap, item[0], item[1], 47, 54, item[2], 8, 5);
      }

      this.#createBox(arrayMap, 35, 53, 69, 78, 19, 10, 7);

      for (let item of [
        [22, 26, 5],
        [28, 33, 6],
      ]) {
        this.#createBox(arrayMap, item[0], item[1], 69, 71, item[2], 3, 4);
        this.#createBox(arrayMap, item[0], item[1], 73, 78, item[2], 6, 4);
      }

      for (let item of [
        [55, 59, 5],
        [61, 64, 4],
        [66, 70, 5],
        [72, 84, 6],
        [86, 96, 5],
        [98, 100, 3],
      ]) {
        this.#createBox(arrayMap, item[0], item[1], 69, 72, item[2], 4, 4);
        this.#createBox(arrayMap, item[0], item[1], 74, 78, item[2], 5, 4);
      }

      for (let item of [
        [22, 26, 5],
        [28, 33, 6],
        [35, 39, 5],
        [41, 53, 6],
        [55, 59, 5],
        [61, 64, 4],
        [66, 70, 5],
        [72, 84, 6],
        [86, 96, 5],
        [98, 100, 3],
      ]) {
        this.#createBox(arrayMap, item[0], item[1], 80, 82, item[2], 3, 4);
        this.#createBox(arrayMap, item[0], item[1], 84, 88, item[2], 5, 4);
        this.#createBox(arrayMap, item[0], item[1], 90, 93, item[2], 4, 4);
        this.#createBox(arrayMap, item[0], item[1], 95, 99, item[2], 5, 4);
      }
    },
    22: (arrayMap) => {
      //ejemplo
      this.#createBox(arrayMap, 45, 64, 39, 58, 20, 20, 6);
      this.#createBox(arrayMap, 61, 64, 1, 17, 4, 5, 4);
      this.#createBox(arrayMap, 98, 100, 1, 17, 3, 5, 4);
      this.#createBox(arrayMap, 30, 33, 29, 47, 4, 9, 4);
      this.#createBox(arrayMap, 30, 33, 49, 58, 4, 10, 4);
      this.#createBox(arrayMap, 30, 33, 60, 68, 4, 9, 4);
      this.#createBox(arrayMap, 40, 46, 70, 77, 7, 8, 4);
      this.#createBox(arrayMap, 40, 46, 94, 100, 7, 7, 4);
      this.#createBox(arrayMap, 48, 53, 70, 77, 6, 8, 4);
      this.#createBox(arrayMap, 48, 53, 94, 100, 6, 7, 4);

      this.#createBox(arrayMap, 40, 53, 79, 92, 14, 14, 7);

      const arr3x3 = [
        [35, 32, 7],
        [38, 32, 6],
        [41, 32, 7],
        [66, 32, 7],
        [69, 32, 6],
        [72, 32, 7],
        [35, 63, 7],
        [38, 63, 6],
        [41, 63, 7],
        [66, 63, 7],
        [69, 63, 6],
        [72, 63, 7],
      ];
      for (let item of arr3x3) {
        this.#createBox(
          arrayMap,
          item[0],
          item[0] + 2,
          item[1],
          item[1] + 2,
          3,
          3,
          item[2]
        );
      }

      const arr5x5 = [
        [4, 26, 1, 17],
        [35, 39, 1, 17],
        [55, 59, 1, 17],
        [66, 70, 1, 17],
        [86, 96, 1, 17],
      ];
      for (let item of arr5x5) {
        this.#createBox(arrayMap, item[0], item[1], item[2], item[3], 5, 5, 4);
      }

      for (let item of [
        [40, 44, 44, 48],
        [40, 44, 49, 53],
        [65, 69, 44, 48],
        [65, 69, 49, 53],
      ]) {
        this.#createBox(arrayMap, item[0], item[1], item[2], item[3], 5, 5, 6);
      }

      const arr6x5 = [
        [28, 33, 1, 17],
        [41, 53, 1, 17],
        [72, 84, 1, 17],
      ];
      for (let item of arr6x5) {
        this.#createBox(arrayMap, item[0], item[1], item[2], item[3], 6, 5, 4);
      }

      for (let item of [
        [4, 14, 5, 4, 4],
        [16, 33, 18, 9, 7],
        [35, 53, 9, 9, 4],
        [55, 64, 10, 9, 4],
        [66, 84, 9, 9, 4],
        [86, 90, 5, 9, 4],
      ]) {
        this.#createBox(
          arrayMap,
          item[0],
          item[1],
          19,
          27,
          item[2],
          item[3],
          item[4]
        );
      }

      for (let item of [
        [29, 63, 17, 11],
        [65, 73, 17, 9],
        [75, 77, 5, 3],
        [79, 85, 5, 7],
        [87, 92, 5, 6],
        [94, 100, 5, 3],
      ]) {
        this.#createBox(arrayMap, 4, 20, item[0], item[1], item[2], item[3], 4);
      }

      for (let item of [
        [1, 17, 5],
        [19, 27, 4],
        [29, 63, 5],
        [65, 73, 4],
        [75, 77, 3],
        [79, 85, 7],
        [87, 92, 6],
        [94, 100, 3],
      ]) {
        this.#createBox(arrayMap, 1, 2, item[0], item[1], 2, item[2], 4);
      }

      for (let item of [
        [29, 31, 3, 7],
        [35, 37, 3, 7],
        [39, 42, 4, 4],
        [55, 58, 4, 4],
        [60, 62, 3, 7],
        [66, 68, 3, 7],
      ]) {
        this.#createBox(
          arrayMap,
          35,
          43,
          item[0],
          item[1],
          9,
          item[2],
          item[3]
        );
        this.#createBox(
          arrayMap,
          66,
          74,
          item[0],
          item[1],
          9,
          item[2],
          item[3]
        );
      }

      for (let item of [
        [29, 32, 4, 4],
        [34, 38, 5, 6],
        [59, 63, 5, 6],
        [65, 68, 4, 4],
      ]) {
        this.#createBox(
          arrayMap,
          50,
          59,
          item[0],
          item[1],
          10,
          item[2],
          item[3]
        );
      }

      for (let item of [
        [45, 29, 9],
        [61, 29, 9],
        [45, 60, 9],
        [61, 60, 9],
        [35, 44, 10],
        [71, 44, 10],
      ]) {
        this.#createBox(
          arrayMap,
          item[0],
          item[0] + 3,
          item[1],
          item[1] + item[2] - 1,
          4,
          item[2],
          4
        );
      }

      for (let item of [
        [19, 23, 5],
        [25, 47, 11],
        [49, 58, 10],
        [60, 71, 12],
        [73, 89, 5],
        [91, 96, 6],
        [98, 100, 3],
      ]) {
        this.#createBox(arrayMap, 92, 96, item[0], item[1], 5, item[2], 4);
        this.#createBox(arrayMap, 98, 100, item[0], item[1], 3, item[2], 4);
      }

      for (let item of [
        [29, 39, 11],
        [41, 47, 7],
        [49, 57, 9],
        [59, 68, 10],
        [70, 77, 8],
        [79, 85, 7],
        [87, 92, 6],
        [94, 100, 3],
      ]) {
        this.#createBox(arrayMap, 22, 28, item[0], item[1], 7, item[2], 4);
      }

      for (let item of [
        [29, 33, 5],
        [35, 42, 8],
        [44, 47, 4],
        [49, 58, 10],
        [60, 68, 9],
      ]) {
        this.#createBox(arrayMap, 76, 79, item[0], item[1], 4, item[2], 4);
      }

      for (let item of [
        [29, 38, 10],
        [40, 47, 8],
        [49, 56, 8],
        [58, 68, 11],
        [70, 77, 8],
        [79, 85, 7],
        [87, 92, 6],
        [94, 100, 3],
      ]) {
        this.#createBox(arrayMap, 81, 90, item[0], item[1], 10, item[2], 4);
      }

      for (let item of [
        [70, 77, 8],
        [79, 89, 5],
        [91, 96, 6],
        [98, 100, 3],
      ]) {
        this.#createBox(arrayMap, 55, 69, item[0], item[1], 7, item[2], 4);
        this.#createBox(arrayMap, 71, 79, item[0], item[1], 9, item[2], 4);
      }

      for (let item of [
        [70, 77, 8],
        [79, 85, 7],
        [87, 92, 6],
        [94, 100, 3],
      ]) {
        this.#createBox(arrayMap, 30, 38, item[0], item[1], 9, item[2], 4);
      }
    },
    23: (arrayMap) => {
      for (let item of [
        [1, 2, 2],
        [4, 20, 5],
        [22, 28, 7],
        [30, 38, 9],
        [40, 46, 7],
        [48, 53, 6],
        [55, 69, 7],
        [71, 79, 9],
        [81, 90, 10],
        [92, 96, 5],
        [98, 100, 3],
      ]) {
        this.#createBox(arrayMap, item[0], item[1], 1, 1, item[2], 1, 4);
        this.#createBox(arrayMap, item[0], item[1], 3, 7, item[2], 5, 4);
      }

      this.#createBox(arrayMap, 1, 2, 9, 28, 2, 6, 4);
      this.#createBox(arrayMap, 4, 44, 9, 28, 5, 6, 4);
      this.#createBox(arrayMap, 46, 53, 9, 14, 8, 6, 4);
      this.#createBox(arrayMap, 46, 49, 16, 28, 4, 6, 4);
      this.#createBox(arrayMap, 51, 53, 16, 28, 3, 6, 4);

      for (let item of [
        [55, 61, 7],
        [63, 73, 11],
        [75, 85, 5],
      ]) {
        this.#createBox(arrayMap, item[0], item[1], 9, 17, item[2], 9, 4);
        this.#createBox(arrayMap, item[0], item[1], 19, 28, item[2], 10, 4);
      }

      this.#createBox(arrayMap, 87, 96, 9, 20, 10, 12, 4);
      this.#createBox(arrayMap, 98, 100, 9, 20, 3, 12, 4);
      this.#createBox(arrayMap, 87, 91, 22, 28, 5, 7, 4);
      this.#createBox(arrayMap, 93, 100, 22, 28, 8, 7, 4);

      for (let item of [
        [1, 17, 5, 3],
        [19, 53, 5, 1],
        [55, 73, 4, 1],
        [75, 79, 5, 1],
      ]) {
        this.#createBox(
          arrayMap,
          item[0],
          item[1],
          30,
          70,
          item[2],
          5,
          item[3]
        );
        this.#createBox(
          arrayMap,
          item[0],
          item[1],
          72,
          77,
          item[2],
          6,
          item[3]
        );
        this.#createBox(
          arrayMap,
          item[0],
          item[1],
          79,
          89,
          item[2],
          5,
          item[3]
        );
        this.#createBox(
          arrayMap,
          item[0],
          item[1],
          91,
          93,
          item[2],
          3,
          item[3]
        );
      }

      this.#createBox(arrayMap, 81, 91, 30, 40, 11, 5, 1);
      this.#createBox(arrayMap, 81, 91, 42, 44, 11, 3, 1);
      this.#createBox(arrayMap, 81, 85, 46, 52, 5, 7, 1);
      this.#createBox(arrayMap, 81, 85, 54, 70, 5, 5, 1);
      this.#createBox(arrayMap, 81, 85, 72, 77, 5, 6, 1);

      this.#createBox(arrayMap, 93, 100, 30, 44, 8, 15, 1);
      for (let item of [
        [87, 91, 5],
        [93, 100, 8],
      ]) {
        this.#createBox(arrayMap, item[0], item[1], 46, 68, item[2], 7, 1);
        this.#createBox(arrayMap, item[0], item[1], 70, 77, item[2], 8, 1);
      }

      this.#createBox(arrayMap, 1, 17, 95, 99, 5, 5, 3);
      this.#createBox(arrayMap, 19, 23, 95, 99, 5, 5, 1);

      for (let item of [
        [25, 33, 9, 1],
        [35, 44, 10, 1],
        [46, 63, 18, 6],
        [65, 73, 9, 1],
        [75, 79, 5, 1],
      ]) {
        this.#createBox(
          arrayMap,
          item[0],
          item[1],
          95,
          100,
          item[2],
          6,
          item[3]
        );
      }

      this.#createBox(arrayMap, 81, 91, 95, 98, 5, 4, 1);
      this.#createBox(arrayMap, 81, 91, 100, 100, 11, 1, 1);
      this.#createBox(arrayMap, 93, 100, 95, 98, 8, 4, 1);
      this.#createBox(arrayMap, 93, 95, 100, 100, 3, 1, 1);
      this.#createBox(arrayMap, 97, 100, 100, 100, 4, 1, 1);

      for (let item of [
        [81, 91, 5],
        [93, 96, 4],
        [98, 100, 3],
      ]) {
        this.#createBox(arrayMap, item[0], item[1], 79, 89, item[2], 5, 1);
        this.#createBox(arrayMap, item[0], item[1], 91, 93, item[2], 3, 1);
      }
    },
    24: (arrayMap) => {
      this.#createBox(arrayMap, 46, 63, 1, 13, 18, 13, 6);
      this.#createBox(arrayMap, 12, 12, 72, 82, 1, 5, 3);
      this.#createBox(arrayMap, 18, 18, 72, 82, 1, 5, 3);
      this.#createBox(arrayMap, 31, 36, 40, 40, 6, 1, 1);
      this.#createBox(arrayMap, 31, 36, 89, 89, 6, 1, 1);
      this.#createBox(arrayMap, 38, 44, 53, 53, 7, 1, 1);
      this.#createBox(arrayMap, 46, 49, 53, 53, 4, 1, 1);
      this.#createBox(arrayMap, 51, 54, 77, 77, 4, 1, 1);
      this.#createBox(arrayMap, 46, 54, 21, 21, 4, 1, 1);
      this.#createBox(arrayMap, 56, 63, 21, 21, 8, 1, 1);
      this.#createBox(arrayMap, 50, 50, 15, 26, 1, 12, 1);
      this.#createBox(arrayMap, 59, 59, 15, 20, 1, 6, 1);
      this.#createBox(arrayMap, 59, 59, 22, 26, 1, 5, 1);
      this.#createBox(arrayMap, 56, 58, 77, 77, 3, 1, 1);
      this.#createBox(arrayMap, 75, 79, 95, 95, 5, 1, 1);
      for (let item of [
        [25, 33, 9],
        [35, 44, 10],
        [65, 73, 9],
        [75, 79, 5],
      ]) {
        this.#createBox(arrayMap, item[0], item[1], 1, 3, item[2], 3, 1);
        this.#createBox(arrayMap, item[0], item[1], 5, 13, item[2], 9, 1);
      }

      for (let item of [
        [1, 13, 6],
        [15, 33, 4],
        [35, 45, 5],
        [47, 52, 6],
        [54, 70, 5],
        [72, 82, 5],
        [84, 94, 5],
        [96, 99, 4],
      ]) {
        this.#createBox(arrayMap, 1, 17, item[0], item[1], 5, item[2], 3);
        this.#createBox(arrayMap, 19, 23, item[0], item[1], 5, item[2], 1);
      }

      for (let item of [
        [15, 20, 6],
        [22, 26, 5],
        [28, 33, 6],
        [35, 45, 5],
        [47, 52, 6],
        [54, 94, 5],
        [96, 99, 4],
      ]) {
        this.#createBox(arrayMap, 25, 29, item[0], item[1], 5, item[2], 1);
        this.#createBox(arrayMap, 31, 36, item[0], item[1], 6, item[2], 1);
        this.#createBox(arrayMap, 38, 44, item[0], item[1], 7, item[2], 1);
      }
      for (let item of [
        [15, 20, 6],
        [22, 26, 5],
        [28, 33, 6],
        [35, 45, 5],
        [47, 52, 6],
        [54, 94, 5],
        [96, 99, 4],
      ]) {
        this.#createBox(arrayMap, 46, 54, item[0], item[1], 4, item[2], 1);
        this.#createBox(arrayMap, 56, 58, item[0], item[1], 3, item[2], 1);
        this.#createBox(arrayMap, 60, 73, item[0], item[1], 4, item[2], 1);
        this.#createBox(arrayMap, 75, 79, item[0], item[1], 5, item[2], 1);
      }
      this.#createBox(arrayMap, 81, 100, 96, 99, 20, 4, 1);
      this.#createBox(arrayMap, 81, 98, 15, 23, 18, 9, 1);
      this.#createBox(arrayMap, 81, 98, 25, 53, 18, 5, 1);
      this.#createBox(arrayMap, 81, 91, 1, 9, 11, 9, 1);
      this.#createBox(arrayMap, 93, 99, 1, 9, 3, 4, 1);
      this.#createBox(arrayMap, 96, 96, 6, 9, 1, 4, 1);
      this.#createBox(arrayMap, 81, 95, 11, 13, 15, 3, 1);
      this.#createBox(arrayMap, 97, 99, 11, 13, 3, 3, 1);
      for (let item of [
        [55, 61, 7],
        [63, 74, 12],
        [76, 85, 10],
        [87, 94, 8],
      ]) {
        this.#createBox(arrayMap, 81, 89, item[0], item[1], 9, item[2], 1);
      }
      for (let item of [
        [55, 61, 7],
        [63, 68, 6],
        [70, 74, 5],
        [76, 94, 19],
      ]) {
        this.#createBox(arrayMap, 91, 98, item[0], item[1], 8, item[2], 1);
      }

      for (let item of [
        [1, 9, 4],
        [11, 13, 3],
        [15, 23, 9],
        [25, 89, 5],
        [91, 94, 4],
      ]) {
        this.#createBox(arrayMap, 100, 100, item[0], item[1], 1, item[2], 1);
      }
    },
    30: (arrayMap) => {
      for (let item of [
        { initX: 1, sizeX: 2 },
        { initX: 3, sizeX: 6 },
        { initX: 10, sizeX: 5 },
        { initX: 16, sizeX: 8 },
        { initX: 25, sizeX: 5 },
        { initX: 31, sizeX: 8 },
        { initX: 57, sizeX: 11 },
        { initX: 69, sizeX: 10 },
        { initX: 80, sizeX: 13 },
        { initX: 94, sizeX: 7 },
        { initX: 1, sizeX: 1 },
      ]) {
        this.#createBox(
          arrayMap,
          item.initX,
          item.initX + item.sizeX - 1,
          2,
          48,
          item.sizeX,
          5,
          2
        );
        this.#createBox(
          arrayMap,
          item.initX,
          item.initX + item.sizeX - 1,
          50,
          68,
          item.sizeX,
          9,
          2
        );
        this.#createBox(
          arrayMap,
          item.initX,
          item.initX + item.sizeX - 1,
          70,
          73,
          item.sizeX,
          4,
          2
        );
        this.#createBox(
          arrayMap,
          item.initX,
          item.initX + item.sizeX - 1,
          75,
          80,
          item.sizeX,
          6,
          2
        );
        this.#createBox(
          arrayMap,
          item.initX,
          item.initX + item.sizeX - 1,
          82,
          86,
          item.sizeX,
          5,
          2
        );
        this.#createBox(
          arrayMap,
          item.initX,
          item.initX + item.sizeX - 1,
          89,
          93,
          item.sizeX,
          5,
          2
        );
        this.#createBox(
          arrayMap,
          item.initX,
          item.initX + item.sizeX - 1,
          95,
          100,
          item.sizeX,
          6,
          2
        );
      }

      for (let item of [
        [2, 30, 5, 2],
        [32, 42, 11, 7],
        [44, 48, 5, 2],
        [50, 68, 9, 2],
        [70, 73, 4, 2],
        [75, 80, 6, 2],
        [82, 86, 5, 2],
        [89, 93, 5, 2],
        [95, 100, 6, 2],
      ]) {
        this.#createBox(
          arrayMap,
          40,
          55,
          item[0],
          item[1],
          16,
          item[2],
          item[3]
        );
      }
    },
    31: (arrayMap) => {
      for (let item of [
        [20, 26, 7, 2],
        [28, 31, 4, 2],
        [33, 37, 5, 2],
        [39, 45, 7, 2],
        [47, 50, 4, 2],
        [52, 54, 3, 2],
        [56, 61, 6, 2],
        [63, 67, 5, 2],
        [69, 72, 4, 4],
        [74, 78, 5, 4],
        [80, 82, 3, 4],
        [84, 88, 5, 4],
        [90, 93, 4, 4],
        [95, 99, 5, 4],
      ]) {
        this.#createBox(arrayMap, 1, 2, item[0], item[1], 2, item[2], item[3]);
        this.#createBox(arrayMap, 4, 14, item[0], item[1], 5, item[2], item[3]);
      }

      for (let item of [
        [2, 7, 6, 2],
        [9, 16, 8, 2],
        [18, 26, 9, 2],
        [28, 31, 4, 2],
        [33, 37, 5, 2],
        [39, 45, 7, 2],
        [47, 50, 4, 2],
        [52, 54, 3, 2],
        [56, 61, 6, 2],
        [63, 67, 5, 2],
        [69, 72, 4, 4],
        [74, 82, 9, 4],
        [84, 88, 5, 4],
        [90, 93, 4, 4],
        [95, 99, 5, 4],
      ]) {
        this.#createBox(
          arrayMap,
          16,
          23,
          item[0],
          item[1],
          8,
          item[2],
          item[3]
        );
      }

      for (let item of [
        [2, 7, 6, 2],
        [9, 16, 8, 2],
        [18, 26, 9, 2],
        [28, 31, 4, 2],
        [33, 37, 5, 2],
        [39, 45, 7, 2],
        [47, 50, 4, 2],
        [52, 54, 3, 2],
        [56, 61, 6, 2],
      ]) {
        this.#createBox(
          arrayMap,
          25,
          29,
          item[0],
          item[1],
          5,
          item[2],
          item[3]
        );
      }

      this.#createBox(arrayMap, 25, 44, 69, 88, 20, 20, 6);
      this.#createBox(arrayMap, 25, 44, 90, 93, 20, 4, 4);
      this.#createBox(arrayMap, 25, 34, 95, 99, 10, 5, 4);
      this.#createBox(arrayMap, 36, 44, 95, 99, 9, 5, 4);

      this.#createBox(arrayMap, 46, 53, 69, 88, 8, 20, 2);
      this.#createBox(arrayMap, 46, 50, 90, 93, 5, 4, 2);
      this.#createBox(arrayMap, 46, 50, 95, 100, 5, 6, 2);

      this.#createBox(arrayMap, 55, 58, 69, 88, 4, 6, 2);
      this.#createBox(arrayMap, 60, 100, 69, 88, 5, 6, 2);

      this.#createBox(arrayMap, 1, 1, 2, 14, 1, 6, 2);
      this.#createBox(arrayMap, 3, 8, 2, 14, 6, 6, 2);
      this.#createBox(arrayMap, 1, 8, 16, 18, 8, 3, 2);
      this.#createBox(arrayMap, 10, 14, 2, 14, 5, 6, 2);
      this.#createBox(arrayMap, 10, 14, 15, 19, 5, 2, 2);
      this.#createBox(arrayMap, 46, 55, 1, 7, 10, 7, 2);
      this.#createBox(arrayMap, 46, 56, 9, 16, 11, 8, 2);
      this.#createBox(arrayMap, 46, 54, 18, 31, 9, 14, 2);
      this.#createBox(arrayMap, 56, 67, 18, 31, 12, 14, 2);
      this.#createBox(arrayMap, 69, 83, 18, 24, 15, 7, 2);
      this.#createBox(arrayMap, 69, 76, 26, 31, 8, 6, 2);
      this.#createBox(arrayMap, 78, 83, 26, 31, 6, 6, 2);

      for (let item of [
        [2, 7, 6],
        [9, 16, 8],
        [18, 26, 9],
        [28, 31, 4],
        [33, 37, 5],
        [39, 45, 7],
        [47, 54, 8],
        [56, 61, 6],
      ]) {
        this.#createBox(arrayMap, 31, 38, item[0], item[1], 8, item[2], 2);
        this.#createBox(arrayMap, 40, 44, item[0], item[1], 5, item[2], 2);
      }

      for (let item of [
        [52, 56, 5],
        [58, 64, 7],
        [66, 100, 5],
      ]) {
        this.#createBox(arrayMap, item[0], item[1], 95, 99, item[2], 5, 2);
        this.#createBox(arrayMap, item[0], item[1], 90, 93, item[2], 4, 2);
      }

      for (let item of [
        [25, 34, 10],
        [36, 44, 9],
        [46, 53, 8],
        [55, 58, 4],
        [60, 76, 5],
        [78, 83, 6],
        [85, 92, 8],
        [94, 100, 7],
      ]) {
        this.#createBox(arrayMap, item[0], item[1], 63, 67, item[2], 5, 2);
      }
      for (let item of [
        [1, 5],
        [7, 14],
        [16, 24],
        [26, 31],
        [33, 37],
        [39, 45],
        [47, 54],
        [56, 61],
      ]) {
        this.#createBox(
          arrayMap,
          94,
          100,
          item[0],
          item[1],
          7,
          item[1] - item[0] + 1,
          2
        );
      }

      for (let item of [
        [17, 24],
        [26, 31],
        [33, 37],
        [39, 45],
        [47, 61],
      ]) {
        this.#createBox(
          arrayMap,
          85,
          92,
          item[0],
          item[1],
          8,
          item[1] - item[0] + 1,
          2
        );
      }

      for (let item of [
        [57, 67],
        [69, 78],
        [80, 92],
      ]) {
        this.#createBox(
          arrayMap,
          item[0],
          item[1],
          1,
          5,
          item[1] - item[0] + 1,
          5,
          2
        );
        this.#createBox(
          arrayMap,
          item[0],
          item[1],
          7,
          16,
          item[1] - item[0] + 1,
          10,
          2
        );
      }

      for (let item of [
        [46, 50, 5],
        [52, 58, 7],
        [60, 76, 8],
        [78, 83, 6],
      ]) {
        this.#createBox(arrayMap, item[0], item[1], 33, 37, item[2], 5, 2);
      }

      for (let item of [
        [39, 45],
        [47, 54],
        [56, 61],
      ]) {
        this.#createBox(
          arrayMap,
          46,
          58,
          item[0],
          item[1],
          13,
          item[1] - item[0] + 1,
          2
        );
        this.#createBox(
          arrayMap,
          78,
          83,
          item[0],
          item[1],
          6,
          item[1] - item[0] + 1,
          2
        );
      }
      this.#createBox(arrayMap, 60, 76, 39, 54, 17, 16, 7);
      this.#createBox(arrayMap, 60, 76, 56, 61, 17, 6, 2);
    },
    32: (arrayMap) => {
      for (let item of [
        [1, 23, 5],
        [85, 89, 5],
        [91, 96, 6],
        [98, 100, 3],
      ]) {
        this.#createBox(arrayMap, 1, 2, item[0], item[1], 2, item[2], 4);
        this.#createBox(arrayMap, 4, 14, item[0], item[1], 5, item[2], 4);
      }

      for (let item of [
        [25, 47, 11],
        [49, 58, 10],
        [60, 71, 12],
        [73, 83, 5],
      ]) {
        this.#createBox(arrayMap, 1, 14, item[0], item[1], 14, item[2], 4);
      }

      for (let item of [
        [1, 53, 5],
        [55, 58, 4],
        [60, 65, 6],
        [67, 89, 5],
        [91, 96, 6],
        [98, 100, 3],
      ]) {
        this.#createBox(arrayMap, 16, 23, item[0], item[1], 8, item[2], 4);
        this.#createBox(arrayMap, 25, 34, item[0], item[1], 10, item[2], 4);
        this.#createBox(arrayMap, 36, 44, item[0], item[1], 9, item[2], 4);
      }

      for (let item of [
        [1, 47, 5, 2],
        [49, 53, 5, 1],
        [55, 58, 4, 1],
        [60, 65, 6, 1],
        [67, 83, 5, 1],
        [85, 92, 8, 1],
      ]) {
        this.#createBox(
          arrayMap,
          46,
          56,
          item[0],
          item[1],
          5,
          item[2],
          item[3]
        );
        this.#createBox(
          arrayMap,
          58,
          64,
          item[0],
          item[1],
          7,
          item[2],
          item[3]
        );
        this.#createBox(
          arrayMap,
          66,
          100,
          item[0],
          item[1],
          5,
          item[2],
          item[3]
        );
      }

      this.#createBox(arrayMap, 46, 62, 94, 99, 5, 6, 1);
      this.#createBox(arrayMap, 63, 70, 94, 100, 8, 7, 1);
      this.#createBox(arrayMap, 72, 78, 94, 100, 7, 7, 1);
      this.#createBox(arrayMap, 79, 88, 94, 99, 10, 6, 1);
      this.#createBox(arrayMap, 90, 100, 94, 99, 5, 6, 1);
    },
    33: (arrayMap) => {
      this.#createBox(arrayMap, 25, 44, 9, 28, 20, 20, 6);
      this.#createBox(arrayMap, 1, 14, 9, 13, 14, 5, 4);
      this.#createBox(arrayMap, 16, 23, 9, 13, 8, 5, 4);
      this.#createBox(arrayMap, 1, 8, 14, 20, 8, 7, 4);
      this.#createBox(arrayMap, 1, 8, 22, 28, 8, 7, 4);
      this.#createBox(arrayMap, 10, 23, 22, 28, 14, 7, 4);
      this.#createBox(arrayMap, 10, 23, 15, 20, 14, 6, 4);
      this.#createBox(arrayMap, 1, 2, 100, 100, 2, 1, 1);
      this.#createBox(arrayMap, 4, 13, 100, 100, 10, 1, 1);

      for (let item of [
        [1, 2, 2],
        [4, 14, 5],
        [16, 23, 8],
        [36, 44, 9],
      ]) {
        this.#createBox(arrayMap, item[0], item[1], 1, 1, item[2], 1, 4);
        this.#createBox(arrayMap, item[0], item[1], 3, 7, item[2], 5, 4);
      }

      for (let item of [
        [15, 34, 6],
        [36, 40, 5],
        [42, 45, 4],
      ]) {
        this.#createBox(arrayMap, item[0], item[1], 79, 89, item[2], 5, 1);
        this.#createBox(arrayMap, item[0], item[1], 91, 93, item[2], 3, 1);
      }

      for (let item of [
        [25, 34, 4],
        [46, 56, 7],
        [58, 61, 1],
        [63, 70, 1],
        [72, 78, 1],
        [80, 88, 1],
      ]) {
        this.#createBox(
          arrayMap,
          item[0],
          item[1],
          1,
          7,
          item[1] - item[0] + 1,
          7,
          item[2]
        );
      }

      for (let item of [
        [1, 7, 5, 7],
        [9, 31, 5, 5],
        [33, 61, 5, 4],
        [63, 65, 11, 3],
        [67, 72, 5, 6],
        [74, 77, 11, 4],
      ]) {
        this.#createBox(
          arrayMap,
          90,
          100,
          item[0],
          item[1],
          item[2],
          item[3],
          1
        );
      }

      for (let item of [
        [1, 2],
        [4, 13],
        [15, 27],
        [42, 51],
      ]) {
        this.#createBox(
          arrayMap,
          item[0],
          item[1],
          46,
          68,
          item[1] - item[0] + 1,
          7,
          1
        );
        this.#createBox(
          arrayMap,
          item[0],
          item[1],
          70,
          77,
          item[1] - item[0] + 1,
          8,
          1
        );
      }

      for (let item of [
        [1, 2],
        [4, 7],
        [9, 13],
      ]) {
        this.#createBox(
          arrayMap,
          item[0],
          item[1],
          79,
          89,
          item[1] - item[0] + 1,
          5,
          1
        );
        this.#createBox(
          arrayMap,
          item[0],
          item[1],
          91,
          93,
          item[1] - item[0] + 1,
          3,
          1
        );
        this.#createBox(
          arrayMap,
          item[0],
          item[1],
          95,
          98,
          item[1] - item[0] + 1,
          4,
          1
        );
      }

      for (let item of [
        [46, 46, 1],
        [47, 61, 7],
        [63, 70, 8],
        [72, 78, 7],
      ]) {
        this.#createBox(arrayMap, item[0], item[1], 9, 13, item[2], 5, 1);
        this.#createBox(arrayMap, item[0], item[1], 15, 21, item[2], 7, 1);
        this.#createBox(arrayMap, item[0], item[1], 23, 28, item[2], 6, 1);
      }

      for (let item of [
        [1, 2, 15],
        [4, 8, 7],
        [10, 13, 7],
        [56, 61, 7],
        [63, 70, 15],
        [72, 88, 7],
      ]) {
        this.#createBox(
          arrayMap,
          item[0],
          item[1],
          30,
          44,
          item[1] - item[0] + 1,
          item[2],
          1
        );
      }
      this.#createBox(arrayMap, 15, 54, 30, 44, 40, 15, 7);
      this.#createBox(arrayMap, 29, 40, 46, 77, 12, 32, 6);
      this.#createBox(arrayMap, 15, 20, 95, 100, 6, 6, 1);
      this.#createBox(arrayMap, 22, 27, 95, 99, 6, 5, 1);
      this.#createBox(arrayMap, 29, 99, 95, 99, 5, 5, 1);
      this.#createBox(arrayMap, 59, 93, 91, 93, 17, 3, 1);
      this.#createBox(arrayMap, 59, 93, 84, 89, 8, 6, 1);
      this.#createBox(arrayMap, 59, 93, 79, 82, 17, 4, 1);
      this.#createBox(arrayMap, 47, 57, 79, 86, 11, 8, 1);
      this.#createBox(arrayMap, 47, 57, 88, 93, 11, 6, 1);
      this.#createBox(arrayMap, 9, 9, 38, 44, 1, 7, 1);
      this.#createBox(arrayMap, 80, 88, 9, 22, 9, 14, 7);
      this.#createBox(arrayMap, 80, 88, 23, 28, 9, 6, 1);
      this.#createBox(arrayMap, 53, 61, 52, 52, 9, 1, 1);
      this.#createBox(arrayMap, 95, 100, 79, 82, 6, 4, 1);
      this.#createBox(arrayMap, 95, 100, 84, 89, 6, 6, 1);
      this.#createBox(arrayMap, 95, 100, 91, 93, 6, 3, 1);
      this.#createBox(arrayMap, 72, 78, 62, 62, 7, 1, 1);

      for (let item of [
        [46, 51],
        [53, 60],
        [62, 68],
        [70, 77],
      ]) {
        this.#createBox(
          arrayMap,
          53,
          53,
          item[0],
          item[1],
          1,
          item[1] - item[0] + 1,
          1
        );
        this.#createBox(
          arrayMap,
          54,
          70,
          item[0],
          item[1],
          8,
          item[1] - item[0] + 1,
          1
        );
      }

      for (let item of [
        [46, 51, 15],
        [53, 61, 15],
        [63, 68, 7],
        [70, 77, 7],
      ]) {
        this.#createBox(
          arrayMap,
          72,
          86,
          item[0],
          item[1],
          item[2],
          item[1] - item[0] + 1,
          1
        );
        this.#createBox(
          arrayMap,
          87,
          88,
          item[0],
          item[1],
          2,
          item[1] - item[0] + 1,
          1
        );
      }
    },
    34: (arrayMap) => {
      this.#createBox(arrayMap, 18, 21, 15, 17, 4, 3, 1);
      this.#createBox(arrayMap, 18, 21, 19, 89, 4, 5, 1);
      this.#createBox(arrayMap, 18, 21, 91, 99, 4, 4, 1);
      this.#createBox(arrayMap, 1, 2, 1, 9, 2, 4, 1);
      this.#createBox(arrayMap, 4, 8, 1, 9, 5, 4, 1);
      this.#createBox(arrayMap, 10, 13, 1, 9, 4, 4, 1);
      this.#createBox(arrayMap, 1, 2, 11, 13, 2, 3, 1);
      this.#createBox(arrayMap, 4, 13, 11, 13, 10, 3, 1);
      this.#createBox(arrayMap, 9, 9, 1, 4, 1, 4, 1);
      this.#createBox(arrayMap, 15, 20, 1, 13, 6, 13, 1);
      this.#createBox(arrayMap, 64, 64, 55, 65, 1, 5, 1);
      this.#createBox(arrayMap, 88, 88, 55, 65, 1, 5, 1);
      this.#createBox(arrayMap, 76, 76, 37, 47, 1, 5, 1);
      this.#createBox(arrayMap, 71, 81, 42, 42, 11, 1, 1);
      this.#createBox(arrayMap, 59, 69, 60, 60, 11, 1, 1);
      this.#createBox(arrayMap, 83, 93, 60, 60, 11, 1, 1);
      this.#createBox(arrayMap, 35, 45, 85, 89, 5, 5, 1);
      this.#createBox(arrayMap, 53, 99, 85, 89, 5, 5, 1);
      this.#createBox(arrayMap, 53, 99, 91, 94, 5, 4, 1);
      this.#createBox(arrayMap, 35, 45, 91, 94, 11, 4, 1);
      this.#createBox(arrayMap, 35, 99, 96, 99, 5, 4, 1);

      this.#createBox(arrayMap, 94, 94, 91, 94, 1, 4, 1);
      this.#createBox(arrayMap, 76, 76, 91, 94, 1, 4, 1);
      this.#createBox(arrayMap, 58, 58, 91, 94, 1, 4, 1);

      this.#createBox(arrayMap, 83, 87, 73, 83, 5, 5, 1);
      this.#createBox(arrayMap, 65, 69, 73, 83, 5, 5, 1);

      for (let item of [
        [15, 23, 15, 9],
        [25, 89, 7, 5],
        [91, 94, 7, 4],
        [96, 99, 15, 4],
      ]) {
        this.#createBox(arrayMap, 1, 15, item[0], item[1], item[2], item[3], 1);
        this.#createBox(arrayMap, 16, 16, item[0], item[1], 1, item[3], 1);
      }

      for (let item of [
        [35, 1],
        [35, 13],
        [35, 25],
        [35, 37],
        [35, 49],
        [35, 61],
        [35, 73],
        [53, 1],
        [53, 13],
        [53, 73],
        [71, 1],
        [71, 13],
        [71, 73],
        [89, 1],
        [89, 13],
        [89, 73],
      ]) {
        this.#createBox(
          arrayMap,
          item[0],
          item[0] + 10,
          item[1],
          item[1] + 4,
          5,
          5,
          1
        );
        this.#createBox(
          arrayMap,
          item[0],
          item[0] + 10,
          item[1] + 6,
          item[1] + 10,
          11,
          5,
          1
        );
      }

      for (let item of [
        [22, 27],
        [29, 33],
        [47, 51],
      ]) {
        this.#createBox(
          arrayMap,
          item[0],
          item[1],
          1,
          89,
          item[1] - item[0] + 1,
          5,
          1
        );
        this.#createBox(
          arrayMap,
          item[0],
          item[1],
          91,
          99,
          item[1] - item[0] + 1,
          4,
          1
        );
      }

      for (let item of [
        [53, 99, 25, 71],
        [65, 69, 1, 23],
        [83, 87, 1, 23],
      ]) {
        this.#createBox(arrayMap, item[0], item[1], item[2], item[3], 5, 5, 1);
      }
    },
    40: (arrayMap) => {
      this.#createBox(arrayMap, 17, 30, 50, 68, 14, 9, 2);
      this.#createBox(arrayMap, 17, 30, 70, 73, 14, 4, 2);
      this.#createBox(arrayMap, 32, 42, 50, 68, 11, 9, 2);
      this.#createBox(arrayMap, 32, 42, 70, 73, 11, 4, 2);
      this.#createBox(arrayMap, 20, 42, 74, 80, 11, 7, 2);
      this.#createBox(arrayMap, 20, 42, 82, 86, 11, 5, 2);
      this.#createBox(arrayMap, 20, 42, 89, 99, 23, 11, 7);
      this.#createBox(arrayMap, 71, 87, 2, 6, 5, 5, 2);
      this.#createBox(arrayMap, 71, 87, 8, 18, 17, 11, 2);
      this.#createBox(arrayMap, 71, 75, 20, 48, 5, 5, 2);

      for (let item of [
        [20, 24, 11],
        [26, 30, 5],
        [32, 36, 11],
        [38, 42, 5],
        [44, 48, 11],
      ]) {
        this.#createBox(arrayMap, 77, 87, item[0], item[1], item[2], 5, 2);
      }

      for (let item of [
        [2, 48, 5],
        [50, 68, 9],
        [70, 73, 4],
      ]) {
        this.#createBox(arrayMap, 1, 4, item[0], item[1], 4, item[2], 2);
        this.#createBox(arrayMap, 6, 15, item[0], item[1], 10, item[2], 2);
      }

      for (let item of [
        [17, 28, 12],
        [30, 40, 5],
        [54, 58, 5],
        [60, 69, 10],
        [89, 99, 5],
      ]) {
        this.#createBox(arrayMap, item[0], item[1], 2, 48, item[2], 5, 2);
      }

      for (let item of [
        [2, 6, 5],
        [8, 12, 11],
        [14, 18, 5],
        [20, 24, 11],
        [26, 30, 5],
        [32, 36, 11],
        [38, 42, 5],
        [44, 48, 11],
      ]) {
        this.#createBox(arrayMap, 42, 52, item[0], item[1], item[2], 5, 2);
      }

      for (let item of [
        [75, 80, 6],
        [82, 86, 5],
        [89, 93, 5],
        [95, 99, 5],
      ]) {
        this.#createBox(arrayMap, 1, 4, item[0], item[1], 4, item[2], 2);
        this.#createBox(arrayMap, 6, 18, item[0], item[1], 13, item[2], 2);
      }

      for (let item of [
        [50, 68, 9],
        [70, 80, 11],
        [82, 86, 5],
        [89, 93, 5],
        [95, 99, 5],
      ]) {
        this.#createBox(arrayMap, 44, 90, item[0], item[1], 5, item[2], 2);
        this.#createBox(arrayMap, 92, 95, item[0], item[1], 4, item[2], 2);
        this.#createBox(arrayMap, 97, 99, item[0], item[1], 3, item[2], 2);
      }
    },
    41: (arrayMap) => {
      this.#createBox(arrayMap, 2, 42, 63, 67, 5, 5, 2);
      this.#createBox(arrayMap, 2, 90, 76, 81, 5, 6, 2);
      this.#createBox(arrayMap, 92, 95, 76, 81, 4, 6, 2);
      this.#createBox(arrayMap, 97, 99, 76, 81, 3, 6, 2);
      this.#createBox(arrayMap, 14, 18, 89, 89, 5, 1, 2);

      this.#createBox(arrayMap, 44, 48, 90, 94, 5, 5, 2);
      this.#createBox(arrayMap, 43, 48, 95, 99, 6, 5, 2);

      this.#createBox(arrayMap, 50, 54, 90, 97, 5, 8, 2);
      this.#createBox(arrayMap, 50, 54, 99, 100, 5, 2, 2);

      this.#createBox(arrayMap, 56, 60, 90, 93, 5, 4, 2);
      this.#createBox(arrayMap, 56, 60, 95, 100, 5, 6, 2);

      this.#createBox(arrayMap, 62, 84, 90, 93, 11, 4, 2);

      this.#createBox(arrayMap, 62, 66, 95, 99, 5, 5, 2);
      this.#createBox(arrayMap, 68, 78, 95, 100, 11, 6, 2);
      this.#createBox(arrayMap, 80, 84, 94, 99, 5, 6, 2);

      for (let item of [
        [2, 12, 5],
        [14, 24, 11],
        [26, 30, 5],
        [32, 42, 11],
        [44, 48, 5],
        [50, 60, 11],
        [62, 66, 5],
        [68, 78, 11],
        [80, 84, 5],
        [86, 95, 10],
        [97, 99, 3],
      ]) {
        this.#createBox(arrayMap, item[0], item[1], 69, 74, item[2], 6, 2);
      }

      for (let item of [
        [44, 48, 5],
        [50, 60, 11],
        [62, 68, 7],
        [70, 72, 3],
        [74, 84, 11],
      ]) {
        this.#createBox(arrayMap, item[0], item[1], 83, 88, item[2], 6, 2);
      }

      for (let item of [
        [2, 24, 5],
        [26, 36, 11],
        [38, 42, 5],
        [86, 90, 5],
        [92, 95, 4],
        [97, 99, 3],
      ]) {
        this.#createBox(arrayMap, item[0], item[1], 83, 88, item[2], 6, 2);
        this.#createBox(arrayMap, item[0], item[1], 90, 93, item[2], 4, 2);
        this.#createBox(arrayMap, item[0], item[1], 95, 99, item[2], 5, 2);
      }

      for (let item of [
        [1, 5],
        [7, 14],
        [16, 24],
      ]) {
        this.#createBox(
          arrayMap,
          1,
          4,
          item[0],
          item[1],
          4,
          item[1] - item[0] + 1,
          2
        );
        this.#createBox(
          arrayMap,
          6,
          18,
          item[0],
          item[1],
          13,
          item[1] - item[0] + 1,
          2
        );
        this.#createBox(
          arrayMap,
          20,
          42,
          item[0],
          item[1],
          11,
          item[1] - item[0] + 1,
          2
        );
      }

      for (let item of [
        [26, 31],
        [33, 37],
        [39, 45],
        [47, 54],
        [56, 61],
      ]) {
        this.#createBox(
          arrayMap,
          1,
          12,
          item[0],
          item[1],
          12,
          item[1] - item[0] + 1,
          2
        );
        this.#createBox(
          arrayMap,
          14,
          18,
          item[0],
          item[1],
          5,
          item[1] - item[0] + 1,
          2
        );
        this.#createBox(
          arrayMap,
          20,
          42,
          item[0],
          item[1],
          11,
          item[1] - item[0] + 1,
          2
        );
      }

      for (let item of [
        [1, 5, 5],
        [7, 14, 8],
        [16, 24, 9],
        [26, 31, 6],
        [33, 37, 5],
        [39, 45, 7],
        [47, 54, 8],
        [56, 61, 6],
        [63, 67, 5],
      ]) {
        this.#createBox(arrayMap, 44, 90, item[0], item[1], 5, item[2], 2);
        this.#createBox(arrayMap, 92, 95, item[0], item[1], 4, item[2], 2);
        this.#createBox(arrayMap, 97, 99, item[0], item[1], 3, item[2], 2);
      }
    },
    42: (arrayMap) => {
      this.#createBox(arrayMap, 2, 12, 1, 29, 5, 5, 2);
      this.#createBox(arrayMap, 14, 18, 1, 11, 5, 11, 2);
      this.#createBox(arrayMap, 14, 18, 13, 17, 5, 5, 2);
      this.#createBox(arrayMap, 14, 18, 19, 29, 5, 11, 2);
      this.#createBox(arrayMap, 20, 24, 1, 29, 5, 5, 2);
      this.#createBox(arrayMap, 26, 90, 19, 23, 5, 5, 2);
      for (let item of [
        [60, 65, 6],
        [67, 83, 5],
        [85, 92, 8],
        [94, 99, 6],
      ]) {
        this.#createBox(arrayMap, 2, 90, item[0], item[1], 5, item[2], 1);
        this.#createBox(arrayMap, 92, 95, item[0], item[1], 4, item[2], 1);
        this.#createBox(arrayMap, 97, 99, item[0], item[1], 3, item[2], 1);
      }

      for (let item of [
        [1, 29, 5],
        [31, 37, 7],
        [39, 41, 3],
        [43, 47, 5],
      ]) {
        this.#createBox(arrayMap, 92, 95, item[0], item[1], 4, item[2], 2);
        this.#createBox(arrayMap, 97, 99, item[0], item[1], 3, item[2], 2);
      }

      for (let item of [
        [31, 37, 2],
        [39, 41, 2],
        [43, 47, 2],
        [49, 53, 1],
        [55, 59, 1],
      ]) {
        this.#createBox(
          arrayMap,
          38,
          90,
          item[0],
          item[1],
          5,
          item[1] - item[0] + 1,
          item[2]
        );
      }

      this.#createBox(arrayMap, 2, 6, 31, 41, 5, 11, 2);
      this.#createBox(arrayMap, 2, 6, 43, 47, 5, 5, 2);
      this.#createBox(arrayMap, 2, 6, 49, 58, 5, 10, 1);
      this.#createBox(arrayMap, 8, 27, 39, 58, 20, 20, 6);
      this.#createBox(arrayMap, 7, 18, 31, 37, 12, 7, 2);
      this.#createBox(arrayMap, 20, 24, 31, 37, 5, 7, 2);
      this.#createBox(arrayMap, 26, 36, 31, 37, 11, 7, 2);
      this.#createBox(arrayMap, 92, 95, 49, 59, 4, 5, 1);
      this.#createBox(arrayMap, 97, 99, 49, 59, 3, 5, 1);

      this.#createBox(arrayMap, 29, 36, 39, 41, 8, 3, 2);
      this.#createBox(arrayMap, 29, 32, 43, 47, 4, 5, 2);
      this.#createBox(arrayMap, 34, 36, 43, 47, 3, 5, 2);
      this.#createBox(arrayMap, 29, 32, 49, 53, 4, 5, 1);
      this.#createBox(arrayMap, 34, 36, 49, 53, 3, 5, 1);

      this.#createBox(arrayMap, 29, 36, 55, 59, 8, 5, 1);

      for (let item of [
        [26, 36, 11],
        [38, 42, 5],
        [44, 54, 11],
        [56, 60, 5],
        [62, 72, 11],
        [74, 78, 5],
        [80, 90, 11],
      ]) {
        this.#createBox(arrayMap, item[0], item[1], 25, 29, item[2], 5, 2);
      }

      this.#createBox(arrayMap, 26, 48, 1, 5, 11, 5, 2);
      this.#createBox(arrayMap, 50, 66, 1, 5, 5, 5, 2);

      this.#createBox(arrayMap, 26, 48, 13, 17, 11, 5, 2);
      this.#createBox(arrayMap, 50, 66, 13, 17, 5, 5, 2);
      this.#createBox(arrayMap, 86, 90, 1, 17, 5, 5, 2);
      this.#createBox(arrayMap, 80, 84, 1, 17, 5, 8, 2);
      this.#createBox(arrayMap, 74, 79, 13, 17, 6, 5, 2);
      this.#createBox(arrayMap, 68, 72, 13, 17, 5, 5, 2);
      this.#createBox(arrayMap, 68, 78, 3, 5, 11, 3, 2);

      this.#createBox(arrayMap, 31, 31, 60, 65, 1, 6, 1);
      this.#createBox(arrayMap, 38, 90, 100, 100, 5, 1, 1);
      this.#createBox(arrayMap, 92, 95, 100, 100, 4, 1, 1);
      this.#createBox(arrayMap, 97, 99, 100, 100, 3, 1, 1);

      for (let item of [
        [26, 36],
        [38, 46],
        [48, 54],
        [56, 66],
        [68, 72],
        [74, 78],
      ]) {
        this.#createBox(
          arrayMap,
          item[0],
          item[1],
          7,
          11,
          item[1] - item[0] + 1,
          5,
          2
        );
      }
    },
    43: (arrayMap) => {
      this.#createBox(arrayMap, 42, 58, 93, 97, 5, 5, 1);
      this.#createBox(arrayMap, 72, 94, 93, 97, 5, 5, 1);
      this.#createBox(arrayMap, 36, 58, 99, 100, 5, 2, 1);
      this.#createBox(arrayMap, 72, 94, 99, 100, 5, 2, 1);
      this.#createBox(arrayMap, 2, 36, 63, 65, 17, 3, 1);
      this.#createBox(arrayMap, 2, 36, 74, 77, 17, 4, 1);
      this.#createBox(arrayMap, 48, 82, 79, 85, 5, 7, 1);
      this.#createBox(arrayMap, 48, 82, 87, 91, 5, 5, 1);
      this.#createBox(arrayMap, 84, 94, 79, 91, 11, 13, 1);
      this.#createBox(arrayMap, 96, 99, 79, 91, 4, 13, 1);
      this.#createBox(arrayMap, 96, 99, 93, 100, 4, 8, 1);
      this.#createBox(arrayMap, 60, 70, 93, 100, 11, 8, 1);

      this.#createBox(arrayMap, 1, 23, 95, 99, 5, 5, 1);
      this.#createBox(arrayMap, 38, 46, 79, 85, 9, 7, 1);
      this.#createBox(arrayMap, 38, 46, 87, 91, 9, 5, 1);
      this.#createBox(arrayMap, 38, 40, 93, 97, 3, 5, 1);
      this.#createBox(arrayMap, 36, 37, 95, 97, 2, 3, 1);
      this.#createBox(arrayMap, 25, 34, 95, 99, 10, 5, 1);

      for (let item of [
        [1, 2, 2],
        [4, 20, 8],
        [22, 36, 7],
      ]) {
        this.#createBox(arrayMap, item[0], item[1], 84, 89, item[2], 6, 1);
      }

      for (let item of [
        [1, 11, 11],
        [13, 28, 16],
        [30, 36, 7],
      ]) {
        this.#createBox(arrayMap, item[0], item[1], 79, 82, item[2], 4, 1);
        this.#createBox(arrayMap, item[0], item[1], 91, 93, item[2], 3, 1);
      }

      for (let item of [
        [1, 7, 7],
        [9, 31, 5],
        [33, 61, 4],
      ]) {
        this.#createBox(arrayMap, 2, 36, item[0], item[1], 5, item[2], 1);
      }

      for (let item of [
        [2, 18, 8],
        [20, 28, 9],
        [30, 36, 7],
      ]) {
        this.#createBox(arrayMap, item[0], item[1], 67, 72, item[2], 6, 1);
      }

      for (let item of [
        [1, 3, 3],
        [5, 13, 9],
        [15, 31, 5],
        [33, 56, 4],
        [58, 67, 10],
        [69, 77, 9],
      ]) {
        this.#createBox(arrayMap, 38, 90, item[0], item[1], 5, item[2], 1);
        this.#createBox(arrayMap, 92, 95, item[0], item[1], 4, item[2], 1);
        this.#createBox(arrayMap, 97, 99, item[0], item[1], 3, item[2], 1);
      }
    },
    44: (arrayMap) => {
      this.#createBox(arrayMap, 96, 99, 1, 3, 4, 3, 1);
      this.#createBox(arrayMap, 1, 23, 1, 89, 5, 5, 1);
      this.#createBox(arrayMap, 1, 23, 91, 99, 5, 4, 1);
      this.#createBox(arrayMap, 25, 34, 1, 89, 10, 5, 1);
      this.#createBox(arrayMap, 25, 34, 91, 99, 10, 4, 1);
      this.#createBox(arrayMap, 36, 94, 5, 99, 5, 5, 1);
      this.#createBox(arrayMap, 36, 94, 1, 3, 5, 3, 1);
      this.#createBox(arrayMap, 65, 65, 1, 3, 1, 3, 1);
      this.#createBox(arrayMap, 65, 65, 17, 27, 1, 11, 1);
      this.#createBox(arrayMap, 65, 65, 53, 63, 1, 11, 1);
      this.#createBox(arrayMap, 65, 65, 77, 87, 1, 11, 1);

      this.#createBox(arrayMap, 60, 70, 22, 22, 5, 1, 1);
      this.#createBox(arrayMap, 60, 70, 58, 58, 5, 1, 1);
      this.#createBox(arrayMap, 60, 70, 82, 82, 5, 1, 1);
      this.#createBox(arrayMap, 96, 99, 5, 99, 4, 11, 1);

      this.#createBox(arrayMap, 89, 89, 89, 99, 1, 11, 1);
      this.#createBox(arrayMap, 89, 89, 29, 51, 1, 11, 1);
      this.#createBox(arrayMap, 84, 94, 94, 94, 5, 1, 1);
      this.#createBox(arrayMap, 84, 94, 34, 34, 5, 1, 1);
      this.#createBox(arrayMap, 84, 94, 46, 46, 5, 1, 1);
      this.#createBox(arrayMap, 41, 41, 89, 99, 1, 11, 1);
      this.#createBox(arrayMap, 41, 41, 29, 51, 1, 11, 1);
      this.#createBox(arrayMap, 36, 46, 94, 94, 5, 1, 1);
      this.#createBox(arrayMap, 36, 46, 34, 34, 5, 1, 1);
      this.#createBox(arrayMap, 36, 46, 46, 46, 5, 1, 1);

      this.#createBox(arrayMap, 53, 53, 5, 15, 1, 11, 1);
      this.#createBox(arrayMap, 53, 53, 65, 75, 1, 11, 1);
      this.#createBox(arrayMap, 48, 58, 10, 10, 5, 1, 1);
      this.#createBox(arrayMap, 48, 58, 70, 70, 5, 1, 1);

      this.#createBox(arrayMap, 77, 77, 5, 15, 1, 11, 1);
      this.#createBox(arrayMap, 72, 82, 10, 10, 5, 1, 1);
      this.#addRegion(arrayMap, 72, 70, 11, 1, 1);
      this.#addRegion(arrayMap, 77, 65, 1, 11, 1);
      for (let item of [
        [7, 11],
        [19, 23],
        [31, 35],
        [43, 47],
        [55, 59],
        [67, 71],
        [79, 83],
        [91, 94],
      ]) {
        this.#createBox(
          arrayMap,
          12,
          12,
          item[0],
          item[1],
          1,
          item[1] - item[0] + 1,
          1
        );
      }
    },
  };

  #createBox(
    arrayMap,
    initialX,
    finalX,
    initialY,
    finalY,
    sizeX,
    sizeY,
    value
  ) {
    for (let iX = initialX; iX <= finalX - sizeX + 1; iX = iX + sizeX + 1) {
      for (let iY = initialY; iY <= finalY - sizeY + 1; iY = iY + sizeY + 1) {
        this.#addRegion(arrayMap, iX, iY, sizeX, sizeY, value);
      }
    }
  }
  #addRegion(array, initialX, initialY, sizeX, sizeY, value) {
    for (let iY = initialY - 1; iY < initialY + sizeY - 1; iY++) {
      for (let iX = initialX - 1; iX < initialX + sizeX - 1; iX++) {
        array[iY][iX] = value;
      }
    }
  }

  #image(fileName, callback) {
    const img = document.createElement("img");
    img.onload = function () {
      callback(img);
    };
    img.src = `/assets/reelands/${fileName}.png`;

    return img;
  }
  #setCanvasSize(canvas) {
    canvas.height = this.map.length * this.tileSize;
    canvas.width = this.map[0].length * this.tileSize;
  }
  clearCanvas(canvas, ctx) {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.heigth);
    canvas.removeEventListener("click", this.getP);
  }

  #drawMap(ctx) {
    this.map.forEach((rowMap, rowIndex) => {
      rowMap.forEach((tile, columnIndex) => {
        this.#image(tile, (image) => {
          if (image) {
            ctx.drawImage(
              image,
              columnIndex * this.tileSize,
              rowIndex * this.tileSize,
              this.tileSize,
              this.tileSize
            );
          }
        });
      });
    });
  }

  #getPosition(canvas, ctx, newMap, event) {
    let rect = canvas.getBoundingClientRect();
    let x = event.clientX - rect.left;
    let y = event.clientY - rect.top;
    const selectedIdY = Math.ceil(y / this.tileSize);
    const selectedIdX = Math.ceil(x / this.tileSize);
    const nm = newMap[selectedIdY - 1][selectedIdX - 1];
    if (nm === 0 || nm === 6 || nm === 7) {
      return;
    }
    const newSelected = nm.toString().includes("s")
      ? nm.substring(0, nm.length - 2)
      : `${nm}-s`;

    newMap[selectedIdY - 1][selectedIdX - 1] = newSelected;
    const posY = this.column * 100 + selectedIdY;
    const posX = this.row * 100 + selectedIdX;
    this.map = newMap;
    const imgMap = this.#getImgMap(selectedIdY - 1, selectedIdX - 1, newMap);
    this.handleOpen(posX, posY, imgMap);
    this.#drawMap(ctx);
  }
  #getImgMap(posX, posY, newMap) {
    const sizeMiniMap = posX - 3 < 0 && posY - 3 < 0 ? 5 : 3;
    const minX = posX - sizeMiniMap < 0 ? 0 : posX - sizeMiniMap;
    const maxX = posX + sizeMiniMap + 1;
    const minY = posY - sizeMiniMap < 0 ? 0 : posY - sizeMiniMap;
    const maxY = posY + sizeMiniMap + 1;
    const miniMap = newMap
      .slice(minX, maxX)
      .map((map) => map.slice(minY, maxY));
    return miniMap;
  }
  draw(canvas, ctx) {
    this.#setCanvasSize(canvas);
    this.#drawMap(ctx);
    if (!this.isModal) {
      const getP = (e) => {
        const rw = localStorage.getItem("row");
        const cl = localStorage.getItem("col");
        if (Number(rw) !== this.row || Number(cl) !== this.column) {
          canvas.removeEventListener("click", getP, true);
        } else {
          this.#getPosition(canvas, ctx, this.map, e);
        }
      };
      canvas.addEventListener("click", getP, true);
      localStorage.setItem("row", this.row);
      localStorage.setItem("col", this.column);
      this.drawed = true;
    }
  }
}
