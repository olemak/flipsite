const expect = require('chai').expect;

const testme = input => input

const num = testme(1)
const str = testme("Hey")
const arr = testme([1, 2, 2, "hey"])
const obj = testme({one: 1, two: 2, tree: "Oak"})


describe('Function name: testme', function() {
  describe('Input is a number: 1', function() {
    it('Should return 1 when the input is 1', function() {
      expect(testme(1)).to.equal(1);
    });
    it('Should return 789 when the input is 789', function() {
      expect(testme(789)).to.equal(789);
    });
    it('Should be of type "number"', function() {
      expect(testme(1)).to.be.a('number');
    });
  });
});