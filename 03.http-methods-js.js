const express = require('express')
const app = express()
let { people } = require('./data')

// static assets
app.use(express.static('./methods-public'))
app.use(express.json())

app.get('/api/people', (req, res) => {
  res.status(200).json({ status: 'success', data: people })
})
app.post('/api/people', (req, res) => {
  const {name}=req.body
  res.status(200).json({ status: 'success', person: name })
})
app.listen(5000, () => console.log('server listening on port 5000'))