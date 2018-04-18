class Robot{
    constructor(room){
        this.room=room;
        this.user={uid:'',uname:'',uavatar:''}
        
    };
    initConnect(){
        return null;
    }

    buildRobot(){
        return null
    }

    onJoin(){

    }

    onChoice(){

    }

    onleave(){

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

    emit(message,data){//接到监听的事件
        return null;
    }

    //模拟服务端->客户端
    handle(eventMsg,handle){ //回调函数
        return null;
    }
    
    sendMsg(message,data){
        return null;
    }
}
module.exports=Robot;