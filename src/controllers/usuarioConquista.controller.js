// src/controllers/usuarioConquista.controller.js
const UsuarioConquista = require('../models/UsuarioConquista');

async function addConquista(req, res) {
  try {
    const { usuarioId, conquistaId } = req.body;
    const uc = await UsuarioConquista.create({
      usuario: usuarioId,
      conquista: conquistaId
    });
    res.status(201).json(uc);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erro ao adicionar conquista.' });
  }
}

async function getConquistasByUsuario(req, res) {
  try {
    const { usuarioId } = req.params;
    const lista = await UsuarioConquista
      .find({ usuario: usuarioId })
      .populate('conquista');
    res.json(lista);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erro ao buscar conquistas.' });
  }
}

module.exports = {
  addConquista,
  getConquistasByUsuario
};
