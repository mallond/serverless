'use strict';
const unirest = require('unirest');
// [Test Post via requestb.in](https://requestb.in] https://requestb.in/1lbyni81

var options = {
  "headers": {
    "accept-version": "1.0.0",
    "authorization": "Bearer ",
    "cache-control": "no-cache",
    "content-type": "text/xml",
    "issuer": "qqonlinecom",
    "postman-token": "6e5e8d8a-1967-fa00-1bd5-39ad73ef0c01",
  }
};

module.exports.invoke = (callback, response) => {
  // Super simple post request to third party test domain - does nothing, but it's free
  unirest.post('https://requestb.in/1lbyni81')
    .headers(options.headers)
    .send('<requestB/>')
    .end(function(requestbResponse) {
      response.externalRequest = requestbResponse.body;
      callback(null, response);
    })
}
