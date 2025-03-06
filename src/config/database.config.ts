const knex = require('knex')({
    client: 'pg',
    connection: {
      host: '127.0.0.1',
      port: 5432,
      user: 'labelle',
      password: 'make25',
      database: 'labellemake',
    },
  });
  
  module.exports = knex;
  