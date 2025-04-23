const { Schema, model, Types } = require('mongoose');

const TreinoExercicioSchema = new Schema({
  treino:            { type: Types.ObjectId, ref: 'Treino', required: true },
  exercicio:         { type: Types.ObjectId, ref: 'Exercicio', required: true },
  series:            { type: Number, required: true },
  repeticoes:        { type: Number, required: true },
  cargaRecomendada:  { type: Number },
  tempoIntervalo:    { type: String },
  feito:             { type: Boolean, default: false }
});

module.exports = model('TreinoExercicio', TreinoExercicioSchema);
