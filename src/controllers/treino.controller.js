// src/controllers/treino.controller.js
const Treino = require('../models/Treino');

exports.listarTreinos = async (req, res) => {
  try {
    const treinos = await Treino.find({ usuario: req.user.id });
    res.json(treinos);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erro ao listar treinos' });
  }
};

exports.obterTreino = async (req, res) => {
  try {
    const { id } = req.params;
    const treino = await Treino.findById(id);
    if (!treino) return res.status(404).json({ message: 'Treino não encontrado' });
    res.json(treino);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erro ao buscar treino' });
  }
};

exports.criarTreino = async (req, res) => {
  try {
    const novo = await Treino.create({ ...req.body, usuario: req.user.id });
    res.status(201).json(novo);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erro ao criar treino' });
  }
};

exports.atualizarTreino = async (req, res) => {
  try {
    const { id } = req.params;
    const atualizado = await Treino.findByIdAndUpdate(id, req.body, { new: true });
    if (!atualizado) return res.status(404).json({ message: 'Treino não encontrado' });
    res.json(atualizado);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erro ao atualizar treino' });
  }
};

exports.deletarTreino = async (req, res) => {
  try {
    const { id } = req.params;
    await Treino.findByIdAndDelete(id);
    res.status(204).end();
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erro ao deletar treino' });
  }
};
