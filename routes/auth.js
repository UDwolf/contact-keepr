const express = require('express');
const router = express.Router();

//@route    GET api/auth
//@desc     Get a logged in User
//@access   private
router.get('/', (req, res) => {
  res.send('Get a logged in User');
});

//@route    POST api/auth
//@desc     Auth a user & get Token
//@access   public
router.post('/', (req, res) => {
  res.send('Log in User');
});

module.exports = router;
