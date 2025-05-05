const { Schema, model, Types } = require('mongoose');

const UsuarioConquistaSchema = new Schema({
  usuario:       { type: Types.ObjectId, ref: 'Usuario', required: true },
  conquista:     { type: Types.ObjectId, ref: 'Conquista', required: true },
  dataConquista: { type: Date, default: Date.now }
});

module.exports = model('UsuarioConquista', UsuarioConquistaSchema);
