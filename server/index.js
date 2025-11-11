const express = require('express');
const cors = require('cors');
const bodyParser = require("body-parser");
const db = require('./database/database');
const response = require("./response/response")


const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
    response(res, 200, "Hello Testing", "Hello World");
});

app.listen(8000, (err) => {
    if(err) console.log("somthing went wrong");
    console.log("Listening on port : 8000");
})