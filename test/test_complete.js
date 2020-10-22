const { expect } = require('chai');
const sinon = require('sinon');
const fs = require('fs');
const { complete } = require('../bin');

describe('complete', function () {
  describe('complete commands', function () {
    it('should show all tasks', function () {
      const values = complete('', '', '', '', 'grunt');

      expect(values).to.deep.equal(['serve', 'package']);
    });

    it('should show all tasks begining with "packa" ', function () {
      const values = complete('', '', '', 'packa', 'grunt');

      expect(values).to.deep.equal(['package']);
    });

    it('should show all tasks begining with "ser" ', function () {
      const values = complete('', '', '', 'ser', 'grunt');

      expect(values).to.deep.equal(['serve']);
    });
  });

  describe('complete profiles', function () {
    let stub;
    beforeEach(function () {
      stub = sinon.stub(fs, 'readFileSync').returns('{"default": {}, "dev": {}, "chrome-wpe": {} }');
    });

    afterEach(function () {
      stub.restore();
    });

    it('should show all profiles', function () {
      const values = complete('', '', '', '', '-p');
      expect(values).to.deep.equal(['default', 'dev', 'chrome-wpe']);
      fs.readFileSync.restore();
    });
    it('should filter profiles from already typed', function () {
      const values = complete('', '', '', 'de', '-p');
      expect(values).to.deep.equal(['default', 'dev']);
    });
  });
});
