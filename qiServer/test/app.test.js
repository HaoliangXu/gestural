/**
 * api测试
 */
const app = require("../app");
const supertest = require("supertest");
require("chai").should();
describe("test app express",function(){
    this.timeout(5000)
    let server = app.listen(8080);
    let request = supertest(server);
    it("test APP getUserInfo",function(done){
        request.post('/http/user').send({openId:123})
        .end(function(err,res){
            res.should.be.an('object');
            done();
        })
    })
    it("test APP rank", function (done) {
        request.post('/http/rank')
            .end(function (err, res) {
                res.should.be.an('object');
                done();
            })
    })
})