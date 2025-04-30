
// utils/generateToken.js
const jwt = require('jsonwebtoken');
const JWT_SECRET="AMINAKHTER";
const generateToken = (userId, role) => {
  return jwt.sign({ userId, role },JWT_SECRET, {
    expiresIn: '7d',
  });
};

module.exports = generateToken;
