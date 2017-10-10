var express = require("express");
var bodyParser = require('body-parser');
var session = require('express-session')
var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/static"));
app.use(session({secret: 'codingdojorocks'}));

// This sets the location where express will look for the ejs views
app.set('views', __dirname + '/views'); 
// Now lets set the view engine itself so that express knows that we are using ejs as opposed to another templating engine like jade
app.set('view engine', 'ejs');

app.listen(8000, function() {
    console.log("listening on port 8000");
  })


  
//routes

app.get('/', function(request, response) {
    response.render('index')
})

app.get("/users", function (request, response){
    // hard-coded user data
    var users_array = [
        {name: "Michael", email: "michael@codingdojo.com"}, 
        {name: "Jay", email: "jay@codingdojo.com"}, 
        {name: "Brendan", email: "brendan@codingdojo.com"}, 
        {name: "Andrew", email: "andrew@codingdojo.com"}
    ];
    response.render('users', {users: users_array});
})

app.post('/users', function (req, res) {
    req.session.name = req.body.name;
    console.log(req.session.name);
    res.redirect('/')
  })

