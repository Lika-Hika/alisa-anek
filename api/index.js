const aneks = require('../data/result.json')

const http = require('http');

const hostname = 'localhost';
const port = 3030;

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    // aneks['messages'][Math.round(Math.random() * 100)]['text']


    res.write(JSON.stringify({
        "response": {

            "text": aneks['messages'][Math.round(Math.random() * 100)]['text'],
            "tts": aneks['messages'][Math.round(Math.random() * 100)]['text']
        },
        "version": "1.0"
    }))
    res.end()
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});