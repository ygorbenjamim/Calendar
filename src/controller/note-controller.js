const Note = require('../models/note-model');

module.exports = {
  async selectAll(req, res){
    const response = await Note.find();
    console.log('A request was made to fetch all notes.');
    return res.json(response);
  },
  async create(req, res){
    const { name } = req.body;
    const data = { name, status: false };
    const response = await Note.create(data);
    console.log('A request was made to create a note.');
    return res.json(response);
  },
  async update(req, res){
    const { _id, status } = req.body;
    const data = { _id, status };
    const response = await Note.findByIdAndUpdate({ _id }, data, { new: true });
    console.log('The status of a note has been updated.');
    return res.json(response);
  },
  async remove(req, res){
    const { _id } = req.params;
    const response = await Note.findByIdAndDelete({ _id }, (error) => {
      error ? console.log(`Error: ${error}`) : console.log(`id: ${ _id } Successfully removed`);
    });
    return res.json(response);
  }
}