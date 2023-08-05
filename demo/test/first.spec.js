var assert = require('assert');
// describe('Array', function () {
//   describe('#indexOf()', function () {
//     it('should return -1 when the value is not present', function () {
//       assert.equal([1, 2, 3].indexOf(4), -1);
//     });
//   });
// });


describe('my first test case', function() {
  it('1st value check', function () {
    assert.equal([1, 2, 3].indexOf(4), -1);
  });

  it('2nd value check', function () {
    assert.equal([1, 2, 3].indexOf(1), -1);
  });

});