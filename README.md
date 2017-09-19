# serverless
First Serverless App

- [ServerLess](https://serverless.com)
- [ServerLess AWS](https://serverless.com/framework/docs/providers/aws/guide/quick-start/)
- [ServerLess Examples](https://github.com/serverless/examples)

```
- Credentials (AWS)
$ serverless config credentials --provider aws --key XXXXXX --secret XXXXX -overwrite

- Create simplepipe
$ serverless create --template aws-nodejs --path simplepipe
$ cd my-service
  Change handler.js 'hello' to 'pipe'
  Change handler.js message to 'message: 'Hello Motto, from a serverless Lambda function!','
  Change serverless.yml 'hello' to 'pipe'
$ npm init
$ npm install uuid --save
  Add uuid code to handler - used for unique transaction ids  
$ serverless deploy -v
$ serverless invoke -f pipe -l

- AWS API Gateway
$
$
$
```
