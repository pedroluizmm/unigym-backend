const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  usuario: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario', required: true },
  conquista: { type: mongoose.Schema.Types.ObjectId, ref: 'Conquista', required: true },
  data: { type: Date, default: Date.now }
});

module.exports = mongoose.model('UsuarioConquista', schema);