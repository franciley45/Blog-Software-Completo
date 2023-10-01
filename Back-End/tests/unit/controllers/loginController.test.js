const chai = require('chai');
const { expect } = require('chai');
const { stub, restore } = require('sinon')
const sinonChai = require('sinon-chai');
const loginServices = require('../../../src/services/loginService');
const loginController = require('../../../src/controllers/loginController')

chai.use(sinonChai);

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImVtYWlsIjoidXNlcjEyMzMzQGdtYWlsLmNvbSIsInVzZXJfaWQiOjE0LCJuYW1lIjoidXNlcjEifSwiaWF0IjoxNjczMDMyMjgwLCJleHAiOjE2NzM2MzcwODB9.TCmJiuUQKVqev-GxMUBCXwCwO4Pw1f7azfuaeEiu_rg"

describe('login Controller', function () {
  it('testa return login', async function () {
    stub(loginServices, 'login').resolves({ type: null, message: token });


    const req = { body: { email: 'user1@gmail.com', password: '123' } };

    const res = {};
    res.status = stub().returns(res);
    res.json = stub().returns();

    await loginController.login(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(token);
  });

  
  it('testa return login Todos os campos tem que esta preenchido', async function () {
    stub(loginServices, 'login').resolves({ status: 400, message: 'Todos os campos tem que esta preenchido' });


    const req = { body: { email: 'user1@gmail.com' } };

    const res = {};
    res.status = stub().returns(res);
    res.json = stub().returns();

    await loginController.login(req, res);

    expect(res.status).to.have.been.calledWith(400);
    expect(res.json).to.have.been.calledWith({ message: 'Todos os campos tem que esta preenchido' });
  });

  afterEach(restore);
})