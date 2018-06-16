/*jshint esversion: 6 */
/*
 * Implement a linked list using the pseudoclassical instantiation pattern.
 *
 * Your linked list should have methods called "addToTail", "removeHead", and "contains."
 *
 */

// EXAMPLE USAGE:
// var list = new LinkedList();
// list.tail;         //yields 'null'
// list.addToTail(4);
// list.addToTail(5);
// list.head.value;   //yields '4';
// list.contains(5);  //yields 'true';
// list.contains(6);  //yields 'false';
// list.removeHead(); //yields '4';
// list.tail.value;   //yields '5';
// list.removeHead(); //yields '5';
// list.removeHead(); //yields 'null';


var LinkedList = function() {
  this.head = null;
  this.tail = null;
};

LinkedList.prototype.addToTail = function(value) {
  let node = this.makeNode(value);
  if (!this.head) { this.head = node; }
  if (this.tail) { this.tail.next = node; }
  this.tail = node;
};

LinkedList.prototype.removeHead = function() {
  let current = this.head;

  if (!current) {return null};

  if (!current.next) {
    this.head = null;
    this.tail = null;
    return current.value;
  }

  this.head = current.next;
  return current.value;
};

LinkedList.prototype.contains = function(value) {
  let testNum = this.head;
  while (testNum) {
    if (testNum.value === value) return true;
    testNum = testNum.next;
  }
  return false;
};

LinkedList.prototype.makeNode = function(value) {
  node = {'value': value, 'next': null};
  return node;
};

module.exports = LinkedList;