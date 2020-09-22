new Promise(function (resolve, reject) {

    // BTCの今日の値段を取得する(btc api)
    const request1 = require('request');

    const options1 = {
        uri: 'https://api.zaif.jp/api/1/ticker/btc_jpy',
    };

    request1.get(options1, (error, response, body) => {
        if (error) {
            console.error(error);
            return;
        }

        const data = JSON.parse(body);
        resolve("本日のBTCの値段は"+data.last.toLocaleString() + "円");

    });

}).then(function (message) {

    //LINEにBTCの今日の値段を送る(line api)
    const request = require('request');

    const options = {
        uri: 'https://notify-api.line.me/api/notify',
        headers: {
            'Authorization': "Bearer PlO5XBZ83oGjdGrOEjMBeLDivI8PGTEkshXRj3i4bwI"
        },
        form: {
            "message": message
        }
    };

    request.post(options, (error, response, body) => {
        if (error) {
            console.error(error);
            return;
        }

        console.log(body);
    });

});


// curl -X POST -H 'Authorization: Bearer PlO5XBZ83oGjdGrOEjMBeLDivI8PGTEkshXRj3i4bwI' -F "message=test" https://notify-api.line.me/api/notify
// https://qiita.com/hira_kaz/items/e0d09a7cdb66f3049e43

// ターミナルで 「　node /Users/takekawaryohei/Documents/private/lineapi/line_api.js　」で叩ける


//TODO 毎日何時に送る
//crontab -e