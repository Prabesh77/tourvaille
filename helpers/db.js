
import { MongoClient } from 'mongodb'

// const connectionString = `mongodb+srv://prabesh:codeMachine@cluster0.pb8ij.mongodb.net/tourvaille?retryWrites=true&w=majority`
export const connectToDatabase = async () => {
    const client = await MongoClient.connect(`mongodb+srv://prabesh77:codeMachine1@tourvaille.mxqqq.mongodb.net/travel?retryWrites=true&w=majority`, {useUnifiedTopology: true});
    console.log(client)
    return client
}

