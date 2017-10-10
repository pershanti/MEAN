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
    
    if (request.session.count == null) {
        request.session.count = 1
        console.log(request.session.count)
    }
    else {
        request.session.count += 1
        console.log(request.session.count)
    }
    
    response.render('index', {count: request.session.count})
})

app.post('/results', function (request, response){
    request.session.count += 1
    response.redirect("/")
})

app.post('/reset', function (request, response){
    request.session.count = 0
    response.redirect("/")
})

