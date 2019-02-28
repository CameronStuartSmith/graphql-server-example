const express = require('express');
const expressGraphQL = require('express-graphql');
const schema = require('./graphql/schema');

const app = express();

app.get('/', (req, res) => {
	res.send('Hello World');
});

app.use('/graphql', expressGraphQL({
	schema,
	// Allows you to use graphiql located at localhost:5000/graphql
	graphiql: process.env.NODE_ENV !== 'production'
}));



app.listen(5000, () => {
	console.log('Server started on Port 5000');
})