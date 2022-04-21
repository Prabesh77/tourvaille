
import { hashPassword } from "../../../helpers/auth"
import { connectToDatabase } from "../../../helpers/db"

const handler = async (req, res) => {

    if(req.method !== 'POST') {
        return
    }
  const data = req.body
  const { email, password, type } = data

  if (
    !email ||
    !email.includes("@") ||
    !password ||
    password.trim().length < 7
  ) {
    res.status(422).json({ message: "Invalid Input- Pwd must be > 7" })
  }

  const client = await connectToDatabase()
  const db = client.db()
  const existingUser = await db.collection('users').findOne({email})
  if (existingUser) {
      res.status(422).json({message: 'Admin already exists!'})
      client.close()
      return;
  }

  const hashedPassword = await hashPassword(password)

  const result = await db.collection("users").insertOne({
      email, password: hashedPassword, type
  })

  res.status(201).json({message: 'Admin created!'})
  client.close()
}

export default handler
