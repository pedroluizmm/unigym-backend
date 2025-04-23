const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const UsuarioSchema = new Schema({
  nome:           { type: String, required: true },
  email:          { type: String, required: true, unique: true },
  senha:          { type: String, required: true },
  telefone:       { type: String },
  dataNascimento: { type: Date },
  objetivo:       { type: String },
  statusValidacao:{ type: Boolean, default: false },
  dataCadastro:   { type: Date, default: Date.now }
});

//antes de salvar
UsuarioSchema.pre('save', async function(next) {
  if (!this.isModified('senha')) return next();
  this.senha = await bcrypt.hash(this.senha, 10);
  next();
});

//comparar senha
UsuarioSchema.methods.comparePassword = function(senha) {
  return bcrypt.compare(senha, this.senha);
};

module.exports = model('Usuario', UsuarioSchema);
