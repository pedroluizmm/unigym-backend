const router = require('express').Router();
const ctrl = require('../controllers/treinoExercicio.controller');
const auth = require('../middlewares/auth.middleware');

router.get('/', auth, ctrl.listar);
router.get('/:id', auth, ctrl.obter);
router.post('/', auth, ctrl.criar);
router.put('/:id', auth, ctrl.atualizar);
router.delete('/:id', auth, ctrl.deletar);

module.exports = router;
