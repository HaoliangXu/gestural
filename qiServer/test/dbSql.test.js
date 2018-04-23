let should = require('chai').should();
let {insert,select,update,handleInsert,handleUpdate} = require('../lib/db/dbSql')
describe('this a test of database',function(){
     it('insert should get object',function(done){
         insert("insert into player(uname) values('lisong')").then(function(data){
             data.should.be.an('object');
             done();
         });
     });
     it('select should get object',function(done){
        insert("select * from player where uname='lisong'").then(function(data){
            data.should.be.an('object');
            done();
        })
    });
     it('update should get object',function(done){
        insert("update player set uname='lisong1' where uname='lisong'").then(function(data){
            data.should.be.an('object');
            done();
        });
     });
     it(' test handleinsert',function(){
         handleInsert({li:1,name:'li'}).should.have.property('keys','li,name');
     });
     it('test handleUpdate',function(){
         handleUpdate({name:'li',age:12}).should.equal("name='li',age=12")
     })
});