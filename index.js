const axios = require('axios');

module.exports = async function (context, req) {
    const TELEGRAPH_URL = 'https://api.openai.com';
    const url = new URL(req.url);
    url.host = TELEGRAPH_URL.replace(/^https?:\/\//, '');

    const options = {
        headers: req.headers,
        method: req.method,
        data: req.body,
        url: url.toString(),
    };

    let response = await axios(options);
    
    context.res = {
        // status: 200, /* Defaults to 200 */
        body: response.data,
        headers: {
            'Access-Control-Allow-Origin' : '*'
        }
    };
}
