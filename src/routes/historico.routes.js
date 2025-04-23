const router = require('express').Router();
const ctrl   = require('../controllers/historico.controller');
const auth   = require('../middlewares/auth.middleware');

router.get('/',    auth, ctrl.listarHistorico);
router.get('/:id', auth, ctrl.obterHistorico);
router.post('/',   auth, ctrl.criarHistorico);
router.delete('/:id', auth, ctrl.deletarHistorico);

module.exports = router;
