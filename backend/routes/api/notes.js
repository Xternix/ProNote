const express = require('express');
const router = express.Router();
const apiRoutesController = require('../../controllers/api/routesController.js')

router.get('/', apiRoutesController.getNotes)

router.get('/:id', apiRoutesController.getNoteById)

router.post('/', apiRoutesController.createNote)

router.put('/:id', apiRoutesController.updateNote)

router.delete('/:id', apiRoutesController.deleteNote)

module.exports = router;