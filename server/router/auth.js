const jwt = require('jsonwebtoken');
const express = require('express');
const bcrypt = require('bcryptjs');
const router = express.Router();
require('../db/conn');
const User = require('../model/userSchema');
const authenticate = require('../middleware/authenticate');

router.get('/', (req, res) => {});

//Registration
router.post('/register', async (req, res) => {
  //console.log(req.body);

  const { name, email, phone, work, password, cpassword } = req.body;
  if (!name || !email || !phone || !work || !password || !cpassword) {
    return res.status(420).json({ error: 'Please Filled Properly' });
  }

  try {
    const userExists = await User.findOne({ email: email });
    if (userExists) {
      return res.status(420).json({ error: 'User is already exist' });
    } else if (password != cpassword) {
      res.status(400).json({ error: 'password are not match' });
    } else {
      const user = new User({ name, email, phone, work, password, cpassword });

      const userRegistered = await user.save();

      if (userRegistered) {
        res.status(201).json({ message: 'User registration successfully.' });
      }
    }
  } catch (error) {
    console.log(error);
  }
});

//Login
router.post('/signin', async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return req.status(400).json({ error: 'Please filled the data' });
    }

    const userLogin = await User.findOne({ email: email });

    if (userLogin) {
      const isMatch = await bcrypt.compare(password, userLogin.password);

      const token = await userLogin.generateAuthToken();
      console.log(token);

      res.cookie('jwttoken', token, {
        expires: new Date(Date.now() + 300000),
        httpOnly: true,
      });

      if (!isMatch) {
        res.status(400).json({ error: 'Invalid credential' });
      } else {
        res.json({ message: 'login successfully' });
      }
    } else {
      res.status(400).json({ error: 'Invalid credential' });
    }
  } catch (err) {
    console.log(err);
  }
});

router.get('/about', authenticate, (req, res) => {
  res.send(req.rootuser);
});

module.exports = router;
