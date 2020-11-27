const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const schema = require('./schema/schema')
const mongoose = require('mongoose')

mongoose.connect(
	'mongodb+srv://test:test123@cluster0.dwygs.mongodb.net/gql-test?retryWrites=true&w=majority'
)
mongoose.connection.once('open', () => {
	console.log('connected to database')
})

const app = express()

app.use(
	'/graphql',
	graphqlHTTP({
		schema,
		graphiql: true
	})
)
app.listen(4000, () => {
	console.log('Listening....')
})
