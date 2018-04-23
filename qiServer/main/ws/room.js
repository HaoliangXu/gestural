const globalRoundomRooms = [];//随机匹配

const globalInviteRooms = [];//邀请匹配

let nextRoomId = 0;

let timeout = 6000;

class Room{
    constructor(){
        this.gameMode = 0;
        this.clients = [];
        this.max_play_number = 0;
        this.roomId = nextRoomId++;
    };

    addClient(client){
        if (this.clients.push(client)<this.max_play_number&&this.gameMode%2==0){
            setTimeout(() => {
                if(this.clients.length<this.max_play_number){
                    const Robot = require("./robot");
                    new Robot(this);
                }
            }, timeout);
        }
    };

    createRoom(gameMode){
        const room = new Room();
        if(gameMode == 1|| gameMode == 3){
            globalInviteRooms.unshift(room);
        }else{
            globalInviteRooms.unshift(room);
        }
        return room;
    };

/**
 * 寻找房间
 * @param {游戏模式} gameMode 
 */
    findRoom(gameMode){
        if(gameMode == 1 || gameMode == 3){
            return globalInviteRooms.find((room)=>{room.clinets.length<room.max_play_number});
        }
        return globalRoundomRooms.find((room) => { room.clinets.length < room.max_play_number });
    };

    playGame(){
        let result = this.clients.map(clinet => {
             return Object.assign(client.user,client.gameDate)
        });
        this.clients.forEach(client => {
            client.emit("start",result)
        })
    };

    finishOneGame(){
       
    };

    delClient(client){
       let index = this.clients.indexOf(client);
       index !== -1 && this.clients.splice(index,1);
       if(this.clients.length==0){
           client.room.gameMode % 2 == 0 ? globalRoundomRooms.splice(globalRoundomRooms.indexOf(client.room),1) : globalInviteRooms.splice(globalInviteRooms.indexOf(client.room),1)
       }
    };

    gameOver(){
        
    }
}
module.exports=Room;