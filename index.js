const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 5000 

app.use('/', express.static(path.join(__dirname, 'Static')));

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, 'Static/TicTac.html'));
});


app.listen(PORT, () => console.log(`Server started on port ${PORT}`)); 