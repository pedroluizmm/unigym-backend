const { Schema, model } = require('mongoose');

const ExercicioSchema = new Schema({
  nome:         { type: String, required: true },
  descricao:    { type: String },
  grupoMuscular:{ type: String, required: true },
  videoUrl:     { type: String },
  imagemUrl:    { type: String }
});

module.exports = model('Exercicio', ExercicioSchema);
