import azul from '../assets/tilemap/reelands/azul.png'
export default class TileMap {
  constructor(tileSize) {
    this.tileSize = tileSize
    this.azul = this.#image('Azul')
    this.verde = this.#image('Verde')
  }
  map = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, , 1, 1, 1, , 1, 1, 1, 1, 1, , 1],
  ]

  #image(fileName) {
    const img = new Image()
    img.src = `./tilemap/reelands/${fileName}.png`
    return img
  }
  #setCanvasSize(canvas) {
    canvas.heigth = this.map.length * this.tileSize
    canvas.width = this.map[0].length * this.tileSize
  }
  #clearCanvas(canvas, ctx) {
    ctx.fillStyle = 'black'
    ctx.fillRect(0, 0, canvas.width, canvas.heigth)
  }
  #drawMap(ctx) {
    this.map.forEach((row, rowIndex) => {
      row.forEach((tile, columnIndex) => {
        let image
        switch (tile) {
          case 1:
            image = this.azul
            break
          case 0:
            image = this.verde
          default:
            break
        }
        console.log(image)
        ctx.drawImage(
          image,
          columnIndex * this.tileSize,
          rowIndex * this.tileSize,
          this.tileSize,
          this.tileSize,
        )
      })
    })
  }
  draw(canvas, ctx) {
    this.#setCanvasSize(canvas)
    this.#clearCanvas(canvas, ctx)
    // this.#drawMap(ctx)
  }
}
