const db = require('../db');
const bcrypt = require('bcrypt');

exports.getAllUsers = (req, res, next) => {
    let proc = "CALL getAllUsers";
    db.query(proc, (err,data,field) => {
        if(err) throw err;
        goodData = data[0];
        res.status(200).json({
            goodData,
            message: "getAllUsers success"
        })
    })
}