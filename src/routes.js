const express = require('express');
const routes = express.Router();
const note = require('./controller/note-controller');

// Rotas das anotações
routes.get('/notes', note.selectAll);
routes.post('/notes/create', note.create);
routes.put('/notes/update', note.update);
routes.delete('/notes/remove/:_id', note.remove);

module.exports = routes;