
import { MongoClient } from 'mongodb'

export const connectToDatabase = async () => {
    const client = await MongoClient.connect(`mongodb+srv://prabesh77:codeMachine1@tourvaille.mxqqq.mongodb.net/travel?retryWrites=true&w=majority`, {useUnifiedTopology: true});
    console.log(client)
    return client
}

