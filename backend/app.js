const express = require('express');
var mysql      = require('mysql');

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'tweetly'
});

connection.connect(function(err) {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }
    console.log('connected as id ' + connection.threadId);
});

const getAllUsers = connection.query('CALL getAllUsers', (error, results, fields) => {
    if(error){
        return console.error(error.message);
    }
    console.log(results[0]);
})


const app = express();

app.use((req, res) => {
    res.json({ message : 'Votre requête a bien été recue'});
});

module.exports = app;