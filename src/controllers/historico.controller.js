const Historico = require('../models/Historico');

exports.listarHistorico = async (req, res) => {
  try {
    const list = await Historico
      .find({ usuario: req.user.id })
      .populate({
        path: 'treino',
        select: 'nome exercicios tempo calorias' 
      });
    res.json(list);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erro ao listar histórico' });
  }
};

exports.obterHistorico = async (req, res) => {
  try {
    const { id } = req.params;
    const h = await Historico.findById(id);
    if (!h) return res.status(404).json({ message: 'Histórico não encontrado' });
    res.json(h);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erro ao buscar histórico' });
  }
};

exports.criarHistorico = async (req, res) => {
  try {
    const novo = await Historico.create({ ...req.body, usuario: req.user.id });
    res.status(201).json(novo);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erro ao criar histórico' });
  }
};

exports.deletarHistorico = async (req, res) => {
  try {
    const { id } = req.params;
    await Historico.findByIdAndDelete(id);
    res.status(204).end();
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erro ao deletar histórico' });
  }
};
