import NextAuth from "next-auth"
import Providers from "next-auth/react"
import CredentialsProvider from "next-auth/providers/credentials"
import { verifyPassword } from "../../../helpers/auth"
import { connectToDatabase } from "../../../helpers/db"

export default NextAuth({
  session: {
    jwt: true,
  },

  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        const client = await connectToDatabase()
        const usersCollection = await client.db().collection("users")
        const user = await usersCollection.findOne({ email: credentials.email })

        if (!user) {
          throw new Error("No user found!")
        }
        console.log(credentials, 'credentials', user.password)
        const isValid = await verifyPassword(
          credentials.password,
          user.password
        )

        if (!isValid) {
          client.close()
          throw new Error("Could not log you in.")
        }

        client.close()

        return { email: user.email }
      },
    }),
  ],
})
