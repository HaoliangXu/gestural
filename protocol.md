通信协议
## `hello`: client -> server  客户端连上后发送用户信息，告知服务器自己身份。

{  
        msg：hello
        user:  { uid, uname, uavatar },
}

## `hi`: serever->client

{
        msg：hi
}

## `join`: client -> server

客户端请求加入一个房间进行游戏,通过gameMode来判断从哪种场景进入，0随机 1邀请 2多人随机 3多人邀请 again 在邀请模式再次游戏的判断。

{
        gameMode:：0|1|2|3
        roomId：123|null
        again：0|1
}

##`room`: server->client  

邀请模块进入的房主发起邀请的房间号
{
        room：roomid
}

## `start`: server -> client  开始游戏

房间里面全部人都 ready 后，会发送游戏开始的信号。传对手信息。

{  
        user:  { uid, uname, uavatar },
}

## `choice`: client -> server  客户端选择

{
        choice:  1 | 2 | 3 | 4
}

##`eachRoundFinish`: server -> client  每次出招的结算

{
        user:  {uid,uname,uavatar}
        
        result:  {winInfo:0 | 1,  xueValue:xueValue}
}

## `gameOver`: server ->client  游戏结束

{
        user:   {uid,uname,uavatar}
        result：0 | 1
}


## `movement`: server -> client  有用户更新选择或者更新表情会通知其它用户

{
        movement:  "choice" | "face",
        face: 1
}

## `leave`:client->server  用户离开

{
       user:uid
}

##`leaveShow` server-> client  其他客户端的界面显示

{
       user:uid
}
