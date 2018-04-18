let {should,expect,assert} = require('chai');
let {getUserInfo,rank} = require('../main/http/util');
describe('this is a http function of util',function(){
    it('test getUserInfo can get userInfo',function(done){
        getUserInfo(123).then(function(data){
            data.should.to.be.an('object')
        });
        done();
    });
    it('test rank',function(done){
        rank(function(data){console.log(data)}).shoule.to.be.an('object');
        done();
    })
})