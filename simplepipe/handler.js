'use strict';

const uuidv1 = require('uuid/v1');

module.exports.pipe = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Hello Motto, from a serverless Lambda function!',
      input: event,
      uuid: uuidv1()
    }),
  };

  callback(null, response);

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });
};
