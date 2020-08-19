const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Middleware
app.use('/css', express.static(__dirname + "public/css"));
app.use('/', function( req, res, next){
    console.log(`Someone made a request: ${req.url}`);
    res.cookie('cookinename', '45454');
    next();
})


app.get('/', function( req, res){
    res.send(`
    <html>
        <head>
         <link type="text/css" rel="stylesheet" href="/css/style.css">
        </head>
        <body>
            <h1>HEllo there!!</h1>
        </body>
    </html>
    `);
});


app.get('/api/user', function(req, res){
    res.send({
        name: 'Francis',
        lastname: 'David'
    })
});

// Params
app.get('/api/user/:id', function( req, res){
    res.send(`
    <html>
        <head>
            <link type="text/css" rel="stylesheet" href="/css/style.css" />
        </head>
        <body>
            <h1>${req.params.id}</h1>
        </body>
    </html>
    `);
}); 


// Query
app.get('/car', function( req, res){
    let brand = req.query.brand;
    let year = req.query.year;


    res.send({
        brand,
        year
    });
});



const port = process.env.PORT || 3000;
app.listen(port); 