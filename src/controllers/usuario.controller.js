const Usuario = require('../models/Usuario');

exports.listarUsuarios = async (req, res) => {
  try {
    const usuarios = await Usuario.find();
    res.json(usuarios);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erro ao listar usuários' });
  }
};

exports.obterUsuario = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await Usuario.findById(id);
    if (!user) return res.status(404).json({ message: 'Usuário não encontrado' });
    res.json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erro ao buscar usuário' });
  }
};

exports.criarUsuario = async (req, res) => {
  try {
    const novo = await Usuario.create(req.body);
    res.status(201).json(novo);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erro ao criar usuário' });
  }
};

exports.atualizarUsuario = async (req, res) => {
  try {
    const { id } = req.params;
    const atualizado = await Usuario.findByIdAndUpdate(id, req.body, { new: true });
    if (!atualizado) return res.status(404).json({ message: 'Usuário não encontrado' });
    res.json(atualizado);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erro ao atualizar usuário' });
  }
};

exports.deletarUsuario = async (req, res) => {
  try {
    const { id } = req.params;
    await Usuario.findByIdAndDelete(id);
    res.status(204).end();
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erro ao deletar usuário' });
  }
};

exports.buscarPorEmail = async (req, res) => {
  try {
    const email = decodeURIComponent(req.query.email)
    if (!email) {
      return res.status(400).json({ message: "Email é obrigatório" });
    }

    const usuario = await Usuario.findOne({ email });

    if (!usuario) {
      return res.status(404).json({ message: "Usuário não encontrado" });
    }

    res.json({
      ...usuario.toObject(),
      statusValidacao: !!usuario.statusValidacao
    });
  } catch (err) {
    console.error("Erro buscarPorEmail:", err);
    res.status(500).json({ message: "Erro ao buscar usuário por e-mail" });
  }
}

