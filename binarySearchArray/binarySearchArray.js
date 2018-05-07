/*jshint esversion: 6 */

/*
 * Given a sorted array, find the index of an element
 * using a binary search algorithm.
 *
 * Example usage:
 *
 * var index = binarySearch([1, 2, 3, 4, 5], 4);
 * console.log(index); // 3
 * var index = binarySearch([1, 2, 3, 4, 5], 8);
 * console.log(index); // null
 */

//My solution with O(N)/linear time complexity when logarithmic O(log n)

// var binarySearch = function (array, target, index) {

//   let middleIndex = Math.floor(array.length / 2);

//   if (typeof index == 'undefined') {
//     index = 0;
//   }

//   if (!array.length) {
//     return null;
//   }

//   if (array[middleIndex] === target) {
//     return middleIndex + index;
//   }

//   if (target > array[middleIndex]) {
//     return binarySearch(array.slice(middleIndex + 1), target, middleIndex + 1);
//   } else {
//     return binarySearch(array.slice(0, middleIndex), target, index);
//   }

// };

//Their solution with O(log n) time complexity

var binarySearch = function (array, target) {

  let sub = (low, high) => {

    let mid = Math.floor((high - low) / 2) + low;

    if (array[mid] === target) {
      return mid;
    }

    if (low === high) {
      return null;
    }

    if (target > array[mid]) {
      return sub(mid + 1, high);
    } else {
      return sub(0, mid);
    }

  };

  return sub(0, array.length);

};

module.exports = binarySearch;