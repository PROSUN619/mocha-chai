var sinon = require('sinon');
var chai = require('chai');
var expect = chai.expect;
const student = require('../controllers/studentControllers')
const studentobj = new student();
const chaiaspromised = require('chai-as-promised');
chai.use(chaiaspromised);


describe('---------promise---------', () => {

    // it('promise check without chai-as-promised', (done) => {

    //     studentobj.dbCall().then((result) => {
    //         this.timeout(5000);
    //         expect(result).to.be.equal(10);
    //         done(); // it will return total elapsed time
    //         // Call done() to notify Mocha that the async operation is done.
    //     });        
    // })

    // it('promise check with chai-as-promised', () => {
    //     this.timeout(0); // use this to avoid timeout error while calling the DB
    //     return expect(studentobj.dbCall()).to.eventually.equal(10);
    // })


    it('should resolve promise within 5000ms', function () {
        // Assuming your promise takes more than 2 seconds to resolve
        this.timeout(5000); // Set the timeout to 5000ms
        return expect(studentobj.dbCall()).to.eventually.equal(10);
      });
      

})
