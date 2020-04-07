const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const dotenv = require("dotenv")
const cors = require('cors')

const app = express();
app.use(cors())
const mongoUser = dotenv.config().parsed.MONGO_USER
const mongoPW = dotenv.config().parsed.MONGO_PW

mongoose.connect(`mongodb://${mongoUser}:${mongoPW}@cluster0-shard-00-00-cjiof.mongodb.net:27017,cluster0-shard-00-01-cjiof.mongodb.net:27017,cluster0-shard-00-02-cjiof.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority`, { 
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
