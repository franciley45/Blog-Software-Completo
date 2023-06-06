const chai = require('chai');
const { expect } = require('chai');
const { stub, restore } = require('sinon')
const sinonChai = require('sinon-chai');
const userServices = require('../../../src/services/Userservice');
const userController = require('../../../src/controllers/userController')
const { mockUserAllController } = require('./mocks/userController.mock');

chai.use(sinonChai);

const token =  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImVtYWlsIjoidXNlcjEyMzMzQGdtYWlsLmNvbSIsInVzZXJfaWQiOjE0LCJuYW1lIjoidXNlcjEifSwiaWF0IjoxNjczMDMyMjgwLCJleHAiOjE2NzM2MzcwODB9.TCmJiuUQKVqev-GxMUBCXwCwO4Pw1f7azfuaeEiu_rg"

describe('user Controller', function () {
  it('testa return getUserAll', async function () {
    stub(userServices, 'getUserAll').resolves(mockUserAllController);

    const req = {};

    const res = {};
    res.status = stub().returns(res);
    res.json = stub().returns();

    await userController.getUserAll(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(mockUserAllController);
  });

  it('testa return getUserId', async function () {
    stub(userServices, 'getUserId').resolves({ type: null, message: mockUserAllController[0] });

    const req = { params: { id: 1 } };

    const res = {};
    res.status = stub().returns(res);
    res.json = stub().returns();

    await userController.getUserId(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(mockUserAllController[0]);
  });

  it('testa return getUserId User não encontrado', async function () {
    stub(userServices, 'getUserId').resolves({ status: 404, message: 'User não encontrado' });

    const req = { params: { id: 99 } };

    const res = {};
    res.status = stub().returns(res);
    res.json = stub().returns();

    await userController.getUserId(req, res);

    expect(res.status).to.have.been.calledWith(404);
    expect(res.json).to.have.been.calledWith({ message: 'User não encontrado' });
  });

  it('testa return createUser', async function () {
    stub(userServices, 'createUser').resolves({ type: null, message:  token  });
   

    const req = { body: { name: 'user', email: 'user892@gmail.com', password: '123' } };

    const res = {};
    res.status = stub().returns(res);
    res.json = stub().returns();

    await userController.createUser(req, res);

    expect(res.status).to.have.been.calledWith(201);
    expect(res.json).to.have.been.calledWith({ token });
  });

  it('testa return createUser User already registered', async function () {
    stub(userServices, 'createUser').resolves({ status: 409, message: 'User already registered' });
   

    const req = { body: { name: 'user', email: 'user1@gmail.com', password: '123' } };

    const res = {};
    res.status = stub().returns(res);
    res.json = stub().returns();

    await userController.createUser(req, res);

    expect(res.status).to.have.been.calledWith(409);
    expect(res.json).to.have.been.calledWith({ message: 'User already registered' });
  });

  afterEach(restore);
})