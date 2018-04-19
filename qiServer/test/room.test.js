let should = require('chai').should();

const Room = require('../main/ws/room');

describe('test class room',function(){
    let room ;
    beforeEach(function(){
        room = new Room();
    })

    afterEach(function(){
        room=null;
    })

    it('test addclient',function(){
        room.addClient({id:1});
        room.clients.should.be.an('array').and.to.have.lengthOf.winthin(0,3)
    }); 

    it('test findRoom',function(){
        room.findRoom().should.be.an('object');
        room.findRoom().should.have.property('roomId')
    });
    
    it('test playGame',function(){
        room.playGame()
    });
    
    it('test finishOneGame',function(){
        room.finishOneGame()
    });

    it('test delroom',function(){
        room.delRoom().should.be.an('object')
    });

    it('test delclient',function(){
        room.addClient({uid:1});
        room.delClient().user.uid.should.equal(1);
    })
})