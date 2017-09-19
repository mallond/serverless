![awslambda](https://user-images.githubusercontent.com/993459/30618317-b46fec10-9d4e-11e7-8b88-fa506380a9e4.png)

# Serverless - The FaaS (Function-as-a-Service)
## Observations and notes

- [ServerLess](https://serverless.com)
- [ServerLess AWS](https://serverless.com/framework/docs/providers/aws/guide/quick-start/)
- [ServerLess Examples](https://github.com/serverless/examples)


### Credentials (AWS)
```
  IAM serverless has administrator access
$ serverless config credentials --provider aws --key XXXXXX --secret XXXXX -overwrite

```

### Create simplepipe
```
$ serverless create --template aws-nodejs --path simplepipe
$ cd my-serviceÓ
  Change handler.js 'hello' to 'pipe'
  Change handler.js message to 'message: 'Hello Motto, from a serverless Lambda function!','
  Change serverless.yml 'hello' to 'pipe'
$ npm init
$ npm install uuid --save
  Add uuid code to handler - used for unique transaction ids
  Change serverless.yml stage and region
$ serverless deploy -v
    Serverless: Publish service to Serverless Platform...
    Service successfully published! Your service details are available at:
$ serverless invoke -f pipe -l

```

### Testing locally
```
  [aws-lambda-local](https://github.com/Max-Kolodezniy/aws-lambda-local)
$ npm install -g aws-lambda-local
$ lambda-local -f handler -e event.json -t 20

```

### AWS API Gateway
Needed to access the FaaS
[AWS API for lambda](http://docs.aws.amazon.com/apigateway/latest/developerguide/getting-started.html)

### Other
[Test Post via requestb.in](https://requestb.in]
  https://requestb.in/1lbyni81
```  
curl -X POST -d "fizz=buzz" https://requestb.in/1lbyni81
```
