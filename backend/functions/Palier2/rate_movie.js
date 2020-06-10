const DynamoDB = require('aws-sdk/clients/dynamodb');

module.exports.handle = async event => {
    const data = JSON.parse(event.body);

    if (!process.env.tableName) {
        throw new Error('env.tableName must be defined');
    }
    const dynamoDb = new DynamoDB.DocumentClient();
    const name = data.Name
    const type = data.Type

    const result = await dynamoDb.update({
        TableName: process.env.tableName,
        Key:{'Name':name,'Type':type},
        ExpressionAttributeValues:{':note':data.note,':c':1}, /* puisque les multiplications/divisions ne sont pas disponibles
                                                                sur dynamoDb, on choisit de cumuler les notes 
                                                                ainsi que leur nombre pour avoir une moyenne */
        UpdateExpression: 'ADD number_notes :c , note :note',
        ReturnValues:'UPDATED_NEW'
    }).promise();

    return {
        statusCode: 200,
        headers: {
            'Access-Control-Allow-Origin': 'http://localhost:3000', // Required for CORS support to work
            'Access-Control-Allow-Credentials': true, // Required for cookies, authorization headers with HTTPS
          },
        body: JSON.stringify(result.Attributes),
    }
}

