class Robot{
    constructor(room){
        this.room=room;
        this.user={uid:'',uname:'',uavatar:''}
        
    };
    //初始化连接
    initConnect(){
        return null;
    }
    //建立机器人
    buildRobot(){
        return null
    }
    
    onJoin(){
       
    }

    onChoice(){

    }

    onLeave(){

    }

    onMovement(){

    }

    play(){
        return chioce;
    }

    //模拟客户端->服务端
    on(message,handle){
        return null;
    }

    emit(message,data){//客户端发送消息，执行on的事件
        return null;
    }

    //模拟服务端->客户端
    handle(eventMsg,handle){ 
        return null;
    }
    
    sendMsg(message,data){//服务端发送消息，执行handle事件
        return null;
    }
}
module.exports=Robot;