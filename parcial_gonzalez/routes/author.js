const router = require('express').Router();
const ctrl = require('../controllers/authorController')

router.get('/',ctrl.getAll);
router.get('/:id',ctrl.getById);
router.post('/',ctrl.create);
router.put('/:id',ctrl.update);
router.delete('/:id',ctrl.delete);
router.put('/:id/add-Book/:BookId', ctrl.addBook);
router.get('/:id',ctrl.dontFindAuthor);

module.exports = router;

