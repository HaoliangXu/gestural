let {should,expect,assert} = require('chai');
let {insert,select,update} = require('../lib/db/dbSql')
describe('this a test of database',function(){
     it('insert should get object',function(done){
         insert("insert into player(uname) values('lisong')").then(function(data){
             data.should.to.be.an('object');
         });
         done();
     });
     it('select should get object',function(done){
        insert("select * from player where uname='lisong'").then(function(data){
            data.should.to.be.an('object')
        })
        done();
    });
     it('update should get object',function(done){
        insert("update player set uname='lisong1' where uname='lisong'").then(function(data){
            data.should.to.be.an('object')
        })
        done();
     });
})