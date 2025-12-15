const express = require('express');
const routes = express.Router();
const db = require('../database/database');
const response = require("../response/response");


routes.get('/', (req, res) => {
    res.send("Hellow");
})

routes.get('/api_product', (req, res) => {
    db.query("SELECT * FROM tbl_product", (err, result) => {
        response(res, 200, result, "GET ALL DETAIL TRANSACTION")
    })
})

routes.get('/api_detail_transaction', (req, res) => {
    const sql = "SELECT * FROM tbl_detail_transaction";
    db.query("SELECT * FROM tbl_detail_transaction", (err, result) => {
        response(res, 200, result, "GET ALL DETAIL TRANSACTION");
    })
})

routes.get('/api_transaction', (req, res) => {
    const sql = "SELECT * FROM tbl_transaction";
    db.query(sql, (err, result) => {
        response(res, 200, result, "GET ALL TRANSAKSI");
    })
})

module.exports = routes;