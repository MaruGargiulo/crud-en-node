const express = require('express');
const router = express.Router();
const staticController = require('../controllers/staticController');

router.get('/', staticController.index);

router.get('/acerca-de', staticController.about);

router.get('/contacto', staticController.contact);

module.exports = router;