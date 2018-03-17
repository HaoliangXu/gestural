var numAi = 0
var timer

Page({
  data:{
    //控制按钮是否可点击
    btnState:false,

    //记录获胜次数
    winNum:0,

    //我的信息，包括昵称、头像、气值
    myName: "",
    myAvatar: null,
    myQivalue: 0,  //气值


    //对手信息
    yourName: "",
    yourAvatar: null,
    yourQivalue: 0,  //气值

    //游戏信息 
    gameOfPlay:'',

    //用户选择的图片
    imageUserScr:'/pages/image/wenhao.png',

    //电脑随机的图片
    imageAiScr:'',

    //图片数组
    srcs:[
      '/pages/image/qi.png',
      '/pages/image/bo.png',
      '/pages/image/dan.png',
      '/pages/image/dang.png'  
    ]
  },

  //生命周期，刚进来
  onLoad: function () {
     //获取本地缓存“已经获胜的次数”
     var oldWinNum = wx.getStorageSync('winNum');
     //如果有缓存，那么赋值，否则为0
     if(oldWinNum != null && oldWinNum !=''){
        this.data.winNum = oldWinNum;
     }
    this.timerGo();
  },

  // 页面显示后，进行登录和链接，完成后开始启动游戏服务

  // 微信登录后获得用户信息
  // login:function(e){
  //   const { nickName, avatarUrl } = userInfo.userInfo;
  //   this.setData({ 
  //     myName: nickName, 
  //     myAvatar: avatarUrl 
  //   });
  // }
  // 链接到服务器后进行应答握手

  // 开始进行游戏服务


  // 选择招式
  changeForChoose: function(e){
    console.log("选择招式");
      if(this.data.btnState == true){
        return;
      }

      //获取用户选择相应的图片。
      this.setData({
          imageUserScr:this.data.srcs[e.currentTarget.id]
      });

      //清除计时器
      clearInterval(timer);

      //获取数据源
      var user = this.data.imageUserScr;
      var ai = this.data.imageAiScr;
      var myQiNum = this.data.myQivalue;
      var yourQiNum = this.data.yourQivalue;
      var num = this.data.winNum;
      var str = '咦，对方岿然不动!';


      //判断招数的是否达到实现条件，未达到则默认出挡
    
      //自身选择加气
      if( user == "/pages/image/qi.png"){
         myQiNum++;
         wx.setStorageSync('myQivalue', myQiNum);
  
      };

      //对方选择加气
      if( ai == "/pages/image/qi.png"){
        yourQiNum++;
        wx.setStorageSync('yourQivalue', yourQiNum);
        
     };

      //自身选择使用波
      if (user == "/pages/image/bo.png"&& myQiNum>=1) {
        myQiNum--;
        wx.setStorageSync('myQivalue', myQiNum);
      } else if(user == "/pages/image/bo.png"&& myQiNum < 1){
          user = "/pages/image/dang.png";
          this.setData({
          imageUserScr:"/pages/image/dang.png"
      });
      };
     
      //对方选择使用波
      if (ai == "/pages/image/bo.png"&& yourQiNum>=1) {
        yourQiNum--;
        wx.setStorageSync('yourQivalue', yourQiNum);
      }else if(ai == "/pages/image/bo.png"&& yourQiNum < 1){
        ai = "/pages/image/dang.png";
        this.setData({
          imageAiScr:"/pages/image/dang.png"
      });
      };

      //自身选择使用弹
      if (user == "/pages/image/dan.png" && myQiNum >=2 ) {
        myQiNum = myQiNum-2;
        wx.setStorageSync('myQivalue', myQiNum);
      }else if(user == "/pages/image/dan.png"&& myQiNum < 2){
        user = "/pages/image/dang.png";
        this.setData({
          imageUserScr:"/pages/image/dang.png"
      });
      };
    
      //对方选择使用弹
      if (ai == "/pages/image/dan.png" && yourQiNum >=2 ) {
        yourQiNum = yourQiNum-2;
        wx.setStorageSync('yourQivalue', yourQiNum);
      }else if(ai == "/pages/image/dan.png"&& yourQiNum < 1){
        ai = "/pages/image/dang.png";
        this.setData({
          imageAiScr:"/pages/image/dang.png"
      });
      };


      //三种获胜情况
      if( user == "/pages/image/bo.png" && ai == "/pages/image/qi.png"){
        num++;
        str = '少侠，你赢了!';
        wx.setStorageSync('winNum', num);
        myQiNum = 0;
        yourQiNum = 0;
      };

     if( user == "/pages/image/dan.png" && ai == "/pages/image/qi.png"){
       num++;
       str = '少侠，你赢了!';
       wx.setStorageSync('winNum', num);
       myQiNum = 0;
       yourQiNum = 0;
      
     };

     if( user == "/pages/image/dan.png" && ai == "/pages/image/bo.png"){
      num++;
      str = '少侠，你赢了!';
      wx.setStorageSync('winNum', num);
      myQiNum = 0;
      yourQiNum = 0;
    };

      //三种输掉情况
      if( user == "/pages/image/qi.png" && ai == "/pages/image/bo.png"){
        str = '少侠，你输了!';
        myQiNum = 0;
        yourQiNum = 0;
      };

      if( user == "/pages/image/qi.png" && ai == "/pages/image/dan.png"){
        str = '少侠，你输了!';
        myQiNum = 0;
        yourQiNum = 0;
      };

      if( user == "/pages/image/bo.png" && ai == "/pages/image/dan.png"){
        str = '少侠，你输了!';
        myQiNum = 0;
        yourQiNum = 0;
      };

      //刷新数据
      this.setData({
        winNum:num,
        myQivalue: myQiNum,
        yourQivalue: yourQiNum,
        gameOfPlay:str,
        btnState:true
      });
  },

  //


  //开启计时器
  timerGo:function(e) {
    timer = setInterval(this.move,100);
  },

  //ai滚动方法
  move(){
    //如果大于等于3，重置
    if(numAi>=4){
      numAi=0;
    }
    this.setData({
        //获取数组中Ai的，石头剪刀布相应的图片。
        imageAiScr: this.data.srcs[numAi],
    })
    numAi++;
  },


  //再来一局
  again: function (e){
      //控制按钮
      if(this.data.btnState == false){
        return;
      }
      //从新开始计时器
      this.timerGo();
      //刷新数据
      this.setData({
          btnState:false,
          gameOfPlay:'',
          imageUserScr:'/pages/image/wenhao.png'
      });
  }
})