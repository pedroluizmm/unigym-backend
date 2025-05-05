require('dotenv').config();
const express = require('express');
const cors    = require('cors');

const authRoutes      = require('./src/routes/auth.routes');
const usuarioRoutes   = require('./src/routes/usuario.routes');
const treinoRoutes    = require('./src/routes/treino.routes');
const exercicioRoutes = require('./src/routes/exercicio.routes');
const historicoRoutes = require('./src/routes/historico.routes');
const conquistaRoutes = require('./src/routes/conquista.routes');
const dicaRoutes      = require('./src/routes/dica.routes');
const faqRoutes       = require('./src/routes/faq.routes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/auth',       authRoutes);
app.use('/api/usuarios',   usuarioRoutes);
app.use('/api/treinos',    treinoRoutes);
app.use('/api/exercicios', exercicioRoutes);
app.use('/api/historicos', historicoRoutes);
app.use('/api/conquistas', conquistaRoutes);
app.use('/api/dicas',      dicaRoutes);
app.use('/api/faqs',       faqRoutes);

module.exports = app;
