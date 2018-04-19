class Client{
    constructor(socket){
        this.room = {};
        this.user = {};
        this.gameData = {};
        this.socket = socket;

    };
    initConnect(){
        return null;
    };
    onUserInfo(data){
       return null;
    }
    onJoin(data){
        return null;
    }
    onChoice(data){
        return null;
        ;
    }
    onLeave(data){
        return null;
    }
    onMovement(data){
        return null;
    }
    on(eventMsg,handle){
        return null;
    }
    sendMsg(){
        return null;
    }
}
module.exports=Client;