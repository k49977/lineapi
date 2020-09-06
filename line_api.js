const request = require('request');


const options = {
    uri: 'https://notify-api.line.me/api/notify',
    headers: {
        'Authorization': "Bearer PlO5XBZ83oGjdGrOEjMBeLDivI8PGTEkshXRj3i4bwI"
    },
    form: {
        "message": "test"
    }
};

request.post(options, (error, response, body) => {
    if (error) {
        console.error(error);
        return;
    }

    console.log(body);
});


// curl -X POST -H 'Authorization: Bearer PlO5XBZ83oGjdGrOEjMBeLDivI8PGTEkshXRj3i4bwI' -F "message=test" https://notify-api.line.me/api/notify
// https://qiita.com/hira_kaz/items/e0d09a7cdb66f3049e43

// ターミナルで 「　node /Users/takekawaryohei/Documents/private/line_api.js　」で叩ける