const Conquista = require('../models/Conquista');

exports.listarConquistas = async (req, res) => {
  try {
    const list = await Conquista.find();
    res.json(list);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erro ao listar conquistas' });
  }
};

exports.obterConquista = async (req, res) => {
  try {
    const { id } = req.params;
    const c = await Conquista.findById(id);
    if (!c) return res.status(404).json({ message: 'Conquista não encontrada' });
    res.json(c);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erro ao buscar conquista' });
  }
};

exports.criarConquista = async (req, res) => {
  try {
    const nova = await Conquista.create(req.body);
    res.status(201).json(nova);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erro ao criar conquista' });
  }
};
