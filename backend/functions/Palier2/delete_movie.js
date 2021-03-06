const DynamoDB = require('aws-sdk/clients/dynamodb');

module.exports.handle = async event => {
    const data = JSON.parse(event.body);

    if (!process.env.tableName) {
        throw new Error('env.tableName must be defined');
    }
    const dynamoDb = new DynamoDB.DocumentClient();
    const name = data.Name
    const type = data.Type

    const result = await dynamoDb.delete({
        TableName: process.env.tableName,
        Key:{'Name':name,'Type':type},
        ReturnValues:'ALL_OLD'
        }).promise();

    return {
        statusCode: 200,
        headers: {
            'Access-Control-Allow-Origin': 'http://localhost:3000', // Required for CORS support to work
            'Access-Control-Allow-Credentials': true, // Required for cookies, authorization headers with HTTPS
          },
        body:"You just deleted this item:"+ JSON.stringify(result.Attributes),
    }
}
