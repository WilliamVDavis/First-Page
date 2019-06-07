const express = require('express');
const mysql = require('mysql');

const connection = mysql.createConnection({
// properties...
host: 'localhost',
user: 'root',
password: '',
database: 'Boondocks'
});

connection.connect(function(error) {
    if(error) {
        console.log('Error');
    } else {
        console.log('Connected');
    }
});

app.get('/', function(req, resp) {
    // about mysql
    connection.query("SELECT * FROM Boondocks", function(error, rows, fields))
    //callback
    if (error) {
        console.log('Error in the query');
    } else {
        console.log('Sucessful query');
        //parse with your rows/fields
    }
});
const path = require('path');
const app = express();
const PORT = process.env.PORT || 5000 

app.use('/', express.static(path.join(__dirname, 'Static')));

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, 'Static/TicTac.html'));
});


app.listen(PORT, () => console.log(`Server started on port ${PORT}`)); 