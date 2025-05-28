const Exercicio = require('../models/Exercicio');

exports.listarExercicios = async (req, res) => {
  try {
    const lista = await Exercicio.find();
    res.json(lista);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erro ao listar exercícios' });
  }
};

exports.obterExercicio = async (req, res) => {
  try {
    const { id } = req.params;
    const ex = await Exercicio.findById(id);
    if (!ex) return res.status(404).json({ message: 'Exercício não encontrado' });
    res.json(ex);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erro ao buscar exercício' });
  }
};

exports.criarExercicio = async (req, res) => {
  try {
    const novo = await Exercicio.create(req.body);
    res.status(201).json(novo);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erro ao criar exercício' });
  }
};

exports.atualizarExercicio = async (req, res) => {
  try {
    const { id } = req.params;
    const atualizado = await Exercicio.findByIdAndUpdate(id, req.body, { new: true });
    if (!atualizado) return res.status(404).json({ message: 'Exercício não encontrado' });
    res.json(atualizado);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erro ao atualizar exercício' });
  }
};

exports.deletarExercicio = async (req, res) => {
  try {
    const { id } = req.params;
    await Exercicio.findByIdAndDelete(id);
    res.status(204).end();
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erro ao deletar exercício' });
  }
};
