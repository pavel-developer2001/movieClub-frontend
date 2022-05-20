import dynamic from "next/dynamic"
import Head from "next/head"
import React, { FC, ReactNode } from "react"
import Navbar from "./components/Navbar"
import styles from "./MainLayout.module.scss"

interface MainLayoutProps {
  children: ReactNode
}

const DynamicFooter = dynamic(() => import("./components/Footer"), {
  loading: () => <div>loading...</div>,
})

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <Head>
        <title>MovieClub</title>
        <meta
          name="description"
          content={
            "Смотри популярные сериалы, фильмы, аниме и обсуждай их с друзьями."
          }
        />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content={"Кино,сериал, аниме, дорама, звёзды, друзья, знакомства"}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar />
      <div className={styles.container}>
        <div className="main-container">{children}</div>
      </div>
      <DynamicFooter />
    </div>
  )
}

export default MainLayout
