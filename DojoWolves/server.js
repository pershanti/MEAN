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

var WolfSchema = new mongoose.Schema({
    name: String,
    color: String
})
   
mongoose.model('Wolf', WolfSchema); 
var Wolf = mongoose.model('Wolf')
   

app.get('/', function (req, res) {
    Wolf.find({}, function (err, wolves) {
        if (err) {
            console.log("Something went wrong")
        }
        else {
            res.render('index', { wolves: wolves })
        }
    })
})

app.get('/wolves/new', function (req, res){
    res.render('new_wolf')
})


app.post('/wolves/new', function (req, res) {
    console.log("POST DATA", req.body);
    // create a new User with the name and age corresponding to those from req.body
    var wolf = new Wolf({ name: req.body.name, color: req.body.color });
    wolf.save(function (err) {
        if (err) {
            console.log('something went wrong');
        } else { 
            console.log('successfully added a wolf!');
            res.redirect("/")
        }
    })
})

app.get('/wolves/:id', function (req, res) {
    Wolf.find({_id: req.params.id}, function (err, wolves) {
        if (err) {
            console.log("Something went wrong")
        }
        else {
            res.render('display_wolf', { wolves: wolves })
        }
    })

})

app.get('/wolves/edit/:id', function (req, res) {
    Wolf.find({_id: req.params.id}, function (err, wolves) {
        if (err) {
            console.log("Something went wrong")
        }
        else {
            res.render('edit_wolf', { wolves: wolves })
        }
    })
})



app.post('/wolves/:id', function (req, res) {

    Wolf.update({_id: req.params.id}, {name: req.body.name, color: req.body.color},function (err) {
        if (err) {
            console.log('something went wrong');
        } else { 
            console.log('successfully saved changes!');
            res.redirect("/")
        }
    })
})

app.post('/wolves/destroy/:id', function (req, res) {
        Wolf.remove({_id: req.params.id}, function (err) {
            if (err) {
                console.log('something went wrong');
            } else { 
                console.log('successfully deleted wolf!');
                res.redirect("/")
            }
        })
    
    })

