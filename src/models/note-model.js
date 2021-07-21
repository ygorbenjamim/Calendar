const mongo = require('mongoose');

const dataSchema = mongo.Schema({
  name: String,
  status: Boolean,
}, { timestamp: true });

const Note = mongo.model('notes', dataSchema);
module.exports = Note;