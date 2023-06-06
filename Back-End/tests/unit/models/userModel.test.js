const { expect } = require('chai');
const { stub, restore } = require('sinon')
const userModel = require('../../../src/models/userModel')
const connection = require('../../../src/models/db/connection')
const { mockUserAll, mockUserCreate } = require('./mocks/userModel.mocks')

describe('user Model', function () {
  it('testa return getUserAll', async function () {
    stub(connection, 'execute').resolves([mockUserAll]);
    
    const result = await userModel.getUserAll()
    expect(result).to.be.deep.equal(mockUserAll);
  });

  it('testa return usersById ', async function () {
    stub(connection, 'execute').resolves([mockUserAll]);

    const result = await userModel.getUserId(1)
    expect(result).to.be.deep.equal(mockUserAll[0]);
  });

  it('testa return getUserByEmail ', async function () {
    stub(connection, 'execute').resolves([mockUserAll]);

    const result = await userModel.getUserByEmail("user1@gmail.com")
    expect(result).to.be.deep.equal(mockUserAll[0]);
  });

  it('testa return createUser ', async function () {
    stub(connection, 'execute').resolves([{ insertId: 2 }]);

    const result = await userModel.createUser(mockUserCreate)
    expect(result).to.be.deep.equal(2);
  });

  afterEach(restore);
})
