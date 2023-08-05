var chai = require('chai');
var expect = chai.expect;
var sinon = require('sinon');


describe('heading1',function () {


    before(function(){
        console.log('---------Before all test cases---------');
    })

    after(function(){
        console.log('---------After all test cases---------');
    })

    beforeEach(function(){
        console.log('---------before each test cases---------');
    })

    afterEach(function(){
        console.log('---------after each test cases---------');
    })

    var data = 'code';

    it('check string 1 ',function(){
        expect(data).to.be.a('string')
    })

    it('check string 2 ',function(){
        expect(data).to.be.a('string')
    })

    it('check string 3 ',function(){
        expect(data).to.be.a('string')
    })

 /* 
 note : 
 
 use it.skip to skip the it
 use it.only to run only 1 it
    
 can also be used with describe
 
*/
})