const express = require('express');
const router = express.Router();

const courseController = require('../app/controllers/CourseController');

router.post('/handel-form-action', courseController.handelFormAction)
router.get('/:id/edit', courseController.edit);
router.delete('/:id', courseController.delete);
router.delete('/:id/force', courseController.forceDelete);
router.post('/store', courseController.store);
router.patch('/:id/restore', courseController.restore);
router.put('/:id', courseController.update);
router.get('/create', courseController.create);
router.get('/:slug', courseController.show);

module.exports = router;