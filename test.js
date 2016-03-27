'use strict';

require('mocha');
var should = require('should');
var forIn = require('./');

describe('.forIn()', function() {
  it('should loop through all properties in the object.', function() {
    var obj = {a: 'foo', b: 'bar', c: 'baz'};
    var values = [];
    var keys = [];

    forIn(obj, function(value, key, o) {
      o.should.eql(obj);
      keys.push(key);
      values.push(value);
    });

    keys.should.eql(['a', 'b', 'c']);
    values.should.eql(['foo', 'bar', 'baz']);
  });

  it('should break the loop early if `false` is returned.', function() {
    var obj = {a: 'foo', b: 'bar', c: 'baz'};
    var values = [];
    var keys = [];

    forIn(obj, function(value, key, o) {
      if (key === 'b') {
        return false;
      }
      keys.push(key);
      values.push(value);
    });

    keys.should.eql(['a']);
    values.should.eql(['foo']);
  });
});
