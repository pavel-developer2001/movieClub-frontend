import "../styles/globals.scss"
import type { AppProps } from "next/app"
import { ThemeProvider } from "../provider/ThemeProvider"
import Head from "next/head"
import NextNProgress from "nextjs-progressbar"

function MyApp({ Component, pageProps }: AppProps) {
  const isBrowser = typeof window !== "undefined"
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{"MovieClub"}</title>
      </Head>
      {isBrowser && (
        <ThemeProvider>
          <NextNProgress />
          <Component {...pageProps} />
        </ThemeProvider>
      )}
    </>
  )
}

export default MyApp
