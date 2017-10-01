//require("babel-register");

const expect = require('chai').expect

const flip = require('../src/script/flip.js').flip
//import { flip } from '../src/script/flip'

//console.log("MOTHERFLIPPING: ",flip(true))

describe('flip', function() {
  describe('Input: bool (true)', function() {
    it('should return false', function() {
      expect(flip(true)).to.be.false;
    });
  });
});