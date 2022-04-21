import { connectToDatabase } from "../../../helpers/db"

const handler = async (req, res) => {
  if (req.method === "GET") {
    const client = await connectToDatabase()
    const db = await client.db()
    const data = await db.collection("trekking").find().toArray()
    res.status(200).json(data)
    client.close()
  }

  if (req.method === "POST") {
    if (req.method === "POST") {
      const client = await connectToDatabase()
      const db = await client.db()
      const data = req.body
      const {
        name,
        image,
        HighestAccess,
        Duration,
        DaysGroupSize,
        Coordinates,
        ELocation,
        Country,
        Airport,
        DepartureFrom,
        Grade,
        Accomodation,
        tMeals,
        Transportation,
        BestSeason,
        MajorActivity,
        IncludeActivity,
        Culture,
        Himalayansights,
        desc,
      } = data
      const result = await db.collection("trekking").insertOne({
        name,
        image,
        HighestAccess,
        Duration,
        DaysGroupSize,
        Coordinates,
        ELocation,
        Country,
        Airport,
        DepartureFrom,
        Grade,
        Accomodation,
        tMeals,
        Transportation,
        BestSeason,
        MajorActivity,
        IncludeActivity,
        Culture,
        Himalayansights,
        desc,
      })
      res.status(201).json({ message: "Trekking added" })
      client.close()
    }
  }
  if(req.method === 'DELETE') {
    const client = await connectToDatabase()
    const db = await client.db()
    const data = req.body
    const {deleteRaftId} = data
    // console.log(req)
    const result = await db.collection('trekking').deleteOne({_id: data})
    res.status(201).json({message: 'Trekking deleted'})
    client.close()
  }
}

export default handler
