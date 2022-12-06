const express = require('express')
const app = express()
let { people } = require('./data')

// static assets
app.use(express.static('./methods-public'))
// parse form data
// this is used for getting the form data from the body
app.use(express.urlencoded({ extended: false }))

app.post('/login', (req, res) => {
  const { name,email} = req.body
  if (name) {
    return res.status(200).send(`Welcome ${name}, your email address is: ${email}`)
  }

  res.status(401).send('Please Provide Credentials')
})

app.listen(5000, () =>console.log('server listening on port 5000'))