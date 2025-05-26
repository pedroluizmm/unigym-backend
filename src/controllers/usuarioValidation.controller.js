// src/controllers/usuarioValidation.controller.js

const Usuario = require('../models/Usuario');

async function validarUsuario(req, res) {
  try {
    const { id } = req.params;
    const user = await Usuario.findByIdAndUpdate(
      id,
      { statusValidacao: true },
      { new: true }
    );
    if (!user) {
      return res.status(404).json({ message: 'Usuário não encontrado.' });
    }
    res.json({ message: 'E-mail validado com sucesso.', user });
  } catch (err) {
    console.error('Erro ao validar usuário:', err);
    res.status(500).json({ message: 'Erro interno ao validar e-mail.' });
  }
}

module.exports = validarUsuario;
