const router = require('express').Router();
const ctrl = require('../controllers/usuario.controller');
const auth = require('../middlewares/auth.middleware');


router.post('/recuperar-senha', ctrl.requestPasswordReset);
router.post('/recuperar-senha/codigo', ctrl.verifyResetCode);
router.post('/recuperar-senha/nova-senha', ctrl.resetPassword);

router.get('/buscar-por-email', ctrl.buscarPorEmail);
router.get('/me', auth, ctrl.obterUsuarioLogado);
router.get('/', auth, ctrl.listarUsuarios);
router.get('/:id', auth, ctrl.obterUsuario);
router.post('/', ctrl.criarUsuario);
router.put('/:id', auth, ctrl.atualizarUsuario);
router.delete('/:id', auth, ctrl.deletarUsuario);

module.exports = router;
