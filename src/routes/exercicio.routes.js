const router = require('express').Router();
const ctrl   = require('../controllers/exercicio.controller');
const auth   = require('../middlewares/auth.middleware');

router.get('/',    auth, ctrl.listarExercicios);
router.get('/:id', auth, ctrl.obterExercicio);
router.post('/',   auth, ctrl.criarExercicio);
router.put('/:id', auth, ctrl.atualizarExercicio);
router.delete('/:id', auth, ctrl.deletarExercicio);

module.exports = router;
