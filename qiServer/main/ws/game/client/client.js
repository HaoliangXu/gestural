class Client{
    constructor(socket){
        this.room={};
        this.user={};
        this.gameData={};
        this.socket=socket;

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
    onChice(data){
        return null;
    }
    onFinish(data){
        return null;
    }
    onLeave(data){
        return null;
    }
    onFirstGame(data){
        return null;
    };
    on(eventMsg,handle){
        return null;
    }
    sendMsg(){
        return null;
    }
}