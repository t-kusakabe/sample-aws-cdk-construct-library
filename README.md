# sample-aws-cdk-construct-library

## Deploy

**High Level Construct**

```
cdk deploy AwsCdkHighLevelConstructLibrarySampleStack
curl -sS -X POST https://XXXXXXXXXXX.execute-api.ap-northeast-1.amazonaws.com/prod/sample
```

## Useful commands

 * `npm run build`   compile typescript to js
 * `npm run watch`   watch for changes and compile
 * `npm run test`    perform the jest unit tests
 * `cdk deploy`      deploy this stack to your default AWS account/region
 * `cdk diff`        compare deployed stack with current state
 * `cdk synth`       emits the synthesized CloudFormation template
