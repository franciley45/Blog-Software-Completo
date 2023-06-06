const chai = require('chai');
const { expect } = require('chai');
const { stub, restore } = require('sinon')
const sinonChai = require('sinon-chai');
const milagreServices = require('../../../src/services/milagreService');
const milagreController = require('../../../src/controllers/milagreController');
const { mockPotsController } = require('./mocks/milagreController.mock');

chai.use(sinonChai);

describe('milagre Controller', function () {
  it('testa return getAll', async function () {
    stub(milagreServices, 'getAll').resolves(mockPotsController);


    const req = {};

    const res = {};
    res.status = stub().returns(res);
    res.json = stub().returns();

    await milagreController.getAll(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(mockPotsController);
  });

  it('testa return getAllByID', async function () {
    stub(milagreServices, 'getAllByID').resolves({ status: null, message: mockPotsController[0] });


    const req = { params: { id: 1 } };

    const res = {};
    res.status = stub().returns(res);
    res.json = stub().returns();

    await milagreController.getAllByID(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(mockPotsController[0]);
  });

  it('testa return getAllByID Post não encontrado', async function () {
    stub(milagreServices, 'getAllByID').resolves({ status: 404, message: 'Post não encontrado' });


    const req = { params: { id: 99 } };

    const res = {};
    res.status = stub().returns(res);
    res.json = stub().returns();

    await milagreController.getAllByID(req, res);

    expect(res.status).to.have.been.calledWith(404);
    expect(res.json).to.have.been.calledWith({ message: 'Post não encontrado' })
  });

  it('testa return newPost', async function () {
    stub(milagreServices, 'newPost').resolves({ status: null, message: mockPotsController[0] });

    const req = { body: { title: "Barbara Liskov", date: "2023-01-03T20:00:02.000Z", milagres: "deus tenha misericordia" }, user: { data: { user_id: 1 } } };

    const res = {};
    res.status = stub().returns(res);
    res.json = stub().returns();

    await milagreController.newPost(req, res);

    expect(res.status).to.have.been.calledWith(201);
    expect(res.json).to.have.been.calledWith(mockPotsController[0])
  });

  it('testa return newPost Todos os campos tem que esta preenchido', async function () {
    stub(milagreServices, 'newPost').resolves({ status: 400, message: 'Todos os campos tem que esta preenchido' });

    const req = { body: { title: "Barbara Liskov" }, user: { data: { user_id: 1 } } };

    const res = {};
    res.status = stub().returns(res);
    res.json = stub().returns();

    await milagreController.newPost(req, res);

    expect(res.status).to.have.been.calledWith(400);
    expect(res.json).to.have.been.calledWith({ message: 'Todos os campos tem que esta preenchido' })
  });

  it('testa return updatePost', async function () {
    stub(milagreServices, 'updatePost').resolves({ status: null, message: mockPotsController[0] });

    const req = { body: { title: "Barbara Liskov", date: "2023-01-03T20:00:02.000Z", milagres: "deus tenha misericordia" }, user: { data: { user_id: 1 } }, params: { id: 1 } };

    const res = {};
    res.status = stub().returns(res);
    res.json = stub().returns();

    await milagreController.updatePost(req, res);

    expect(res.status).to.have.been.calledWith(201);
    expect(res.json).to.have.been.calledWith(mockPotsController[0])
  });

  it('testa return updatePost Todos os campos tem que esta preenchido', async function () {
    stub(milagreServices, 'updatePost').resolves({ status: 400, message: 'Todos os campos tem que esta preenchido' });

    const req = { body: { title: "Barbara Liskov" }, user: { data: { user_id: 1 } }, params: { id: 1 } };

    const res = {};
    res.status = stub().returns(res);
    res.json = stub().returns();

    await milagreController.updatePost(req, res);

    expect(res.status).to.have.been.calledWith(400);
    expect(res.json).to.have.been.calledWith({ message: 'Todos os campos tem que esta preenchido' })
  });

  it('testa return deletePost', async function () {
    stub(milagreServices, 'deletePost').resolves({ status: 200, message: 'post deletado com sucesso' });

    const req = { user: { data: { user_id: 1 } }, params: { id: 1 } };

    const res = {};
    res.status = stub().returns(res);
    res.json = stub().returns();

    await milagreController.deletePost(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith({ message: 'post deletado com sucesso' })
  });

  afterEach(restore);
})