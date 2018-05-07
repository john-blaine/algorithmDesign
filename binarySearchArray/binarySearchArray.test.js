/*jshint esversion: 6 */

var should = require('should');
var binarySearch = require('./binarySearchArray.js');
var sinon = require('sinon');

describe('binarySearch', function() {
  it('should exist', function() {
    should.exist(binarySearch);
  });

  it('should be a function', function() {
    binarySearch.should.be.a.Function();
  });

  it('should return 0 for 5 in [5]', function() {
    var result = binarySearch([5], 5);
    should.equal(result, 0);
  });

  it('should return null for 4 in [5]', function() {
    var result = binarySearch([5], 4);
    should.equal(result, null);
  });

  it('should return 0 for 1 in [1, 2, 3, 4, 5]', function() {
    var result = binarySearch([1, 2, 3, 4, 5], 1);
    should.equal(result, 0);
  });

  it('should return 1 for 2 in [1, 2, 3, 4, 5]', function() {
    var result = binarySearch([1, 2, 3, 4, 5], 2);
    should.equal(result, 1);
  });

  it('should return 2 for 3 in [1, 2, 3, 4, 5]', function() {
    var result = binarySearch([1, 2, 3, 4, 5], 3);
    should.equal(result, 2);
  });

  it('should return 3 for 4 in [1, 2, 3, 4, 5]', function() {
    var result = binarySearch([1, 2, 3, 4, 5], 4);
    should.equal(result, 3);
  });

  it('should return 4 for 5 in [1, 2, 3, 4, 5]', function() {
    var result = binarySearch([1, 2, 3, 4, 5], 5);
    should.equal(result, 4);
  });

  it('should return 3 for 4 in [1, 2, 3, 4, 5, 6]', function() {
    var result = binarySearch([1, 2, 3, 4, 5], 4);
    should.equal(result, 3);
  });

  it('should return 3 for 45 in [11, 22, 33, 45, 53, 62]', function() {
    var result = binarySearch([11, 22, 33, 45, 53, 62], 45);
    should.equal(result, 3);
  });

  it('should return null for 55 in [11, 22, 33, 45, 53, 62]', function() {
    var result = binarySearch([11, 22, 33, 45, 53, 62], 55);
    should.equal(result, null);
  });

  it('should not use native indexOf method', function() {
    // Don't use indexOf! You're supposed to be writing binary search.
    // Spying on Array.prototype.indexOf
    sinon.spy(Array.prototype, 'indexOf');

    var result = binarySearch([1, 2, 3], 2);

    // We expect indexOf to be called zero times
    should.equal(Array.prototype.indexOf.callCount, 0);

    Array.prototype.indexOf.restore();
  });

  it('should not use native slice method', function() {
    // What's the time complexity of slice?
    // What should the time complexity of binarySearch be?
    // hint: they aren't the same!

    // Spying on Array.prototype.slice
    sinon.spy(Array.prototype, 'slice');

    var result = binarySearch([1, 2, 3], 2);

    // We expect slice to be called zero times
    should.equal(Array.prototype.slice.callCount, 0);

    Array.prototype.slice.restore();
  });

});



