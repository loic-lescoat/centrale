const uuid = require('uuid');
const DynamoDB = require('aws-sdk/clients/dynamodb');

module.exports.handle = async event => {
    const data = JSON.parse(event.body);

    if (!process.env.tableName) {
        throw new Error('env.tableName must be defined');
    }
    const dynamoDb = new DynamoDB.DocumentClient();

    const item = {
        Type: 'movie',
        Genre: data.Genre.split(','),
        Name: data.Name,
        Year: data.Year,
        Country: data.Country,
        Language: data.Language,
        Actors: data.Actors.split(','),    
        createdAt: Date.now(),
        Poster: data.Poster,
        Synopsis: data.Plot
    }

    await dynamoDb.put({
        TableName: process.env.tableName,
        Item: item,
    }).promise();

    return {
        statusCode: 200,
        headers: {
            'Access-Control-Allow-Origin': 'http://localhost:3000', // Required for CORS support to work
            'Access-Control-Allow-Credentials': true, // Required for cookies, authorization headers with HTTPS
          },
        body: JSON.stringify(item),
    }
}

