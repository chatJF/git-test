var express = require('express');

var app = express();

//Express middleware  any requests to /assets will be mapped to 'assets' folder - serves static files
app.use('/assets', express.static('assets'));

app.get('/', function(req, res){
    //res.render('home')
    res.send('hello');
});

//set the port 3000
app.listen(3000);
console.log('listening to port 3000')