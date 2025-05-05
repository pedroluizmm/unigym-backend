const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  // 1) CHECA HEADER
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Não autorizado' });
  }

  // 2) EXTRAI O TOKEN
  const token = authHeader.split(' ')[1];

  try {
    // 3) VERIFICA E DECODE O TOKEN
    const payload = jwt.verify(token, process.env.JWT_SECRET);

    // 4) ANEXA OS DADOS DO USUÁRIO NA REQUISIÇÃO
    req.user = {
      id: payload.id,
      nome: payload.nome,
      email: payload.email
    };

    // 5) PROSSEGUE PARA O PRÓXIMO HANDLER
    next();
  } catch (err) {
    // TOKEN INVÁLIDO OU EXPIRADO
    return res.status(401).json({ message: 'Token inválido ou expirado' });
  }
};
