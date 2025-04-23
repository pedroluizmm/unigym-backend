exports.register = (req, res) => {
  //implementar criação de usuário
  res.status(201).json({ message: 'Usuário registrado (stub)' });
};

exports.login = (req, res) => {
  //implementar verificação de credenciais e JWT(pesquisar)
  res.json({ token: 'jwt-token-fake' });
};
