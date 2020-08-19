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
})


const port = process.env.PORT || 3000;
app.listen(port); 