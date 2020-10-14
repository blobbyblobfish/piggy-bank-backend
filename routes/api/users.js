
const express = require('express');
const router = express.Router();
const { body, check, param } = require('express-validator');
const auth = require('../../middleware/auth');
const userController = require('../../controller/userController');

// @route    POST api/users
// @desc     Register user
// @access   Public

router.post(
    '/',
    // [
    //   check('firstname', 'First Name is required').not().isEmpty(),
    //   check('lastname', 'Last Name is required').not().isEmpty(),
    //   check('email', 'Please include a valid email').isEmail(),
    //   check(
    //     'password',
    //     'Please enter a password with 6 or more characters'
    //   ).isLength({ min: 6 })
    // ],
    userController.postRegister
  );


  module.exports = router;
