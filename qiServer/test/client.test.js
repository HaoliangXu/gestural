let should = require('chai').should();
const Client = require('../main/ws/client');
describe('test class Client',function(){
//should 是将对象的原型进行扩展，在对象上加个should，不可以在null/undefine上添加，要改变方式
    let client = new Client({id:1});

    it('test onUserInfo',function(){
        client.onUserInfo({uid:1,uname:'llisong',uavatar:'img.ipg'});
        client.user.should.have.property(uid,1);
    });

    it('test onJoin',function(){
        client.onJoin({gameMode:0,roomId:null,again:0});
        client.room.should.be.an('object');
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