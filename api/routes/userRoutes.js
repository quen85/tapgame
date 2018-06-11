const express = require('express');
const router = express.Router();

let user = require('../controllers/userController');
require('../../passport-auth');
const passport = require('passport')

router.get('/', passport.authenticate('jwt', {session: false}), user.listAll)
router.get('/:userId', passport.authenticate('jwt', {session: false}), user.getUser)

router.post('/', user.create)

module.exports = router;