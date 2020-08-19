const express = require('express');
const app = express();

app.get('/', function( req, res){
    res.send(`
    <html>
        <body>
            <h1 style="background:red;">HEllo there!!</h1>
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
        <body>
            <h1 style="background:red;">${req.params.id}</h1>
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