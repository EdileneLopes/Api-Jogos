const express = require('express')

const app = express()

const games = require('./routes/games-routes')

app.use(express.json())
app.use('/', games)


module.exports = app