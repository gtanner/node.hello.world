var expect = require('chai').expect;
var data = require('../src/data');

describe('data', function() {
  describe('get', function() {
    it('returns the default name', function () {
      var result = data.get();
      expect(result.name).to.equal('Gord');
    });

    it('returns the default title', function () {
      var result = data.get();
      expect(result.title).to.equal('Welcome to node');
    });

    it('returns the version', function () {
      var result = data.get();
      expect(result.version).to.equal(process.version);
    });
  });
});
