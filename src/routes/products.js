const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController')

router.get('/', productsController.index);
router.get('/mostrar', productsController.show);
router.get('/crear', productsController.create);
router.get('/edit', productsController.edit);

module.exports = router;