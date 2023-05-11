const express = require('express')
const router = express.Router()

const app = express()
const env = require('./config/env')
let morgan = require('morgan')
const path = require('path')
app.use(morgan('tiny'))

app.use(express.json())

const tickerRoute = require('./routes/ticker.route')
app.use('/api/ticker', tickerRoute)


app.listen(process.env.port, () => {
    console.log('listening on ' + process.env.port)
})