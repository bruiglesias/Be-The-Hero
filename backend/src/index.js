const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);

// GET: Buscar informações no backend
// POST: Criar uma informação no backend
// PUT: Alterar uma informação no backend
// DELETE: deleta informações no backend 

// instalando um query builder
// npm install knex
// npm install sqlite3



app.listen(3333);