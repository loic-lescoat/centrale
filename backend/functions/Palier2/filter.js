const DynamoDB = require('aws-sdk/clients/dynamodb');

module.exports.handle = async event => {
    if (!process.env.tableName) {
        throw new Error('env.tableName must be defined');
    }
    const data = JSON.parse(event.body)
    const dynamoDb = new DynamoDB.DocumentClient();
    const idName=data.IndexName
    if (idName){
        const result = await dynamoDb.query({
        TableName: process.env.tableName ,
        IndexName: idName,
        KeyConditionExpression: '#sortKey= :sortKey AND #type= :type',
        
        ExpressionAttributeValues: {
            ':sortKey': data[idName.slice(2)],':type':data.Type},
        ExpressionAttributeNames: {
            '#type': 'Type','#sortKey': idName.slice(2)
            }
    }).promise();;

    if (result.Items) {
        return {
            statusCode: 200,
            headers: {
                'Access-Control-Allow-Origin': 'http://localhost:3000', // Required for CORS support to work
                'Access-Control-Allow-Credentials': true, // Required for cookies, authorization headers with HTTPS
              },
            body: JSON.stringify(result.Items),
        }
    } else {
        return {
            statusCode: 404,
            headers: {
                'Access-Control-Allow-Origin': '*', // Required for CORS support to work
                'Access-Control-Allow-Credentials': true, // Required for cookies, authorization headers with HTTPS
              },
            body: 'Not found'
        }
    }
}   else { 
    const result = await dynamoDb.query({
    TableName: process.env.tableName ,
    KeyConditionExpression: '#sortKey= :sortKey AND #type= :type',
    
    ExpressionAttributeValues: {
        ':sortKey': data.Name,':type':data.Type},
    ExpressionAttributeNames: {
        '#type': 'Type','#sortKey': 'Name'
        }
}).promise();;

if (result.Items) {
    return {
        statusCode: 200,
        headers: {
            'Access-Control-Allow-Origin': 'http://localhost:3000', // Required for CORS support to work
            'Access-Control-Allow-Credentials': true, // Required for cookies, authorization headers with HTTPS
          },
        body: JSON.stringify(result.Items),
    }
} else {
    return {
        statusCode: 404,
        headers: {
            'Access-Control-Allow-Origin': '*', // Required for CORS support to work
            'Access-Control-Allow-Credentials': true, // Required for cookies, authorization headers with HTTPS
          },
        body: 'Not found'
    }
}
}
}
