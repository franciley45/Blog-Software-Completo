const { expect } = require('chai');
const { stub, restore } = require('sinon')
const milagreService = require('../../../src/services/milagreService')
const milagreModel = require('../../../src/models/milagreModel')
const { mockPots } = require('./mocks/milagreService.mock')

describe('milagre services', function () {
  it('testa return getAll', async function () {
    stub(milagreModel, 'getAll').resolves(mockPots);

    const result = await milagreService.getAll()
    expect(result).to.be.deep.equal(mockPots);
  });

  it('testa return getAllByID', async function () {
    stub(milagreModel, 'getAllByID').resolves(mockPots[0]);

    const result = await milagreService.getAllByID(1)
    const response = { status: null, message: mockPots[0] }
    expect(result).to.be.deep.equal(response);
  });

  it('testa return getAllByID Post não encontrado', async function () {
    stub(milagreModel, 'getAllByID').resolves(undefined);

    const result = await milagreService.getAllByID(1)
    const response = { status: 404, message: 'Post não encontrado' }
    expect(result).to.be.deep.equal(response);
  });

  it('testa return newPost', async function () {
    stub(milagreModel, 'newPost').resolves(mockPots[0]);
    const { title, date, milagres, user_id } = mockPots[0]

    const result = await milagreService.newPost(title, date, milagres, user_id)
    const response = { status: null, message: mockPots[0] }
    expect(result).to.be.deep.equal(response);
  });

  it('testa return newPost Todos os campos tem que esta preenchido', async function () {
    stub(milagreModel, 'newPost').resolves(mockPots[0]);
    const { title } = mockPots[0]

    const result = await milagreService.newPost(title)
    const response = { status: 400, message: 'Todos os campos tem que esta preenchido' }
    expect(result).to.be.deep.equal(response);
  });

  it('testa return updatePost', async function () {
    stub(milagreModel, 'updatePost').resolves(mockPots[0]);
    const { title, date, milagres, posts_id, user_id } = mockPots[0]

    const result = await milagreService.updatePost(title, date, milagres, posts_id, user_id)
    const response = { status: null, message: mockPots[0] }
    expect(result).to.be.deep.equal(response);
  });

  it('testa return updatePost Todos os campos tem que esta preenchido', async function () {
    stub(milagreModel, 'updatePost').resolves(mockPots[0]);
    const { title } = mockPots[0]

    const result = await milagreService.updatePost(title)
    const response = { status: 400, message: 'Todos os campos tem que esta preenchido' }
    expect(result).to.be.deep.equal(response);
  });

  it('testa return deletePost', async function () {
    stub(milagreModel, 'deletePost').resolves(undefined);

    const result = await milagreService.deletePost(1)
    const response = { status: 200, message: 'post deletado com sucesso' }
    expect(result).to.be.deep.equal(response);
  });

  afterEach(restore);
})