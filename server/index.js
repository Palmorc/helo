const express = require('express')
const bodyParser = require('body-parser')
const cont = require('./controller')
const massive = require('massive')
const axios = require('axios')
require('dotenv').config()


const app = express()
const port = 3007

massive(process.env.CONNECTION_STRING).then(db => {
  app.set('db', db)
  console.log('Connected to database');
})

app.use(bodyParser.json())

app.get('/api/users', cont.retrieve)
app.get('/api/currentuser', (req,res)=>{
  res.send(req.session.user)
})
app.post('/api/auth',cont.register)

app.listen(port, () => {
  console.log('Listening on port', port);
})
