const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const secrets = require('./config/secrets');

const Users = require('../users/usersModel');

module.exports = (req, res, next) => {

const token = req.headers.authorization;

if (token) {
  jwt.verify(token, secrets.jwtsecret, (err, decodedToken) => {
    if (err) {
      res.status(401).json({you:"shall not pass"});
    } else {
      req.decodedJwt = decodedToken;
      next();
    }
  })
} else {
  res.status(401).json({you:"shall not pass at all!"});
}
};