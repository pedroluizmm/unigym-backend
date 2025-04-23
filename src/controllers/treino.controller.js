exports.listarTreinos = (req, res) => {
  res.json([]); // lista de treinos
};

exports.obterTreino = (req, res) => {
  const { id } = req.params;
  res.json({ id, grupamento: 'Peito', data: '2025-04-10' });
};

exports.criarTreino = (req, res) => {
  //salvar novo treino
  res.status(201).json({ message: 'Treino criado (stub)' });
};

exports.atualizarTreino = (req, res) => {
  const { id } = req.params;
  res.json({ message: `Treino ${id} atualizado (stub)` });
};

exports.deletarTreino = (req, res) => {
  const { id } = req.params;
  res.status(204).end();
};
