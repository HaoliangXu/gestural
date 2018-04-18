```
.
├── game.js                         //小游戏入口文件
├── game.json                       //小游戏配置文件
├── images                          //图片资源
├── audio                           //音频资源
├── js
│   ├── main.js                     //游戏主函数            
│   ├── base                        //定义游戏开发基础类
│   │   └── sprite.js               //游戏基本元素精灵类
│   │   └── music.js                //全局音效控制
│   ├── libs                   
│   │   ├── symbol.js               //ES6 Symbol简易兼容
│   │   └── weapp-adapter.js        //小游戏适配器               
│   ├── play
│   │   ├── msg.js                  //消息类
│   │   ├── opponent.js             //对手类
│   │   ├── player.js               //玩家类
│   │   └── weapons.js              //武器类
│   ├── rank
│   │   └── rank.js                 //排名类
│   └── result
│       └── result.js               //结果类
└── project.config.json
```