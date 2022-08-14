// const aneks = require('../data/result.json')

// const https = require('https')

// const fs = require('fs');

// const options = {

//     key: fs.readFileSync('key.pem'),
//     cert: fs.readFileSync('cert.pem')
// };

// const app = function (req, res) {
//     console.log(req)
//     res.writeHead(200);
//     res.end("hello world\n");
// }


// https.createServer(options, app).listen(3000);

// Для асинхронной работы используется пакет micro.
const { json } = require('micro');

// Запуск асинхронного сервиса.
module.exports = async (req, res) => {

    // Из запроса извлекаются свойства request, session и version.
    const { request, session, version } = await json(req);

    res.status(200).send(`Hello ${request.original_utterance}!`);

    // console.log(request.original_utterance);

    // // В тело ответа вставляются свойства version и session из запроса.
    // // Подробнее о формате запроса и ответа — в разделе Протокол работы навыка.
    // res.end(JSON.stringify(
    //     {
    //         version,
    //         session,
    //         response: {
    //             // В свойстве response.text возвращается исходная реплика пользователя.
    //             // Если навык был активирован без дополнительной команды,
    //             // пользователю нужно сказать "Hello!".
    //             text: request.original_utterance || 'Hello!',

    //             // Свойство response.end_session возвращается со значением false,
    //             // чтобы диалог не завершался.
    //             end_session: false,
    //         },
    //     }
    // ));
};