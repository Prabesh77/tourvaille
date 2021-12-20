import { connectToDatabase } from "../../../helpers/db"

const handler = async (req, res) => {
 
  const client = await connectToDatabase()
  const db = await client.db()
  const data =  await db.collection('trekking').find().toArray()
  res.status(200).json(data)
  client.close()

}

export default handler
