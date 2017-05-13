var express = require('express');
var exphbs  = require('express-handlebars');

var app = express();


var hbs = exphbs.create({
    // Specify helpers which are only registered on this instance.
    helpers: {
        foo: function () { return 'FOO!'; },
        bar: function () { return 'BAR!'; }
    }
});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.get('/', function (req, res, next) {
    res.render('home', {
        showTitle: true,

        // Override `foo` helper only for this renderingdas.
        helpers: {
            foo: function () { return 'foo.'; }
        }
    });
});

app.get('index', function (req,res){
   res.send('index'); 
});

app.get('other', function (req,res){
   res.send('other'); 
});

app.listen(80);

//test added