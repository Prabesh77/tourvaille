import { connectToDatabase } from "../../../helpers/db"

const handler = async (req, res) => {
 if(req.method === 'POST') {
  const client = await connectToDatabase()
  const db = await client.db()
  const data =  await db.collection('favourites').insertOne(req.body)
  res.status(200).json(data)
 }
 else if (req.method === 'DELETE') {
  const client = await connectToDatabase()
  const db = await client.db()
  const data =  await db.collection('favourites').remove({user: req.body.user, _id: req.body._id})
  res.status(200).json(data)
 }
 
  client.close()

}

export default handler
