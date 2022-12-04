const express = require('express');
const app = express();

const {products} =require('./data')
// console.log("▶ ➡ file: server.js:5 ➡ products", products);

require("dotenv").config();



// middlewares

app.use(express.static('public'));
app.use(express.json())

app.get('/',(req, res) => {
  res.send('server is working and file is queryString')
})
// query strings

app.get("/api/v1/query", (req, res) => {
    const {name,id}=req.query
    res.status(200).json({name:name,id:id})

})


// server
const port = process.env.PORT || 8000;



app.listen(port, () => {
    console.log(`App is running on port ${port}`);
});