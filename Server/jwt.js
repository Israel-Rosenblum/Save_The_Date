require('dotenv').config()
const jwt = require('jsonwebtoken')

function createToken(email) {
  if (!email) {
    throw new Error('Email is required to create a token')
  }
  const user = { email }
  const accessToken = generateAccessToken(user)
  return { accessToken }
}

function generateAccessToken(user) {
  try {
    return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '150m' })
  } catch (error) {
    console.error('Error generating access token:', error)
  }
}

function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]
  if (token == null) return res.sendStatus(401)

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) {
      return res.sendStatus(403)
    }

    req.token = user

    next()
  })
}


module.exports = { createToken, authenticateToken }
