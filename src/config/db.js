// src/config/db.js
require('dotenv').config();
const mongoose = require('mongoose');

// (opcional) desliga warnings de strictQuery
mongoose.set('strictQuery', false);

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('✅ MongoDB conectado com sucesso');
  } catch (err) {
    console.error('❌ Erro ao conectar no MongoDB:', err);
    process.exit(1);
  }

  // eventos (opcional)
  mongoose.connection
    .on('disconnected', () => console.log('❌ Mongoose desconectado'))
    .on('error', err => console.error('❌ Erro Mongoose:', err));
};

module.exports = connectDB;
