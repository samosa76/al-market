const express = require('express');
const routes = express.Router();
const db = require('../database/database');
const response = require("../response/response");

/**
 * Ini import hasil dari serial port
 */
const rfuid = require('../Handler/UidHandler');


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


/**
 * 
 * Coba buka http://localhost:8000/api_uid
 * kalo di bagian data : "(Uid)" ini udah masuk sesuai dengan uid card berarti success
 * 
 */
routes.get('/api_uid', (req,res) => {
    /**
     * 
     * Disini masukin rfuid yang tadi jadi json
     * 
     */
    response(res, 200, rfuid, "GET UID");
})

module.exports = routes;