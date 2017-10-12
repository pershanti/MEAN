var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/message_board');

app.use(bodyParser.urlencoded({ extended: true }));
var path = require('path');
app.use(express.static(path.join(__dirname, './static')));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.listen(8000, function() {
    console.log("listening on port 8000");
})


var Schema = mongoose.Schema


var CommentSchema = new mongoose.Schema({
    _message: {type: Schema.Types.ObjectId, ref: 'Message'},
    name: {type: String, requred: true, minlength: 4},
    comment: {type: String, requred: true}
})


var MessageSchema = new mongoose.Schema({
    content: {type: String, requred: true},
    name: {type: String, requred: true, minlength: 4},
    _comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}]
})

var Message = mongoose.model('Message', MessageSchema); 
var Comment = mongoose.model('Comment', CommentSchema); 


app.get("/", function (req, res) {
    Message.find({}, false, true).populate('_comments').exec(function(err, messages){
        res.render('index', {messages: messages});
  })
})

app.post("/comments/:id", function(req, res){
    console.log(req.body)
    console.log(req.params)
    var comment_data = {name: req.body.name, comment: req.body.comment, _message: req.params.id}
    var new_comment = new Comment(comment_data)
    Message.findOne({ _id: req.params.id }, function (err, message) {
        message._comments.push(new_comment)
        message.save(function (err, results) {
            if (err) {
                console.log(err)
                console.log("something is wrong")
            }
            else {
                new_comment.save(function (err, comment_results){
                    if (err) {
                        console.log(results)
                    }
                    else {
                        res.redirect("/")
                    }
                })
            }
        })
    })
});

app.post("/message", function (req, res) {
    var msg = new Message({ name: req.body.name, content: req.body.content});
    msg.save(function (err) {
        if (err) {
            console.log('something went wrong'); 
        } else { 
            console.log('successfully added a message!');
            res.redirect("/")
        }
    })
})