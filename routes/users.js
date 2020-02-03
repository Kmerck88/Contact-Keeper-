const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

const User = require('../models/User');

//@route    Post api/users
//@desc     Register a user
//@access   Public
router.post(
  '/',
  [
    check('name', 'Please add name')
      .not()
      .isEmpty(),
      check('email', 'Please include valid email').isEmail(),
      check(
        'password', 
        'please enter password with 6 or more characters'
        ).isLength({min:6})
  ],
  
  (req, res) => {
    const errors = validationResult(req); if(!errors.isEmpty()){ 
      return res.status(400).json({errors: errors.array()})
    }
    res.send('passed');
  }
);

module.exports = router;
