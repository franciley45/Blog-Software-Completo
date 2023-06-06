const { expect } = require('chai');
const { stub, restore } = require('sinon')
const loginService = require('../../../src/services/loginService')
const loginModel = require('../../../src/models/loginModel')
const { mockLogin } = require('./mocks/loginService.mock')

describe('login services', function () {
  it('testa return login', async function () {
    stub(loginModel, 'login').resolves(mockLogin);

    const { status } = await loginService.login('user1@gmail.com', '123')
    expect(status).to.be.deep.equal(null);
  });

  it('testa return login User não cadrastrado ou password errado', async function () {
    stub(loginModel, 'login').resolves(undefined);

    const result = await loginService.login('user1@gmail.com', '123Fubá')
    const response = { status: 400, message: 'User não cadrastrado ou password errado' }
    expect(result).to.be.deep.equal(response);
  });

  it('testa return login Todos os campos tem que esta preenchido', async function () {

    const result = await loginService.login('user1@gmail.com')
    const response = { status: 400, message: 'Todos os campos tem que esta preenchido' }
    expect(result).to.be.deep.equal(response);
  });

  afterEach(restore);
})