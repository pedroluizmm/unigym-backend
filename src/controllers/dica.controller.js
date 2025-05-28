const Dica = require('../models/Dica');

exports.listarDicas = async (req, res) => {
  try {
    const list = await Dica.find();
    res.json(list);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erro ao listar dicas' });
  }
};

exports.obterDica = async (req, res) => {
  try {
    const { id } = req.params;
    const d = await Dica.findById(id);
    if (!d) return res.status(404).json({ message: 'Dica não encontrada' });
    res.json(d);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erro ao buscar dica' });
  }
};

exports.criarDica = async (req, res) => {
  try {
    const nova = await Dica.create(req.body);
    res.status(201).json(nova);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erro ao criar dica' });
  }
};
