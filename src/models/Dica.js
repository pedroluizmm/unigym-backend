const { Schema, model } = require('mongoose');

const DicaSchema = new Schema({
  titulo:      { type: String, required: true },
  descricao:   { type: String },
  dataPostagem:{ type: Date, default: Date.now }
});

module.exports = model('Dica', DicaSchema);
