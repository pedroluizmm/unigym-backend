// server.js
require('dotenv').config();
const connectDB = require('./src/config/db');
const app       = require('./app');

// 1) conecta ao Mongo
connectDB();

// 2) inicia o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 UniGym-Backend rodando em http://localhost:${PORT}`);
});
