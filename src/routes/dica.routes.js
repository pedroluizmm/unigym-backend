const router = require('express').Router();
const ctrl   = require('../controllers/dica.controller');
const auth   = require('../middlewares/auth.middleware');

router.get('/',    auth, ctrl.listarDicas);
router.get('/:id', auth, ctrl.obterDica);
router.post('/',   auth, ctrl.criarDica);

module.exports = router;
