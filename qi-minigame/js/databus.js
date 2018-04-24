// let instance

// /**
//  * 全局状态管理，回收
//  */
// export default class DataBus {
//   constructor() {
//     // 如果创建过DataBus了，就返回之前创造的
//     if (instance)
//       return instance

//     instance = this

//     this.init()

//   }

//   init() {
//     this.winNum = 0


//     /**
//      * 用户数据存的对象
//      * openid要进行初始化，这样子做的好处是用户以后再打开游戏的时候，openid会一直存在
//      */
//     this.userData = { openid: wx.getStorageSync('openid') || void 0 }

//     wx.getSystemInfo({
//       success: (res) => {
//         this.systemInfo = res
//       }
//     })
//     /**
//      * 游戏状态
//      * 改变状态是直接改变这个字符串，会自动检测并调用相应的渲染函数
//      * @type {String}
//      */
//     this.gameStatus = 'playing'

//     this.userInfo = {}
   

//     this.gameControl = {
//       isNeedRefreshPlaying: true
//     }

//   }
// }