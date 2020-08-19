const http = require('http');
const fs = require('fs');


let HTML = fs.readFileSync(`${__dirname}/index.html`);

const names = ["francis", "Minime", "roby"];
const cars = {
    name: "Ford",
    model: "Fiesta"
}

const server = http.createServer( function(req, res) {
    
    if(req.url === "/"){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(HTML);
    }
    else if( req.url === "/api/user"){
        res.writeHead(200, {'Content-Type': 'text/json'});
        const json = JSON.stringify({
                names,
                cars
            });
            res.end(json);
    }
    else{
        res.writeHead(404);
        res.end();
    }
    
})

server.listen(8181, '127.0.0.1');
console.log('Server is listening on port 8181');