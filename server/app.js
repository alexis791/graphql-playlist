const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const schema = require('./schema/schema')
const mongoose = require('mongoose')
const MONGODB_URI = require('./config')

mongoose.connect(MONGODB_URI)
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
