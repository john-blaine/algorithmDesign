/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. At first, don't worry about
 * repeated strings.  What time complexity is your solution?
 *
 * Extra credit: Deduplicate your return array without using uniq().
 */

/**
  * example usage:
  * var anagrams = allAnagrams('abc');
  * console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
  */

var allAnagrams = function(string) {
  anagrams = {};

  function combos(remainingString, currentAnagram) {

    if (!remainingString.length) {
      anagrams[currentAnagram] = true;
    }

    for (var i = 0; i < remainingString.length; i++) {
      combos(remainingString.slice(0, i) + remainingString.slice(i + 1), currentAnagram + remainingString[i]);
    }
  }

  combos(string, '');

  return Object.keys(anagrams);
};

module.exports = allAnagrams;
