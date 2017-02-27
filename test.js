'use strict';

require('mocha');
var assert = require('assert');
var forIn = require('./');

describe('.forIn()', function() {
  it('should loop through all properties in the object.', function() {
    var obj = {a: 'foo', b: 'bar', c: 'baz'};
    var values = [];
    var keys = [];

    forIn(obj, function(value, key, o) {
      assert.deepEqual(o, obj);
      keys.push(key);
      values.push(value);
    });

    assert.deepEqual(keys, ['a', 'b', 'c']);
    assert.deepEqual(values, ['foo', 'bar', 'baz']);
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

    assert.deepEqual(keys, ['a']);
    assert.deepEqual(values, ['foo']);
  });
});
