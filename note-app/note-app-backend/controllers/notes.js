const noteRouter = require('express').Router()
const Note = require('../models/note')
const jwt = require('jsonwebtoken')
const User = require('../models/user')

const getTokenFrom = (req) => {
  const authorization = req.get('authorization')
  if (authorization && authorization.startsWith('Bearer ')) {
    return authorization.replace('Bearer ', '')
  }
  return null
}

// GET all notes with user info populated
noteRouter.get('/', async (req, res, next) => {
  try {
    const notes = await Note.find({}).populate('user', { username: 1, name: 1 })
    res.json(notes)
  } catch (error) {
    next(error)
  }
})


// POST a new note and link it to a user
noteRouter.post('/', async (req, res) => {
  const body = req.body

  if (!body.content) {
    return res.status(400).json({ error: 'content missing' })
  }

  let decodedToken
  try {
    decodedToken = jwt.verify(getTokenFrom(req), process.env.SECRET)
  } catch (err) {
    return res.status(401).json({ error: 'Invalid or missing token' })
  }

  if (!decodedToken.id) {
    return res.status(401).json({ error: 'Invalid token' })
  }

  const user = await User.findById(decodedToken.id)
  if (!user) {
    return res.status(400).json({ error: 'User not found' })
  }

  const note = new Note({
    content: body.content,
    important: body.important || false,
    user: user._id
  })

  const savedNote = await note.save()
  user.notes = user.notes.concat(savedNote._id)
  await user.save()

  res.status(201).json(savedNote)
})

module.exports = noteRouter
