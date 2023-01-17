const { expect } = require('chai');
const { stub, restore } = require('sinon')
const userModel = require('../../../src/models/userModel')
const userService = require('../../../src/services/Userservice')
const { mockUserService } = require('./mocks/userService.mock')

describe('user services', function () {
  it('testa return getUserAll', async function () {
    stub(userModel, 'getUserAll').resolves(mockUserService);

    const result = await userService.getUserAll()
    expect(result).to.be.deep.equal(mockUserService);
  });

  it('testa return getUserId', async function () {
    stub(userModel, 'getUserId').resolves(mockUserService[0]);

    const result = await userService.getUserId(1)
    const response = { status: null, message: mockUserService[0] }
    expect(result).to.be.deep.equal(response);
  });

  it('testa return getUserId User not found', async function () {
    stub(userModel, 'getUserId').resolves(undefined);

    const result = await userService.getUserId(1)
    const response = { status: 404, message: 'User não encontrado' }
    expect(result).to.be.deep.equal(response);
  });

  it('testa return createUser', async function () {
    stub(userModel, 'getUserByEmail').resolves(undefined);
    stub(userModel, 'createUser').resolves(11);

    const { status } = await userService.createUser("user1", "user146@gmail.com", "123")
    expect(status).to.be.deep.equal(null);
  });

  it('testa return createUser User already registered', async function () {
    stub(userModel, 'getUserByEmail').resolves(mockUserService[0]);
    stub(userModel, 'createUser').resolves(11);

    const result = await userService.createUser("user1", "user1@gmail.com", "123")
    const response = { status: 409, message: 'User already registered' };
    expect(result).to.be.deep.equal(response);
  });

  afterEach(restore);
})