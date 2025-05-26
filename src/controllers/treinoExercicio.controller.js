// src/controllers/treinoExercicio.controller.js
const TreinoExercicio = require('../models/TreinoExercicio');
const Treino           = require('../models/Treino');
const Exercicio        = require('../models/Exercicio');

exports.listar = async (req, res) => {
  try {
    // Se você quiser filtrar por treino específico, passe ?treino=<id> na query
    const filter = {};
    if (req.query.treino) {
      filter.treino = req.query.treino;
    } else {
      // opcional: listar todos os exercícios dos treinos do usuário
      const meusTreinos = await Treino.find({ usuario: req.user.id }).select('_id');
      filter.treino = { $in: meusTreinos.map(t => t._id) };
    }

    const lista = await TreinoExercicio.find(filter)
      .populate('exercicio')      // traz detalhes do exercício
      .populate({ path: 'treino', select: 'grupamentoMuscular data statusTreino' })
      .exec();

    res.json(lista);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erro ao listar treino-exercícios' });
  }
};

exports.obter = async (req, res) => {
  try {
    const { id } = req.params;
    const te = await TreinoExercicio.findById(id)
      .populate('exercicio')
      .populate({ path: 'treino', select: 'grupamentoMuscular data statusTreino' })
      .exec();

    if (!te) {
      return res.status(404).json({ message: 'Treino-Exercício não encontrado' });
    }

    // opcional: garantir que o treino pertence ao usuário
    if (te.treino.usuario.toString() !== req.user.id) {
      return res.status(403).json({ message: 'Não autorizado' });
    }

    res.json(te);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erro ao buscar treino-exercício' });
  }
};

exports.criar = async (req, res) => {
  try {
    const {
      treino,
      exercicio,
      series,
      repeticoes,
      cargaRecomendada,
      tempoIntervalo,
      feito,
    } = req.body;

    // valida treino
    const tre = await Treino.findById(treino);
    if (!tre || tre.usuario.toString() !== req.user.id) {
      return res.status(400).json({ message: 'Treino inválido' });
    }

    // valida exercício
    const ex = await Exercicio.findById(exercicio);
    if (!ex) {
      return res.status(400).json({ message: 'Exercício inválido' });
    }

    const novo = await TreinoExercicio.create({
      treino,
      exercicio,
      series,
      repeticoes,
      cargaRecomendada,
      tempoIntervalo,
      feito,
    });

    await novo.populate('exercicio');
    await novo.populate({ path: 'treino', select: 'grupamentoMuscular data statusTreino' });
    
    // Retorna o documento populado
    res.status(201).json(novo);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erro ao criar treino-exercício' });
  }
};

exports.atualizar = async (req, res) => {
  try {
    const { id } = req.params;
    const atualizado = await TreinoExercicio.findByIdAndUpdate(id, req.body, {
      new: true,
    })
      .populate('exercicio')
      .populate({ path: 'treino', select: 'grupamentoMuscular data statusTreino' })
      .exec();

    if (!atualizado) {
      return res.status(404).json({ message: 'Treino-Exercício não encontrado' });
    }

    res.json(atualizado);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erro ao atualizar treino-exercício' });
  }
};

exports.deletar = async (req, res) => {
  try {
    const { id } = req.params;
    const apagado = await TreinoExercicio.findByIdAndDelete(id);
    if (!apagado) {
      return res.status(404).json({ message: 'Treino-Exercício não encontrado' });
    }
    res.status(204).end();
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erro ao deletar treino-exercício' });
  }
};
