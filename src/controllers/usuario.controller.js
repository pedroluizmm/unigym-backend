exports.listarUsuarios = (req, res) => {
  res.json([]); //retornar usuários do DB
};

exports.obterUsuario = (req, res) => {
  const { id } = req.params;
  res.json({ id, nome: 'Usuário Exemplo' });
};

exports.criarUsuario = (req, res) => {
  //salvar req.body no DB
  res.status(201).json({ message: 'Usuário criado (stub)' });
};

exports.atualizarUsuario = (req, res) => {
  const { id } = req.params;
  //atualizar no DB
  res.json({ message: `Usuário ${id} atualizado (stub)` });
};

exports.deletarUsuario = (req, res) => {
  const { id } = req.params;
  //remover do DB
  res.status(204).end();
};
