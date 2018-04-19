import './js/libs/weapp-adapter'
import './js/libs/symbol'

import Main from './js/main'


// 从服务器下载资源更新
update()



// 微信授权登陆
function getUserInfo() {
    Wechat.getCryptoData()
      .then(d => {
        return Wechat.getMyOpenid(d);
      })
      .then(d => {
        console.log("从后端获取的openid", d.data);
      })
      .catch(e => {
        console.log(e);
      })
  }
  
  
  getUserInfo()



// 初始化游戏首页
render()



// 点击开始游戏
new Main()






