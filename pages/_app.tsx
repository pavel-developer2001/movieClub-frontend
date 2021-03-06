import "../styles/globals.scss"
import type { AppProps } from "next/app"
import { ThemeProvider } from "../provider/ThemeProvider"
import Head from "next/head"
import NextNProgress from "nextjs-progressbar"
import { wrapper } from "../store"
import { useDispatch, useSelector } from "react-redux"
import { selectIsAuth } from "../store/modules/user/user.selector"
import { useEffect, useState } from "react"
import { checkAuth } from "../store/modules/user/user.slice"
import { IToken, token } from "../services"
import { getUserData, userCheckout } from "../store/modules/user/user.actions"
import jwt_decode from "jwt-decode"
import { useRouter } from "next/router"

function MyApp({ Component, pageProps }: AppProps) {
  const isBrowser = typeof window !== "undefined"
  const router = useRouter()
  const isAuth = useSelector(selectIsAuth)
  const dispatch = useDispatch()
  const userId = token ? (jwt_decode(token) as IToken).sub : null
  useEffect(() => {
    if (token) {
      //@ts-ignore
      dispatch(userCheckout())
      dispatch(checkAuth(!isAuth))
    }
  }, [])
  useEffect(() => {
    if (userId) {
      //@ts-ignore
      dispatch(getUserData(userId))
    }
  }, [router.pathname])
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
  }, [])
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{"MovieClub"}</title>
      </Head>
      {isBrowser && mounted && (
        <ThemeProvider>
          <NextNProgress />
          <Component {...pageProps} />
        </ThemeProvider>
      )}
    </>
  )
}

export default wrapper.withRedux(MyApp)
