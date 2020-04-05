const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const dotenv = require("dotenv")

const app = express();
const mongoUser = dotenv.config().parsed.MONGO_USER
const mongoPW = dotenv.config().parsed.MONGO_PW

mongoose.connect(`mongodb+srv://${mongoUser}:${mongoPW}@cluster0-cjiof.mongodb.net/test?retryWrites=true&w=majority`, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
})

mongoose.connection.once('open', () => {
    console.log('conneted to database');
})

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}))

app.listen(4000, () => {
    console.log('now listening for requests on port 4000')
})
