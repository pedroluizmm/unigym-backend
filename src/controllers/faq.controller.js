exports.listarFaqs = (req, res) => {
  res.json([]); //lista de FAQs
};

exports.obterFaq = (req, res) => {
  const { id } = req.params;
  res.json({ id, pergunta: 'Como funciona o cronômetro?' });
};

exports.criarFaq = (req, res) => {
  res.status(201).json({ message: 'FAQ criado (stub)' });
};
