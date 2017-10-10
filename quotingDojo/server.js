var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/basic_mongoose');

app.use(bodyParser.urlencoded({ extended: true }));
var path = require('path');
app.use(express.static(path.join(__dirname, './static')));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.listen(8000, function() {
    console.log("listening on port 8000");
})

var QuoteSchema = new mongoose.Schema({
    name: String,
    quote: String
})
   
mongoose.model('Quote', QuoteSchema); // We are setting this Schema in our Models as 'User'
var Quote = mongoose.model('Quote') // We are retrieving this Schema from our Models, named 'User'
   

app.get('/', function(req, res) {
    
    res.render('index')

    
})
app.post('/quotes', function (req, res) {
    console.log("POST DATA", req.body);
    // create a new User with the name and age corresponding to those from req.body
    var quote = new Quote({ name: req.body.name, quote: req.body.quote });
    quote.save(function (err) {
        if (err) {
            console.log('something went wrong');
        } else { 
            console.log('successfully added a quote!');
            res.redirect("/quotes")
        }
    })
})

app.get('/quotes', function (req, res) {
    Quote.find({}, function (err, quotes) {
        if (err) {
            console.log("Something went wrong")
        }
        else {
            res.render('quotes', { quotes: quotes })
        }
    })
})