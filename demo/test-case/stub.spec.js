var sinon = require('sinon');
var chai = require('chai');
var expect = chai.expect;
const student = require('../controllers/studentControllers')
const studentobj = new student();

describe('---------stub---------', () => {
   
    it('function argument check', () => {
        var stubObj = sinon.stub(studentobj,'getExternal');
        
        stubObj.withArgs(40).returns(5);

        expect(studentobj.finalMarks(40)).to.be.equals(54);
    })
    
})


