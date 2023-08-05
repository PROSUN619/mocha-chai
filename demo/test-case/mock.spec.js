var sinon = require('sinon');
var chai = require('chai');
var expect = chai.expect;
const student = require('../controllers/studentControllers')
const studentobj = new student();

describe('---------mock---------', () => {
   
    it('function call check', () => {
        var mock = sinon.mock(studentobj);
        
        var expect = mock.expects('getExternal');    
        expect.exactly(1);
        expect.withArgs(40);
        studentobj.finalMarks(40);
        
        
    })
    
})


