import { NextPage } from "next"
import React from "react"
import MovieContent from "../../../components/pages/movie/MovieContent"
import MovieInfo from "../../../components/pages/movie/MovieInfo"
import SettingsMovie from "../../../components/pages/movie/SettingsMovie"
import TeamList from "../../../components/pages/movie/TeamList"
import MainLayout from "../../../layouts/MainLayout"
import styles from "../../../styles/pages/MoviePage.module.scss"

const MoviePage: NextPage = () => {
  return (
    <MainLayout>
      <div className={styles.wrapper}>
        <SettingsMovie />
        <div>
          <MovieInfo />
          <div className={styles.body}>
            <MovieContent />
            <TeamList />
          </div>
        </div>
      </div>
    </MainLayout>
  )
}

export default MoviePage
