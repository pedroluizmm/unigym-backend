module.exports = (req, res, next) => {
  //validar token JWT em req.headers.authorization
  // se válido
  next();
  // caso contrário → res.status(401).json({ message: 'Não autorizado' });
};
