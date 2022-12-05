const express = require('express')
const app = express()
// const morgan = require('morgan')
const logger = require('./logger')
const authorize = require('./authorize')
//  req => middleware => res

app.use([logger, authorize])
// 🔼🔼this is used for multiple middleware. we need to use array
// app.use(express.static('./public')) // express predefined middleware
// app.use(morgan('tiny')) //npm middleware

app.get('/', (req, res) => {
  res.send('Home')
  console.log(req.user)
})
app.get('/about', (req, res) => {
  res.send('About')
})
app.get('/api/products', (req, res) => {
  res.send('Products')
})
app.get('/api/items', (req, res) => {
  console.log(req.user)
  res.send('Items')
})

app.listen(5000, () => {
  console.log('Server is listening on port 5000....')
})
