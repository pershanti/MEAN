var mongoose = require('mongoose');
var Wolf = mongoose.model('Wolf');

module.exports = {
    home: function (req, res) {
        Wolf.find({}, function (err, wolves) {
            if (err) {
                console.log("Something went wrong")
            }
            else {
                res.render('index', { wolves: wolves })
            }
        })
    },

    show: function (req, res) {
        Wolf.find({_id: req.params.id}, function (err, wolves) {
            if (err) {
                console.log("Something went wrong")
            }
            else {
                res.render('display_wolf', { wolves: wolves })
            }
        })
    },
    create:function (req, res) {
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
    },

    editGet: function (req, res) {
        Wolf.find({_id: req.params.id}, function (err, wolves) {
            if (err) {
                console.log("Something went wrong")
            }
            else {
                res.render('edit_wolf', { wolves: wolves })
            }
        })
    },

    editPost: function (req, res) {
        Wolf.update({_id: req.params.id}, {name: req.body.name, color: req.body.color},function (err) {
            if (err) {
                console.log('something went wrong');
            } else { 
                console.log('successfully saved changes!');
                res.redirect("/")
            }
        })
    },

    destroy: function (req, res) {
        Wolf.remove({_id: req.params.id}, function (err) {
            if (err) {
                console.log('something went wrong');
            } else { 
                console.log('successfully deleted wolf!');
                res.redirect("/")
            }
        })   
    }
}