const { expect } = require('chai');
const { stub, restore } = require('sinon')
const milagreModel = require('../../../src/models/milagreModel')
const connection = require('../../../src/models/db/connection')
const { mockMilagresAll } = require('./mocks/milagreModel.mock')

describe('milagre Model', function () {
  it('testa return getAll', async function () {
    stub(connection, 'execute').resolves([mockMilagresAll]);
    
    const result = await milagreModel.getAll()
    expect(result).to.be.deep.equal(mockMilagresAll);
  });

  it('testa return getAllByID', async function () {
    stub(connection, 'execute').resolves([mockMilagresAll]);

    const result = await milagreModel.getAllByID(2)
    expect(result).to.be.deep.equal(mockMilagresAll[0]);
  });

  it('testa return newPost', async function () {
    stub(connection, 'execute').resolves([{ insertId: 2 }]);

    const result = await milagreModel.newPost('Barbara Liskov', '2023-01-01T14:42:59.000Z', 'cristo salva', 1)
    expect(result).to.be.deep.equal(mockMilagresAll[0]);
  });

  it('testa return updatePost', async function () {
    stub(connection, 'execute').resolves(undefined);

    const result = await milagreModel.updatePost('Barbara Liskov', '2023-01-01T14:42:59.000Z', 'cristo salva', 2, 1)
    expect(result).to.be.deep.equal(mockMilagresAll[0]);
  });

  it('testa return deletePost', async function () {
    stub(connection, 'execute').resolves(undefined);

    const result = await milagreModel.deletePost(2)
    expect(result).to.be.deep.equal(undefined);
  });

  afterEach(restore);
})