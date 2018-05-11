const should = require('should');
const Tree = require('./commonAncestor.js');

describe('Tree', function() {
  it('should exist', function() {

  });
  it('should be a function', function() {

  });
  it('should be a constructor', function() {

  });
  describe('#addChild()', function() {
    it('should exist', function() {

    });
    it('should be a function', function() {

    });
    it('should add a child node', function() {

    });
    it('should work for childrens children', function() {

    });
  });
  describe('#isDescendant', function() {
    it('should exist', function() {

    });
    it('should be a function', function() {

    });
    it('should check for child nodes', function() {

    });
  });
  describe('#removeChild', function() {
    it('should exist', function() {

    });
    it('should be a function', function() {

    });
    it('should remove children', function() {

    });
  });
  describe('#getAncestorPath', function() {
    it('should exist', function() {

    });
    it('should be a function', function() {

    });
    it('should return the path if child is immediate child', function() {
      // make sure your ancestor path is returning them eldest to youngest
      // ie., [mom, me] _not_ [me, mom]

    });
    it('should return the path to a child node', function() {

    });
    it('should fail to return the a path if the child is not an anester', function() {

    });
  });
  describe('#getClosestCommonAncestor', function() {
    it('should exist', function() {

    });
    it('should be a function', function() {

    });
    it('should return the root tree when compared to the root tree', function() {

    });
    it('should return null for children that are not ancestors', function() {

    });
    it('should return lowest common ancestors', function() {

    });
    it('should work for large trees', function() {
      var child;
      var tmp;
      var left;
      var right;
      var expectedAncestor;
      var commonAncestor;

      // just a complicated tree to test against.
      var root = new Tree();
      for (var i = 0; i < 4; i++) {
        child = new Tree();
        for (var j = 0; j < 3; j++) {
          child.addChild(new Tree());
        }
        root.addChild(child);
      }

      child = root;
      for (var i = 0; i < 10; i++) {
        tmp = new Tree();
        child.addChild(tmp);
        child = tmp;
      }

      expectedAncestor = child;

      left = new Tree();
      child.addChild(left);
      for (var i = 0; i < 10; i++) {
        tmp = new Tree();
        left.addChild(tmp);
        left = tmp;
      }

      right = new Tree();
      child.addChild(right);
      for (var i = 0; i < 10; i++) {
        tmp = new Tree();
        right.addChild(tmp);
        right = tmp;
      }

      for (var i = 0; i < 4; i++) {
        child = new Tree();
        for (var j = 0; j < 3; j++) {
          child.addChild(new Tree());
        }
        root.addChild(child);
      }

      commonAncestor = root.getClosestCommonAncestor(left, right);
      should.exist(commonAncestor);
      commonAncestor.should.equal(expectedAncestor);
    });
  });
});
