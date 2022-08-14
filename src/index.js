const aneks = require('../data/result.json')

const https = require('https')

const fs = require('fs');

const options = {

    key: fs.readFileSync('key.pem'),
    cert: fs.readFileSync('cert.pem')
};

const app = function (req, res) {
    console.log(req)
    res.writeHead(200);
    res.end("hello world\n");
}


https.createServer(options, app).listen(3000);