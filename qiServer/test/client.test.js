let {should,assert,expect} = require('chai');
const Client = require('../main/ws/client');
describe('test class Client',function(){

    let client = new Client({id:1});

    it('test onUserInfo',function(){
        client.onUserInfo({uid:1,uname:'llisong',uavatar:'img.ipg'});
        client.user.id.should.equal(1);
    });

    it('test onJoin',function(){
        client.onJoin({gameMode:0,roomId:null,again:0});
        client.room.should.to.be.an('object');
    });

    it('test onChoice',function(){
        client.onChoice({choice:1});    
    });

    it('test onLeave',function(){
        client.onLeave({uid:1})
    });

    it('test onMovement',function(){
        client.onMovement({movement:'face',face:1});
    });
})