var chai = require('chai')
var assert = chai.assert;
var should = chai.should();
var expect = chai.expect;
var server = require('../app');

var chaihttp = require('chai-http');
chai.use(chaihttp);


describe('Task API', function () {
    it('get user', function(done){
        chai.request(server).get('/api/user/detail')
        .end((err, res) => {
            expect(res.status).to.be.equal(200);
            expect(res.body).to.have.all.keys('ID','DOB','city','marks','name');
            done();
        })
    })
})