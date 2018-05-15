/*jshint esversion: 6 */
/**
 * Write a function `f(a, b)` which takes two strings as arguments and returns a
 * string containing the characters found in both strings (without duplication), in the
 * order that they appeared in `a`. Remember to skip spaces and characters you
 * have already encountered!
 *
 * Example: commonCharacters('acexivou', 'aegihobu')
 * Returns: 'aeiou'
 *
 * Extra credit: Extend your function to handle more than two input strings.
 */



var commonCharacters = function(string1, string2) {

  let result = null;

  if (arguments.length === 0) {
    return result;
  }

  if (arguments.length === 1) {
    string1 = string1
      .split('')
      .sort()
      .join('');
    return string1;
  }

  for (var i = 1; i < arguments.length; i++) {

    if (i === 1) {
      for (var j = 0; j < arguments[i].length; j++) {
        if (string1.includes(string2[j])) {
          if (!result) {
            result = string2[j];
          } else {
            result += string2[j];
          }
        }
      }
    } else {
      for (var k = 0; k < result.length; k++) {
        let testChar = result[k];
        if (!arguments[i].includes(result[k])) {
          result.splice(k, 1);
        }
      }
    }

  }

  if (result) {
    result.sort();
  }

  return null;
};
