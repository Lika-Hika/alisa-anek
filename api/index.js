const aneks = require('../data/result.json')

const http = require('http');

const hostname = 'localhost';
const port = 3030;

const KEY_WORDS = ['шутку, анекдот']

const server = http.createServer((req, res) => {
    let command = ''
    res.writeHead(200, { 'Content-Type': 'application/json' });
    const randomAnek = aneks['messages'][Math.round(Math.random() * 100)]['text']
    req.on('data', chunk => {
        const reqBody = JSON.parse(chunk)
        command = reqBody['request']['command']

    });

    Promise.resolve()
        .then(() => {
            res.write(JSON.stringify({
                "response": {

                    "text": randomAnek,
                    "tts": randomAnek
                },
                "version": "1.0"
            }))
        }).then(() => {
            res.end()
        })

});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});