const { expect } = require('chai');
const { stub, restore } = require('sinon')
const loginModel = require('../../../src/models/loginModel')
const connection = require('../../../src/models/db/connection')
const { mocklogin } = require('./mocks/loginModel.mock')

describe('login Model', function () {
  it('testa return login', async function () {
    stub(connection, 'execute').resolves([mocklogin]);
    
    const result = await loginModel.login("user1@gmail.com")
    expect(result).to.be.deep.equal(mocklogin[0]);
  });

  afterEach(restore);
})