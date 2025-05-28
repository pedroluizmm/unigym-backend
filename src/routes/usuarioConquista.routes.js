const express = require('express');
const router = express.Router();

const authMiddleware = require('../middlewares/auth.middleware');
const {
  addConquista,
  getConquistasByUsuario
} = require('../controllers/usuarioConquista.controller');

router.post('/', authMiddleware, addConquista);
router.get('/:usuarioId', authMiddleware, getConquistasByUsuario);

module.exports = router;
