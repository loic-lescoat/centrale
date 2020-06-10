const DynamoDB = require('aws-sdk/clients/dynamodb');

module.exports.handle = async event => {
    if (!process.env.tableName) {
        throw new Error('env.tableName must be defined');
    }
    const data = JSON.parse(event.body);
    const dynamoDb = new DynamoDB.DocumentClient();
    const result = await dynamoDb.query({
        TableName: process.env.tableName ,
        KeyConditionExpression: '#type= :type',
        FilterExpression: 'contains(#condition,:value)', /* permet de trier par genre, par année, 
                                                            langue et pays mais pas par nom ou type*/
        ExpressionAttributeNames: {
            '#type': 'Type','#condition': data.condition
        },
        ExpressionAttributeValues: {
            ':type': "movie",':value':data.value
        },
    }).promise();

    return {
        statusCode: 200,
        headers: {
            'Access-Control-Allow-Origin': 'http://localhost:3000', // Required for CORS support to work
            'Access-Control-Allow-Credentials': true, // Required for cookies, authorization headers with HTTPS
          },
        body: JSON.stringify(result.Items),
    }
}
