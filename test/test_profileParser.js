const chai = require('chai');
const sinonChai = require('sinon-chai');

const sinon = require('sinon');
const fs = require('fs');

const { getProfiles } = require('../bin');

const { expect } = chai;
chai.use(sinonChai);

describe('get profiles', function () {
  it('should show all profiles even with comment in json', function () {
    const stub = sinon.stub(fs, 'readFileSync').returns('{"default": {}, /* */ "dev": {}, "chrome-wpe": {} }');

    const values = getProfiles();
    expect(values).to.deep.equal(['default', 'dev', 'chrome-wpe']);

    stub.restore();
  });

  it('should throw error that no file is here', function () {
    const failSpy = sinon.spy();
    try {
      getProfiles();
    } catch (e) {
      failSpy();
    }

    expect(failSpy).to.have.been.called;
  });
});
