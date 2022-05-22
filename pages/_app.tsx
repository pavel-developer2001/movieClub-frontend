import "../styles/globals.scss"
import type { AppProps } from "next/app"
import { ThemeProvider } from "../provider/ThemeProvider"
import Head from "next/head"
import NextNProgress from "nextjs-progressbar"
import { wrapper } from "../store"
import { useDispatch, useSelector } from "react-redux"
import { selectIsAuth } from "../store/modules/user/user.selector"
import { useEffect } from "react"
import { checkAuth } from "../store/modules/user/user.slice"
import { token } from "../services"
import { getUserData, userCheckout } from "../store/modules/user/user.actions"
import jwt_decode from "jwt-decode"

function MyApp({ Component, pageProps }: AppProps) {
  const isBrowser = typeof window !== "undefined"
  const isAuth = useSelector(selectIsAuth)
  const dispatch = useDispatch()
  const userId = token ? (jwt_decode(token) as any).sub : null
  useEffect(() => {
    if (token) {
      // dispatch(userCheckout())
      dispatch(checkAuth(!isAuth))
    }
  }, [])
  useEffect(() => {
    if (userId) {
      //@ts-ignore
      dispatch(getUserData(userId))
    }
  }, [])
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

export default wrapper.withRedux(MyApp)
