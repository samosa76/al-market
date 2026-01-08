const express = require('express');
const cors = require('cors');
const bodyParser = require("body-parser");
const db = require('./database/database');
const response = require("./response/response")
const routes = require('./Routes/routes');


const app = express();

app.use(cors());
app.use(bodyParser.json());


app.get('/', routes);

//Product
app.get('/api_product', routes);

//Detail Transaksi
app.get('/api_detail_transaction', routes);

//Transaksi
app.get('/api_transaction', routes);

// app.get('/', (req, res) => {
//     db.query("SELECT * FROM tbl_product", (err, result) => {
//         response(res, 200, result, "GET tbl_product");
//     })
// });

// app.get('/news', (req, res) => {
//     db.query("SELECT * FROM tbl_news", (err, result) => {
//         response(res, 200, result, "GET tbl_news");
//     })
// });

// app.post('/add_newProduct', (req, res) => {
//     const { nama_product, kategori_product, price } = req.body;
//     db.query(`INSERT INTO tbl_product (nama_product, kategori_product, price) VALUES ("${nama_product}", ${kategori_product}, ${price})`, (err, result) => {
//         if (err) {
//             console.log(err);
//         } else {
//             response(res, 200, result, "POST add_newProduct");
//         }
//     })
// })

// app.post('/add_news', (req, res) => {
//     const { news_title, news_content, news_writer } = req.body;
//     db.query(`INSERT INTO tbl_news (news_title, news_content, news_writer) VALUES ("${news_title}", "${news_content}","${news_writer}")`, (err, result) => {
//         if (err) {
//             console.log(err);
//         } else {
//             response(res, 200, result, "POST add_news");
//         }
//     })
// })

app.get('/api_uid', routes)

app.listen(8000, (err) => {
    if(err) console.log("somthing went wrong");
    console.log("Listening on port : 8000");
})