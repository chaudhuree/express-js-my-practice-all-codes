const express = require('express')
const app = express()
const logger = require('./logger')

// middleware
app.use('/api',logger)
// 🔼🔼 apply to routes starts with /api
// like it will apply for localhost:5000/api then localhost:5000/api/v1

app.get('/',(req, res)=>{
  res.send("<h1>Home</h1>")
})
app.get('/about',(req, res)=>{
  res.send("<h1>About</h1>")
})
app.get('/portfolio',(req, res)=>{
  res.send("<h1>portfolio</h1>")
})
app.get('/api',(req, res)=>{
  res.send("<h1>Api</h1>")
})
app.get('/api/v1',(req, res)=>{
  res.send("<h1>Api - v1</h1>")
})

app.listen(5000,()=>console.log('server is running on port 5000'))