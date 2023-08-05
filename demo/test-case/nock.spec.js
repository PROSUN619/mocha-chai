var sinon = require('sinon');
var chai = require('chai');
var expect = chai.expect;
const student = require('../controllers/studentControllers')
const studentobj = new student();
const nock = require('nock');

describe('---------nock---------', () => {
   
    it('API call check', (done) => {
        var obj = {status: 'ok', statusCode: 200, data : []};


        
        const apiHit = nock('http://localhost:5000/api/v1')
        .get('/posts')
        .reply(200,obj);

        /*Note :  above line of code is a replica of exact api calling. 
        comment/uncomment and run to see the result difference in console
        */

        studentobj.thirdPartyAPI()
        .then(res => {
            //console.log('res.length',res.length);
            expect(res.length).to.be.eql(obj);
            done();
        })
        .catch(err => {
            new Error('error ' + err);
            done();
        })    
    })
    
})


