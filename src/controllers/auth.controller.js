const bcrypt = require('bcrypt');
const jwt    = require('jsonwebtoken');
const Usuario = require('../models/Usuario');

const JWT_SECRET   = process.env.JWT_SECRET;
const TOKEN_EXPIRES = '3h';

function gerarToken(user) {
  return jwt.sign(
    { id: user._id, nome: user.nome, email: user.email },
    JWT_SECRET,
    { expiresIn: TOKEN_EXPIRES }
  );
}

exports.register = async (req, res) => {
  try {
    const { nome, email, senha } = req.body;


    if (await Usuario.findOne({ email })) {
      return res.status(400).json({ message: 'E-mail já cadastrado' });
    }

    if (!user.statusValidacao) {
  return res.status(403).json({ message: "E-mail ainda não validado presencialmente." });
  }
 
    const user = new Usuario({
      nome,
      email,
      senha,                 
      statusValidacao: true, 
      dataCadastro: new Date()
    });
    await user.save();

  
    const token = gerarToken(user);
    res.status(201).json({ token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erro interno no servidor' });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, senha } = req.body;
    const user = await Usuario.findOne({ email });
    // se não existir ou se a senha não bater, rejeita
    if (!user || !(await user.comparePassword(senha))) {
      return res.status(400).json({ message: 'Credenciais inválidas' });
    }
    const token = gerarToken(user);
    res.json({ token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erro interno no servidor' });
  }
};
