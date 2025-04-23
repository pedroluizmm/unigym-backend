const { Schema, model } = require('mongoose');

const ConquistaSchema = new Schema({
  nome:      { type: String, required: true },
  descricao: { type: String },
  iconeUrl:  { type: String }
});

module.exports = model('Conquista', ConquistaSchema);
