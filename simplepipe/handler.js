'use strict';

const uuidv1 = require('uuid/v1');
const xCall = require('./externalCall');

module.exports.pipe = (event, context, callback) => {

  const exampleResponse = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Hello Motto, from a serverless Lambda function!',
      input: event,
      uuid: uuidv1()
    }),
  };

  // Invoke external request and execute callback function
  const result = xCall.invoke(callback, exampleResponse);

};
