exports.listarConquistas = (req, res) => {
  res.json([]); //lista de conquistas
};

exports.obterConquista = (req, res) => {
  const { id } = req.params;
  res.json({ id, nome: 'Primeiro Treino' });
};

exports.criarConquista = (req, res) => {
  res.status(201).json({ message: 'Conquista criada (stub)' });
};
