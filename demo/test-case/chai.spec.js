const chai = require('chai');
const assert = chai.assert;


//Assert

describe('Aspect check', function() {
    const userName = 'Sameer';
    it('check string',function(){
        assert.typeOf(userName,'string');
    });
})