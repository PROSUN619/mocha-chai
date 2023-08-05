var sinon = require('sinon');
var chai = require('chai');
var expect = chai.expect;
const student = require('../controllers/studentControllers')
const studentobj = new student();

describe('---------spy---------', () => {

    it('test user function', () => {
        expect(studentobj.userID()).to.be.equal(12);
    })

    it('function argument check', () => {
        var spyObj = sinon.spy(studentobj,'getinfo');
        studentobj.home(5);
        expect(spyObj.calledWith(5,1)).to.be.true;
    })
    
})


