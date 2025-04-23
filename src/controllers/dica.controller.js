exports.listarDicas = (req, res) => {
  res.json([]); //lista de dicas
};

exports.obterDica = (req, res) => {
  const { id } = req.params;
  res.json({ id, titulo: 'Alongue antes de começar' });
};

exports.criarDica = (req, res) => {
  res.status(201).json({ message: 'Dica criada (stub)' });
};
