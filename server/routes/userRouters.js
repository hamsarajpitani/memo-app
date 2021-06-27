const { signinUser,signupUser } = require('../controllers/userController');

const router = require('express').Router();


router.route('/signin').post(signinUser);

router.route('/signup').post(signupUser);

module.exports = router;