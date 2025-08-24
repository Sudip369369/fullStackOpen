const express = require('express')
const mongoose = require('mongoose')

const cors = require("cors");
const config = require('./utils/config')
const logger = require('./utils/logger')
const middleware = require('./utils/middleware')


const noteRouter = require('./controllers/notes')
const usersRouter = require('./controllers/users')
const loginRouter = require('./controllers/login')

const app = express()

logger.info('Connecting to Mongodb',config.MONGODB_URI)

mongoose.connect(config.MONGODB_URI)
.then(res=>{
    logger.info("Connected to Mongodb")
})
.catch(error=>{
    logger.error(`Error:${error}`)
})

app.use(cors({

}))
app.use(express.static('dist'))
app.use(express.json())
app.use(middleware.requestLogger)



app.use('/api/notes',noteRouter)
app.use('/api/users',usersRouter)
app.use('/api/login/',loginRouter)
app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler);

module.exports = app