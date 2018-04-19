let should = require('chai').should();
let gameCompare = require('../main/ws/gameCompare');
describe('test gameCompare a game math',function(){
    it('it should return a number',function(){
        gameCompare(1,2).should.be.a('number')
    })
})