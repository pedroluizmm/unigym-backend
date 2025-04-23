const { Schema, model } = require('mongoose');

const FaqSchema = new Schema({
  pergunta: { type: String, required: true },
  resposta: { type: String, required: true }
});

module.exports = model('Faq', FaqSchema);
