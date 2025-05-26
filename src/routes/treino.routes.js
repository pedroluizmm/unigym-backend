const router = require('express').Router();
const ctrl = require('../controllers/treino.controller');
const auth = require('../middlewares/auth.middleware');

router.get('/', auth, ctrl.listarTreinos);
router.get('/:id', auth, ctrl.obterTreino);
router.post('/', auth, ctrl.criarTreino);
router.put('/:id', auth, ctrl.atualizarTreino);
router.delete('/:id', auth, ctrl.deletarTreino);

module.exports = router;
