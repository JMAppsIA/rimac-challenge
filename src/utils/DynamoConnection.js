const AWS = require("aws-sdk");
const ErrorBuilder = require("../utils/ErrorBuilder");

class DynamoConnection {
  static async saveDynamo(params) {
    try {
      const dynamoDb = new AWS.DynamoDB.DocumentClient({
        apiVersion: "2012-08-10",
        region: process.env.region,
      });
      await dynamoDb
        .put(params)
        .promise()
        .then(
          (res) => {
            return res;
          },
          (error) => {
            console.error(error);
            throw new ErrorBuilder({
              code: error.code,
              httpCode: error.httpCode,
              messages: error.messages,
            });
          }
        );
    } catch (error) {
      console.error(error);
      throw new ErrorBuilder({
        code: error.code,
        httpCode: error.httpCode,
        messages: error.messages,
      });
    }
  }

  static async scanDynamo(query) {
    try {
      const dynamoDb = new AWS.DynamoDB.DocumentClient({
        apiVersion: "2012-08-10",
        region: process.env.region,
      });
      const result = await dynamoDb.scan(query).promise();
      return result;
    } catch (error) {
      throw new ErrorBuilder({
        code: error.code,
        httpCode: error.httpCode,
        messages: error.messages,
      });
    }
  }
}

module.exports = DynamoConnection;
