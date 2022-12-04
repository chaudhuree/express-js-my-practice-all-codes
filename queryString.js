const express = require('express');
const app = express();

const { products } = require('./data')
// console.log("▶ ➡ file: server.js:5 ➡ products", products);

require("dotenv").config();



// middlewares

app.use(express.static('public'));
app.use(express.json())

app.get('/', (req, res) => {
  res.send('server is working and file is queryString')
})
// query strings
// localhost:8000/api/v1/query?name=something&id=4
app.get("/api/v1/query", (req, res) => {
  const { name, id } = req.query
  res.status(200).json({ name: name, id: id })

})
// query with functionality
app.get("/api/v1/products", (req, res) => {
  const { search, limit } = req.query
  console.log("▶ ➡ file: queryString.js:29 ➡ app.get ➡ limit", limit);
  console.log("▶ ➡ file: queryString.js:29 ➡ app.get ➡ search", search);
  let sortedProducts = [...products]
  // console.log("▶ ➡ file: queryString.js:32 ➡ app.get ➡ sortedProducts", sortedProducts);
  if (search) {
    sortedProducts=sortedProducts.filter(products => {
      return products.name.startsWith(search)
    })
  }
  if (limit) {
    sortedProducts=sortedProducts.slice(0, Number(limit))
  }
  if (sortedProducts.length < 1) {
    res.status(200).json({ success: true, items: [] })
  }
  res.status(200).json(sortedProducts)

})


// server
const port = process.env.PORT || 8000;



app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});