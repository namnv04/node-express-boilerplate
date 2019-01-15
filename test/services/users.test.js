const app = require('../../src/app');

describe('\'users\' service', () => {
  it('registered the service', () => {
    const service = app.service('users');
    expect(service).toBeTruthy();
  });
  it('registered the service', async () => {
    const service = app.service('users');
    const createRes = await service.create({}, {});
    expect(createRes).toEqual({
      token: 'ramdon-token-encoded'
    });
  });
});
