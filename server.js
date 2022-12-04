const express = require('express');
const app = express();
const helmet = require('helmet');
// const mongoose = require("mongoose");
require("dotenv").config();
const morgan = require("morgan");
const cors = require('cors');
const { readdirSync } = require("fs")


// middlewares
app.use(helmet())
app.use(express.static('public'));
app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));
app.use(cors());


// DB Connection
// mongoose
//     .connect(process.env.DATABASE)
//     .then(() => console.log("DB connected"))
//     .catch((err) => console.log("DB Error => ", err));

// routes middleware
// readdirSync("./routes").map(r => app.use("/api/v1", require(`./routes/${r}`)))

app.get("/", (req, res) => {
    res.send('server is running')
})
// api
app.get("/api/v1/:appId", (req, res) => {
    res.send('this is an api')
    console.log(req.params)
    const {appId} = req.params
    console.log("▶ ➡ file: server.js:37 ➡ app.get ➡ appId", appId);
})

// server
const port = process.env.PORT || 8000;



app.listen(port, () => {
    console.log(`App is running on port ${port}`);
});