/*jshint esversion: 6 */
/**
 * Create a hash table with `insert()`, `retrieve()`, and `remove()` methods.
 * Be sure to handle hashing collisions correctly.
 * Set your hash table up to double the storage limit as
 * soon as the total number of items stored is greater than
 * 3/4th of the number of slots in the storage array.
 * Resize by half whenever utilization drops below 1/4.
 */

// This is a "hashing function". You don't need to worry about it, just use it
// to turn any string into an integer that is well-distributed between
// 0 and max - 1
var getIndexBelowMaxForKey = function(str, max) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash << 5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};

var makeHashTable = function() {
  var result = {};
  var storage = [];
  var storageLimit = 4;
  var size = 0;

  result.resizeTable = function(sizeUp) {
    let oldStorage = storage;
    storage = [];

    if (sizeUp) {
      storageLimit = storageLimit * 2;
      for (var i = 0; i < oldStorage.length; i++) {
        if (oldStorage[i]) {
          for (var j = 0; j < oldStorage[i].length; j++) {
            let temp = oldStorage[i][j];
            this.insert(temp[0], temp[1]);
          }
        }
      }
    } else {
      storageLimit = storageLimit / 2;
      for (var i = 0; i < oldStorage.length; i++) {
        if (oldStorage[i]) {
          for (var j = 0; j < oldStorage[i].length; j++) {
            let temp = oldStorage[i][j];
            this.insert(temp[0], temp[1]);
          }
        }
      }
    }
  };

  result.insert = function(key, value) {
    if (typeof key !== 'string') {
      return null;
    }

    if (typeof value === 'undefined') {
      value = null;
    }

    let index = getIndexBelowMaxForKey(key, storageLimit);


    if (!Array.isArray(storage[index])) {
      storage[index] = [];
      storage[index].push([key, value]);
      size++;
    } else {
      let hasKey = false;
      for (var i = 0; i < storage[index].length; i++) {
        if (storage[index][i][0] === key) {
          storage[index][i][1] = value;
        }
      }

      if (!hasKey) {
        storage[index].push([key, value]);
        size++;
      }
    }

    if ((size / storageLimit) > 0.75) {
      this.resizeTable(true);
    }
  };

  result.retrieve = function(key) {
    let index = getIndexBelowMaxForKey(key, storageLimit);

    if (!storage[index]) {
      return undefined;
    }

    for (var i = 0; i < storage[index].length; i++) {
      if (storage[index][i][0] === key) {
        return storage[index][i][1];
      }
    }

    return undefined;
  };

  result.remove = function(key) {
    let index = getIndexBelowMaxForKey(key, storageLimit);

    if (!storage[index]) {
      return undefined;
    } else {
      for (var i = 0; i < storage[index].length; i++) {
        if (storage[index][i][0] === key) {
          let value = storage[index][i][1];
          storage[index].splice(i, 1);
          size--;
          if (storage[index].length === 0) {
            storage[index] = undefined;
          }
          if ((size / storageLimit) < 0.25) {
            this.resizeTable(false);
          }

          return value;
        }
      }
    }

    return undefined;
  };

  return result;
};

module.exports = makeHashTable;