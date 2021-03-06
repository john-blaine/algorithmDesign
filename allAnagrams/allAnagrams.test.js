var should = require('should');
var allAnagrams = require('./allAnagrams.js');

describe('allAnagrams', function() {
  it('should exist', function() {
    should.exist(allAnagrams);
  });

  it('should be a function', function() {
    allAnagrams.should.be.a.Function();
  });

  it('should return an array', function() {
    var result = allAnagrams('hello');
    should.exist(result);
    result.should.be.an.instanceof(Array);
  });

  it('should return an array with a single character', function() {
    var result = allAnagrams('c');
    result.should.be.eql(['c']);
  });

  it('should return an array of anagrams that contains `lives` for input `elvis`', function() {
    var result = allAnagrams('elvis');
    var found = result.indexOf('lives') !== -1;
    found.should.be.true();
  });

  it('should return an array of anagrams that contains `badcredit` for input `debitcard`', function() {
    var result = allAnagrams('debitcard');
    var found = result.indexOf('badcredit') !== -1;
    found.should.be.true();
  });

  it('should return all anagrams for \'ab\'', function() {
    var expected = ['ab', 'ba'];
    var result = allAnagrams('ab');
    for (var i = 0; i < expected.length; i++) {
      let found = result.indexOf(expected[i]) !== -1;
      found.should.be.true();
    }
  });

  it('should return all anagrams for \'abc\'', function() {
    var expected = ['abc', 'acb', 'bac', 'bca', 'cab', 'cba'];
    var result = allAnagrams('abc');
    result.sort().should.be.eql(expected);
    for (var i = 0; i < expected.length; i++) {
      let found = result.indexOf(expected[i]) !== -1;
      found.should.be.true();
    }
  });

  it('should return all anagrams for \'apps\'', function() {
    var expected =
    [ 'apps', 'apsp', 'aspp', 'paps', 'pasp', 'ppas',
      'ppsa', 'psap', 'pspa', 'sapp', 'spap', 'sppa' ];
    var result = allAnagrams('apps');
    result.sort().should.be.eql(expected);
    for (var i = 0; i < expected.length; i++) {
      let found = result.indexOf(expected[i]) !== -1;
      found.should.be.true();
    }
  });

  it('should return all __unique__ anagrams for \'apps\'', function() {
    // if you've gotten this far, you're doing awesome. this last test
    // is to check if you're returning an anagram array without duplicates
    var expected = [ 'apps', 'apsp', 'aspp', 'paps', 'pasp', 'ppas', 'ppsa',
      'psap', 'pspa', 'sapp', 'spap', 'sppa' ];
    var result = allAnagrams('apps');
    result.length.should.be.equal(expected.length);
  });

  it('should not use underscore\'s `uniq`', function() {
    // this just checks your code for any usage of `_.uniq`
    // NOTE: this test _might_ still fail even if you technically don't use
    // `_.uniq` (ie., if you hae commented out code that still references
    // `_.uniq` in your solution.)
    var usesUniq = allAnagrams.toString().match(/\s*_\.uniq/) === null;
    usesUniq.should.be.true();
  });
});
