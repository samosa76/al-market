const express = require('express');
const cors = require('cors');
const bodyParser = require("body-parser");


const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.listen(8000, (err) => {
    if(err) console.log("somthing went wrong");
    console.log("Listening on port : 8000");
    
})