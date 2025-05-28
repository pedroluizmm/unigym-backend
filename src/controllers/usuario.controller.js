const Usuario = require('../models/Usuario');

exports.obterUsuarioLogado = async (req, res) => {
  const usuario = await Usuario.findById(req.user.id);

  if (!usuario) {
    return res.status(404).json({ message: 'Usuário não encontrado' });
  }

  res.json(adicionarIdadeAoUsuario(usuario));
};

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


const calcularIdade = (dataNascimento) => {
  if (!dataNascimento) return null;
  const hoje = new Date();
  const nascimento = new Date(dataNascimento);
  let idade = hoje.getFullYear() - nascimento.getFullYear();
  const mes = hoje.getMonth() - nascimento.getMonth();
  if (mes < 0 || (mes === 0 && hoje.getDate() < nascimento.getDate())) {
    idade--;
  }
  return idade;
};

const adicionarIdadeAoUsuario = (usuario) => {
  const usuarioObj = usuario.toObject();
  usuarioObj.idade = calcularIdade(usuarioObj.dataNascimento);
  return usuarioObj;
};

exports.obterUsuarioLogado = async (req, res) => {

  const usuario = await Usuario.findById(req.user.id);
  
  if (!usuario) {
    return res.status(404).json({ message: 'Usuário do token não encontrado.' });
  }

  res.json(adicionarIdadeAoUsuario(usuario));
};


exports.listarUsuarios = async (req, res) => {
  const usuarios = await Usuario.find();
  const usuariosComIdade = usuarios.map(adicionarIdadeAoUsuario);
  res.json(usuariosComIdade);
};

exports.obterUsuario = async (req, res) => {
  const { id } = req.params;
  const user = await Usuario.findById(id);
  if (!user) return res.status(404).json({ message: 'Usuário não encontrado' });
  res.json(adicionarIdadeAoUsuario(user));
};

exports.criarUsuario = async (req, res) => {
  const novo = await Usuario.create(req.body);
  res.status(201).json(adicionarIdadeAoUsuario(novo));
};

exports.atualizarUsuario = async (req, res) => {
  const { id } = req.params;
  const atualizado = await Usuario.findByIdAndUpdate(id, req.body, { new: true });
  if (!atualizado) return res.status(404).json({ message: 'Usuário não encontrado' });
  res.json(adicionarIdadeAoUsuario(atualizado));
};

exports.deletarUsuario = async (req, res) => {
  const { id } = req.params;
  await Usuario.findByIdAndDelete(id);
  res.status(204).end();
};

exports.requestPasswordReset = async (req, res) => {
  const { email } = req.body;
  const user = await Usuario.findOne({ email });
  if (!user) {
    return res.status(404).json({ message: 'E-mail não cadastrado' });
  }
  return res.json({ message: 'Código de recuperação enviado' });
};

exports.verifyResetCode = async (req, res) => {
  return res.json({ message: 'Código válido' });
};

exports.resetPassword = async (req, res) => {
  const { email, senha } = req.body;
  const user = await Usuario.findOne({ email });
  if (!user) {
    return res.status(404).json({ message: 'E-mail não cadastrado' });
  }
  user.senha = senha;         
  await user.save();
  return res.json({ message: 'Senha redefinida com sucesso' });
};
