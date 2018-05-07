/*jshint esversion: 6 */

var should = require('should');
var BinaryHeap = require('./binaryHeap.js');


describe('BinaryHeap', function () {

  it('should exist', function () {
    should.exist(BinaryHeap);
  });

  it('should be a Function', function () {
    BinaryHeap.should.be.a.Function();
  });

});

describe('BinaryHeap.prototype.insert', function () {

  it('should exist', function () {
    should.exist(BinaryHeap.prototype.insert);
    BinaryHeap.prototype.insert.should.be.a.Function();
  });

  it('should add a value to an empty BinaryHeap instance', function () {
    let binaryHeap = new BinaryHeap();
    binaryHeap.insert(0);

    binaryHeap._heap.length.should.equal(1);
    binaryHeap._heap[0].should.equal(0);
  });

  it('should add multiple values to a Binary Heap when called multiple times', function () {
    let binaryHeap = new BinaryHeap();
    binaryHeap.insert(3);
    binaryHeap.insert(2);
    binaryHeap.insert(1);
    binaryHeap.insert(0);

    binaryHeap._heap.includes(3).should.be.True();
    binaryHeap._heap.includes(2).should.be.True();
    binaryHeap._heap.includes(1).should.be.True();
    binaryHeap._heap.includes(0).should.be.True();

    binaryHeap._heap[0].should.equal(0);
    binaryHeap._heap[1].should.equal(1);
    binaryHeap._heap[2].should.equal(2);
    binaryHeap._heap[3].should.equal(3);
  });

  it('should maintain sorting based on BinaryHeap._compare between a parent node and its children', function () {
    var binaryHeap = new BinaryHeap();
    binaryHeap.insert(4);
    binaryHeap.insert(5);
    binaryHeap.insert(9);
    binaryHeap.insert(8);
    binaryHeap.insert(1);

    var compare = binaryHeap._compare;
    var heap = binaryHeap._heap;

    // heap[0] is the parent of heap[1] and heap[2]
    // heap[1] is the parent of heap[3] and heap[4]
    compare(heap[0], heap[1]).should.be.true();
    compare(heap[0], heap[2]).should.be.true();
    compare(heap[1], heap[3]).should.be.true();
    compare(heap[1], heap[4]).should.be.true();
  });

});

describe('BinaryHeap.prototype.removeRoot', function () {

  it('should exist', function () {
    should.exist(BinaryHeap.prototype.insert);
    BinaryHeap.prototype.removeRoot.should.be.a.Function();
  });

  it('should return `undefined` on an empty heap', function () {
    let binaryHeap = new BinaryHeap();

    let root = binaryHeap.removeRoot();
    should.equal(root, undefined);
  });

  it('should remove a single element from BinaryHeap._heap', function () {
    let binaryHeap = new BinaryHeap();

    binaryHeap.insert(1);

    let root = binaryHeap.removeRoot();

    root.should.equal(1);
  });

  it('should return the root node in BinaryHeap._heap', function () {
    let binaryHeap = new BinaryHeap();

    binaryHeap.insert(5);
    binaryHeap.insert(4);
    binaryHeap.insert(3);
    binaryHeap.insert(2);

    binaryHeap.removeRoot().should.equal(2);
  });

  it('should return the root node in BinaryHeap._heap', function () {
    var binaryHeap = new BinaryHeap();
    binaryHeap.insert(8);
    var actualRoot = binaryHeap._heap[0];
    var removedRoot = binaryHeap.removeRoot();

    should.equal(actualRoot, removedRoot);

    binaryHeap.insert(6);
    binaryHeap.insert(4);
    binaryHeap.insert(9);

    actualRoot = binaryHeap._heap[0];
    removedRoot = binaryHeap.removeRoot();

    should.equal(actualRoot, removedRoot);
  });

  it('should maintain sorting between parents and children after removing nodes', function () {

    let binaryHeap = new BinaryHeap();
    binaryHeap.insert(2);
    binaryHeap.insert(4);
    binaryHeap.insert(5);
    binaryHeap.insert(6);

    // heap[0] is the parent of heap[1] and heap[2]
    // heap[1] is the parent of heap[3] and heap[4]

    binaryHeap.removeRoot();

    binaryHeap._heap[0].should.equal(4);
    binaryHeap._heap[1].should.equal(6);
    binaryHeap._heap[2].should.equal(5);
  });

});

