/*jshint esversion: 6 */
/*
 *  Write a function that takes as its input a string and returns an array of
 *  arrays as shown below sorted in descending order by frequency and then by
 *  ascending order by character.
 *
 *       :: Example ::
 *
 *  characterFrequency('mississippi') ===
 *  [
 *    ['i', 4],
 *    ['s', 4],
 *    ['p', 2],
 *    ['m', 1]
 *  ]
 *
 *       :: Example2 ::
 *
 *  characterFrequency('miaaiaaippi') ===
 *  [
 *    ['a', 4],
 *    ['i', 4],
 *    ['p', 2],
 *    ['m', 1]
 *  ]
 *
 *       :: Example3 ::
 *
 *  characterFrequency('mmmaaaiiibbb') ===
 *  [
 *    ['a', 3],
 *    ['b', 3],
 *    ['i', 3],
 *    ['m', 3]
 *  ]
 *
 */


var characterFrequency = function(string) {

  let characters = {};

  for (var i = 0; i < string.length; i++) {
    let char = string[i];
    if (characters[char]) {
      characters[char]++;
    } else {
      characters[char] = 1;
    }
  }

  let charKeys = Object.keys(characters);
  let result = [];
  for (var j = 0; j < charKeys.length; j++) {
    result.push([charKeys[j], characters[charKeys[j]]]);
  }

  result.sort((a, b) => {
    if ((b[1] - a[1]) === 0) {
      if (a[0] < b[0]) {
        return -1;
      }

      if ((b[0] < a[0])) {
        return 1;
      }

      return 0;
    } else {

      return b[1] - a[1];

    }
  });

  return result;
};

module.exports = characterFrequency;