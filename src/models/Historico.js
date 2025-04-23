const { Schema, model, Types } = require('mongoose');

const HistoricoSchema = new Schema({
  usuario:      { type: Types.ObjectId, ref: 'Usuario', required: true },
  treino:       { type: Types.ObjectId, ref: 'Treino', required: true },
  dataRealizacao:{ type: Date, default: Date.now },
  tempoTotal:   { type: String },
  observacoes:  { type: String },
  feedback:     { type: String }
});

module.exports = model('Historico', HistoricoSchema);
