/**
 * 游戏背景
 */
const screenWidth = window.innerWidth
const screenHeight = window.innerHeight

// const BACKGROUNd_SRC = 'images/bg.png'
// const START_SRC = 'images/start.png'

// let backgroud = new Image()
// let start = new Image()

// background.src = BACKGROUNd_SRC
// start.src = START_SRC

export default class BackGround {
  constructor(ctx) {
    this.ctx = ctx
  }
  //背景
  // fillbackground(){
  //      this.ctx.drawImage(background, screenWidth, screenHeight)
  // }

  //开始button
  drawStart() {

    //beginPath方法开始一条路径，或重置当前的路径，避免污染
    this.ctx.beginPath()

    //开始按钮
    this.ctx.font = "24px Arial"
    this.ctx.fillText(
      '开始游戏',
      screenWidth / 2 - 25,
      screenHeight / 2 + 40
    )
    //this.ctx.drawImage(start, screenWidth , screenHeight, x, y)

    /**
     * 判断按钮点击区域
     */
    this.btnArea = {
      startX: screenWidth / 2 - 50,
      startY: screenHeight / 2 + 10,
      endX: screenWidth / 2 + 50,
      endY: screenHeight / 2 + 50
    }
  }







}


