const knex = require('knex');

const configuration = require('../../knexfile');
// fazendo a conexao
const connection = knex(configuration.development);

module.exports = connection;