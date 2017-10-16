var wolves = require('../controllers/wolves.js');

module.exports = function (app) {
    app.get('/', function (req, res) {
        wolves.home(req,res)
    })
    
    app.get('/wolves/new', function (req, res){
        res.render('new_wolf')
    })
    
    app.post('/wolves/new', function (req, res) {
        wolves.creae(req,res)
    })
    
    app.get('/wolves/:id', function (req, res) {
        wolves.show(req,res)
    })
    
    app.get('/wolves/edit/:id', function (req, res) {
        wolves.editGet(req,res)
    })
    
    app.post('/wolves/:id', function (req, res) {
    
       wolves.editPost(req,res)
    })
    
    app.post('/wolves/destroy/:id', function (req, res) {
        wolves.destroy(req, res)
    })

}
