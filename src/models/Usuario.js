const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const UsuarioSchema = new Schema({
  nome: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  senha: { type: String, required: true },
  telefone: { type: String },
  dataNascimento: { type: Date },

  altura: { type: Number },    
  peso: { type: Number },    
  objetivo: { type: String },
  diasTreino: { type: [String] },   
  duracaoTreino: { type: String },     
  focoTreino: { type: String },     

  statusValidacao: { type: Boolean, default: false },
  dataCadastro: { type: Date, default: Date.now }
});

UsuarioSchema.pre('save', async function (next) {
  if (!this.isModified('senha')) return next();
  this.senha = await bcrypt.hash(this.senha, 10);
  next();
});

UsuarioSchema.methods.comparePassword = function (senha) {
  return bcrypt.compare(senha, this.senha);
};

module.exports = model('Usuario', UsuarioSchema);