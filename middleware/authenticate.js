const jwt = require('jsonwebtoken');
const user = require('../model/userSchema');

const authenticate = async (req, res, next) => {
  try {
    const token = req.cookies.jwtoken;
    const verifytoken = jwt.verify(token, process.env.SECRET_KEY);
    const rootuser = await user.findOne({
      _id: verifytoken._id,
      'tokens.token': token,
    });
    if (!rootuser) {
      throw new Error('user not found');
    }
    req.token = token;
    req.rootuser = rootuser;
    req.userID = rootuser._id;
    next();
  } catch (error) {
    res.status(401).send('Unauthorised token');
  }
};

module.exports = authenticate;
