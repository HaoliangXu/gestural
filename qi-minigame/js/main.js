/**
 * 游戏主函数
 */
import BackGround from './runtime/background'
import BackGround from './runtime/result'
import Player from './play/player'
import Oponent from './play/oponent'
import Msg from './play/msg'
import Weapons from './play/weapons'
import Music from './base/music'


canvas.width = canvas.width 
canvas.height = canvas.height 
canvasAssociate.height = canvasAssociate.height 
canvasAssociate.width = canvasAssociate.width 

// 创建ctx，更改坐标原点到左下角
let ctx = canvas.getContext('2d')
    ctx.translate(0, canvas.height)

// 副屏，用来绘制背景等不是一直需要刷新的东西
let ctxAssociate = canvasAssociate.getContext('2d')
    ctxAssociate.translate(0, canvasAssociate.height)

let preImg = ['images/test.png']

export default class Main {

  constructor() {

    this.initBind = this.init.bind(this)
    //预加载图片资源，加载完再开始渲染
    this.preloading(preImg, this.initBind)

  }

  // 初始化游戏界面
  init() {

    //判断是否首次加载
    this.isStart = false

    //填充背景

    //渲染功能菜单button
  
  }

  //游戏按钮监听事件
  touchHandler(e) {
    let x = e.touches[0].clientX
    let y = e.touches[0].clientY

    //button 区域
    let area = this.xx.btnArea

    if (x >= area.startX
        && x <= area.endX
        && y >= area.startY
        && y <= area.endY) {
        //点击开始后 ，移除开始面板事件监听，开始主逻辑
        canvas.removeEventListener('touchstart', this.touchHandlerBind)
        this.start()

        flag = false
      }
    }

  //随机对战
  start() {
    
    //建立websocket

    //寻找玩家

    //游戏主逻辑事件

  }

  //游戏结束相关动作
  gameOver() {

    //显示游戏结果

    //返回主菜单or再来一局


  }

  //图片预加载
  preloading(preImgs, success) {


  }

  
}
