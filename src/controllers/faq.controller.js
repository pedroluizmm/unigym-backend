// src/controllers/faq.controller.js
const Faq = require('../models/Faq');

exports.listarFaqs = async (req, res) => {
  try {
    const list = await Faq.find();
    res.json(list);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erro ao listar FAQs' });
  }
};

exports.obterFaq = async (req, res) => {
  try {
    const { id } = req.params;
    const f = await Faq.findById(id);
    if (!f) return res.status(404).json({ message: 'FAQ não encontrada' });
    res.json(f);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erro ao buscar FAQ' });
  }
};

exports.criarFaq = async (req, res) => {
  try {
    const nova = await Faq.create(req.body);
    res.status(201).json(nova);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erro ao criar FAQ' });
  }
};
