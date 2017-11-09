const AWS = require('aws-sdk')

var storage = (function() {
  var dynamodb = new AWS.DynamoDB.DocumentClient()
  return {
    save: function(prop, session, successCallback, errorCallback) {
      var params = {
        TableName: 'BoilerplateTable',
        Item: {
          ExampleTableColumn: prop
        }
      }
      dynamodb.put(params, (err, data) => {
        err ? errorCallback(err) : successCallback(data)
      })
    },
    scan: function(session, successCallback, errorCallback) {
      var params = {
        TableName: 'BoilerplateTable'
      }
      dynamodb.scan(params, (err, data) => {
        err ? errorCallback(err) : successCallback(data)
      })
    }
  }
})()

module.exports = storage