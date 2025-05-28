const router = require('express').Router();
const ctrl = require('../controllers/conquista.controller');
const auth = require('../middlewares/auth.middleware');

router.get('/', auth, ctrl.listarConquistas);
router.get('/:id', auth, ctrl.obterConquista);
router.post('/', auth, ctrl.criarConquista);

module.exports = router;