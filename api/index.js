const aneks = require('../data/result.json')

const http = require('http');

const hostname = 'localhost';
const port = 3030;

const KEY_WORDS = ['шутку', 'шутка', 'анекдот', 'анек', "анекдот категории б"]

const server = http.createServer((req, res) => {
    let command = ''
    res.writeHead(200, { 'Content-Type': 'application/json' });
    const randomAnek = aneks['messages'][Math.round(Math.random() * 100)]['text']
    req.on('data', chunk => {
        const reqBody = JSON.parse(chunk)
        command = reqBody['request']['command'].toLowerCase()

    });

    Promise.resolve()
        .then(() => {
            for (let index = 0; index < KEY_WORDS.length; index++) {
                if (command.includes(KEY_WORDS[index])) {
                    res.write(JSON.stringify({
                        "response": {

                            "text": typeof randomAnek == 'string' ? randomAnek : randomAnek[0],
                            "tts": typeof randomAnek == 'string' ? randomAnek : randomAnek[0]
                        },
                        "version": "1.0"
                    }))
                    break
                }
            }

        }).finally(() => {
            res.end()
        })

});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});