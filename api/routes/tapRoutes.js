const express = require('express');
const router = express.Router();
let taps = require('../controllers/tapController');

router.get('/', taps.listAll)
router.post('/', taps.create);

module.exports = router;