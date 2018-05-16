/*jshint esversion: 6 */
/*
 * Find the first item that occurs an even number of times in an array.
 * Remember to handle multiple even-occurrence items and return the first one.
 * Return null if there are no even-occurrence items.
*/

/*
 * example usage:
 * var onlyEven = evenOccurrence([1, 7, 2, 4, 5, 6, 8, 9, 6, 4]);
 * console.log(onlyEven); //  4
*/


var evenOccurrence = function(arr) {
  let occData = {};
  let result = null;

  for (var i = 0; i < arr.length; i++) {
    if (!occData[arr[i]]) {
      occData[arr[i]] = [false, i];
    } else {
      occData[arr[i]][0] = !occData[arr[i]][0];
    }
  }

  let occKeys = Object.keys(occData);

  for (var j = 0; j < occKeys.length; j++) {
    let occKey = occData[occKeys[j]];
    if (occKey[0]) {
      if (!result || (result[1] > occKey[1])) {
        result = [occKeys[j], occKey[1]];
      }
    }
  }

  if (result && !isNaN(Number(result[0]))) {
    result[0] = Number(result[0]);
  }

  return result ? result[0] : result;

};

module.exports = evenOccurrence;