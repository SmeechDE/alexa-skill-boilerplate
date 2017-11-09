const AWS = require('aws-sdk')

const config = () => {
  const production = false

  AWS.config.update({
    region: 'us-east-1',
    endpoint: 'https://dynamodb.us-east-1.amazonaws.com'
  })

  if (!production) {
    AWS.config.update({
      region: 'us-west-2',
      accessKeyId: 'fakeMyKeyId',
      secretAccessKey: 'fakeSecretAccessKey',
      endpoint: 'http://localhost:8000'
    })
  }
}

module.exports = config