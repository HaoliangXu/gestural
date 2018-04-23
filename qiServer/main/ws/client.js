const Room = require("./room");

class Client{
    constructor(socket){
        this.id = socket.id;
        this.room = {};
        this.user = {};
        this.gameData = {
            choice:0,
            bloodValue:0,
            totalScore:0,
            eachWinOrLose:0  
        };
        this.socket = socket;
        this.switch = false;

    };
    initConnect(){
        this.on('userInfo',this.onUserInfo);
        this.on('join', this.onJoin);
        this.on('choice', this.onChoice);
        this.on('leave', this.onLeave);
        this.on('chat', this.onMovement);
        this.on('disconnect', this.onDisconnect);
    };
    onUserInfo(data){
       this.user = data.user;
       this.emit('hi',{msg:'hi'})
    }
    onJoin(data){
        let gameMode = data.gameMode;
        let max_play_number = gameMode < 2 ? 2 : 4;//游戏人数
        if(gameMode % 2 == 1){
           
        }else{
            if(this.room) this.room.delClient(this);
            let room = this.room = Room.prototype.findRoom(gameMode) || new Room();
            if(!room.gameMode) room.gameMode = gameMode;
            room.max_play_number = max_play_number;
            room.addClient(this);
        }
        if(this.room.clients == max_play_number){//房间人数满，就开始游戏
            this.room.playGame();
        }
    }
    onChoice(data){
        this.gameDate.choice = data.choice;
        this.switch = true;
        let robots = this.room.clients.find(x => x.user.uname.indexOf('robot') > -1);// 机器人的判别 需要修改 当多个机器存在时 坑 indexof
        if (robots) {
            robots.play();//  robots.forEach(x=>x.play());//多个机器人的兼容
        }
        if (this.room.clients.every(x => x.switch)) {//不用内部计时，前端必须发送choice数据
            this.room.finishGame();
        }
        this.broadCast("movement",{
            uid: this.user.uid,
            movement: "choice"
        })
    };
    onLeave(data){
        if(this.room){
            this.broadCast("leave",{
                uid: this.user.uid
            });
            this.room.delClient(this);
            this.room = null;
        }
    }
    onMovement(data){
        this.broadCast("movement",{
            uid: this.user.id,
            movement: "face",
            face: data.face
        })
    }
    onDisconnect(data){
        if (this.room) {
            this.room.removeClient(this);
            this.room = null;
        }
        this.socket.disconnect();
        this.socket = null;
        this.gameData = null;
        this.user = null;
    }
    on(eventMsg,handle){
        let client = this;
        this.socket.on(eventMsg,(data)=>{//留意data数据类型
            hanlde.call(client,data)
        });
    }
    emit(eventMsg,data){
        this.socket.emit(eventMsg,data)
    }
    broadCast(eventMsg,data){
        if(!this.room) return;
        this.room.clients.filter(client => client != this).forEach(other => other.emit(eventMsg,data));
    }
}
module.exports=Client;