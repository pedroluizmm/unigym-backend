exports.listarHistorico = (req, res) => {
  res.json([]); //lista de históricos
};

exports.obterHistorico = (req, res) => {
  const { id } = req.params;
  res.json({ id, data: '2025-04-01', tempoTotal: '45m' });
};

exports.criarHistorico = (req, res) => {
  res.status(201).json({ message: 'Histórico criado (stub)' });
};

exports.deletarHistorico = (req, res) => {
  const { id } = req.params;
  res.status(204).end();
};
