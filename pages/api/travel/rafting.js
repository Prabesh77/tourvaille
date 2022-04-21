import { connectToDatabase } from "../../../helpers/db"

const handler = async (req, res) => {
  if (req.method === "GET") {
    const client = await connectToDatabase()
    const db = await client.db()
    const data = await db.collection("rafting").find().toArray()
    res.status(200).json(data)
    client.close()
  }
  if (req.method === "POST") {
    const client = await connectToDatabase()
    const db = await client.db()
    const data = req.body
    const { name, image, RaftingStarts, RaftingEnds, Grades, Duration, Distance, BestSeason, PerfectFor, Difficulty, TourStartsAt, desc } = data
    const result = await db.collection("rafting").insertOne({
      name, image, RaftingStarts, RaftingEnds, Grades, Duration, Distance, BestSeason, PerfectFor, Difficulty, TourStartsAt, desc
    })
    res.status(201).json({ message: "Rafting added" })
    client.close()
  }
  if(req.method === 'DELETE') {
    const client = await connectToDatabase()
    const db = await client.db()
    const data = req.body
    const {deleteRaftId} = data
    // console.log(req)
    const result = await db.collection('rafting').deleteOne({_id: data})
    res.status(201).json({message: 'Rafting deleted'})
    client.close()
  }
}

export default handler
