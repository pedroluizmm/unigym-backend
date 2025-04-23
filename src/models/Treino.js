const { Schema, model, Types } = require('mongoose');

const TreinoSchema = new Schema({
  usuario:         { type: Types.ObjectId, ref: 'Usuario', required: true },
  data:            { type: Date, required: true },
  grupamentoMuscular: { type: String, required: true },
  statusTreino:    { type: String, enum: ['concluído','pendente'], default: 'pendente' }
});

module.exports = model('Treino', TreinoSchema);
