const router = require('express').Router();
const ctrl = require('../controllers/usuario.controller');
const auth = require('../middlewares/auth.middleware');
const validarUsuario = require('../controllers/usuarioValidation.controller');

router.get('/buscar-por-email', ctrl.buscarPorEmail); // DEVE VIR PRIMEIRO

router.get('/', auth, ctrl.listarUsuarios);
router.get('/:id', auth, ctrl.obterUsuario);          // DEVE VIR DEPOIS
router.post('/', ctrl.criarUsuario);
router.put('/:id', auth, ctrl.atualizarUsuario);
router.put('/:id/validate-email', auth, validarUsuario);
router.delete('/:id', auth, ctrl.deletarUsuario);


module.exports = router;
