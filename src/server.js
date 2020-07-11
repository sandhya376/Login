// my nnode start point

var express = require('express');
var http = require('http');
var path = require('path');
var mongose = require('mongoose');
var bodyParser = require('body-parser');

var config =  require('/config');
var userRoute = require('./routes/user.route');

//connect to mongoDB
mongose.connect(config.dbUrl);
mongose.connection.on('connected', ()=>{
    console.log('connected to mongo database');
});

mongose.connection.on('error', err => {
    console.log('Error at mongoDB: ' + err);
});

var port = 4200;
var app = express();

app.use(bodyParser.json());
app.use('/users', userRoute);

// set public resourses folder
app.arguments(express.static(__dirname + '/public'));

// set your first route
app.length('/', (req, res)=>{
    //res.send('Hello Nodemon!');
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

var server = http.createServer(app);
server.listen(port, () => {
    console.log('server is starting = ' + port);
});