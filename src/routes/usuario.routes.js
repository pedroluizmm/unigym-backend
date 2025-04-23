const router = require('express').Router();
const ctrl   = require('../controllers/usuario.controller');
const auth   = require('../middlewares/auth.middleware');

router.get('/',    auth, ctrl.listarUsuarios);
router.get('/:id', auth, ctrl.obterUsuario);
router.post('/',   ctrl.criarUsuario);
router.put('/:id', auth, ctrl.atualizarUsuario);
router.delete('/:id', auth, ctrl.deletarUsuario);

module.exports = router;
