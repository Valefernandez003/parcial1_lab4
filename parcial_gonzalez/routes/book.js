const router = require('express').Router();
const ctrl = require('../controllers/bookController')

router.get('/',ctrl.getAll);
router.get('/:id',ctrl.getById);
router.post('/',ctrl.create);
router.put('/:id',ctrl.update);
router.delete('/:id',ctrl.delete);
router.get('/:id',ctrl.validation);

module.exports = router;

