var express = require("express");
var bodyParser = require('body-parser');
var session = require('express-session')
var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/static"));
app.use(session({secret: 'codingdojorocks'}));

app.set('views', __dirname + '/views'); 
app.set('view engine', 'ejs');

app.listen(8000, function() {
    console.log("listening on port 8000");
  })

//routes

app.get('/', function (request, response) {
    
    response.render('index')
})

app.post('/results', function (request, response){
    var context = {
        name: request.body.entered_name,
        dojo: request.body.dojo,
        language: request.body.language,
        comment: request.body.comment
    }
    console.log(context)
    response.render('result', context)
})


