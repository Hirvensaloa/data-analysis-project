const express = require('express') 
const mainRouter = require('./routes/start')
const bodyParser = require('body-parser') 
const cors = require('cors')
const mongoose = require('mongoose') 

const logger = require('./utils/logger') 
const config = require('./utils/config') 

const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use('/', mainRouter)

logger.info('Connecting to MongoDB')

mongoose.connect(config.URI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        logger.info('Connected!')
    })
    .catch(error => {
        logger.error('Connecting failed: ', error.message)
    })


const PORT = config.PORT 
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})