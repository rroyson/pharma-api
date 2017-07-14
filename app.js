require('dotenv').config()
const port = process.env.PORT || 4000
const express = require('express')
const app = express()
const dal = require('./dal.js')

app.get('/', function(req, res, next) {
  res
    .status(200)
    .send('Welcome to the Pharma API! Try a call to GET /meds for starters.')
})

app.get('/meds', function(req, res, next) {
  dal.listMeds(10, function(err, data) {
    if (err) console.log(err)
    res.status(200).send(data)
  })
})

app.listen(port, () => console.log('The API is listening on port:', port))
