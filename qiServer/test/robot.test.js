let should = require('chai').should();
const Robot = require('../main/ws/robot');
describe('test class robot',function(){
    let robot = new Robot({id:1});
    it('test init',function(){
        robot.initConnect();
        robot.buildRobot();
    });
    it('test onjoin',function(){
        robot.onJoin() 
    });
    it('test onChice',function(){
        robot.onChoice();
    });
    it('test onleave',function(){
        robot.onLeave({uid:1})
    });
    it('test onmovement',function(){
        robot.onMovement({movement:'face',face:1})
    });
})