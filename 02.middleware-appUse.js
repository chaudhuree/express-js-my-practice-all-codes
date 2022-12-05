const express = require('express')
const app = express()
const logger = require('./logger')

// middleware
app.use(logger)
// 🔼🔼 apply to all routes

app.get('/',(req, res)=>{
  res.send("<h1>Home</h1>")
})
app.get('/about',(req, res)=>{
  res.send("<h1>About</h1>")
})
app.get('/portfolio',(req, res)=>{
  res.send("<h1>portfolio</h1>")
})


app.listen(5000,()=>console.log('server is running on port 5000'))