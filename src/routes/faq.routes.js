const router = require('express').Router();
const ctrl = require('../controllers/faq.controller');
const auth = require('../middlewares/auth.middleware');

router.get('/', auth, ctrl.listarFaqs);
router.get('/:id', auth, ctrl.obterFaq);
router.post('/', auth, ctrl.criarFaq);

module.exports = router;
