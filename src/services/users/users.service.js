// Initializes the `users` service on path `/users`
// const createService = require('feathers-mongoose');
// const createModel = require('../../models/users.model');
const hooks = require('./users.hooks');

module.exports = function (app) {
  app.use('/users', new Users(app));
  const service = app.service('users');
  service.hooks(hooks);
};

class Users {
  constructor(app) {
    this.app = app;
  }

  async create() {
    return {
      token: 'ramdon-token-encoded'
    };
  }
}
