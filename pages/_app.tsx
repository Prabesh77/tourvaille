import "../styles/globals.css"
import "../styles/loader.css"
import { AppProps } from "next/app"
import { SessionProvider } from "next-auth/react"
import { NotificationContextProvider } from "../store/notification-store"
import Layout from '../components/layout/layout'

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <NotificationContextProvider>
      <SessionProvider session={pageProps.session}>
        {" "}
        <Layout>
        <Component {...pageProps} />

        </Layout>
      </SessionProvider>
    </NotificationContextProvider>
  )
}

export default MyApp
