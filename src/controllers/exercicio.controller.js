exports.listarExercicios = (req, res) => {
  res.json([]); //lista de exercícios
};

exports.obterExercicio = (req, res) => {
  const { id } = req.params;
  res.json({ id, nome: 'Agachamento' });
};

exports.criarExercicio = (req, res) => {
  res.status(201).json({ message: 'Exercício criado (stub)' });
};

exports.atualizarExercicio = (req, res) => {
  const { id } = req.params;
  res.json({ message: `Exercício ${id} atualizado (stub)` });
};

exports.deletarExercicio = (req, res) => {
  const { id } = req.params;
  res.status(204).end();
};
