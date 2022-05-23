import { GetServerSideProps, NextPage } from "next"
import React from "react"
import { useSelector } from "react-redux"
import MovieContent from "../../../components/pages/movie/MovieContent"
import MovieInfo from "../../../components/pages/movie/MovieInfo"
import SettingsMovie from "../../../components/pages/movie/SettingsMovie"
import TeamList from "../../../components/pages/movie/TeamList"
import MainLayout from "../../../layouts/MainLayout"
import { wrapper } from "../../../store"
import { getMovie } from "../../../store/modules/movie/movie.actions"
import {
  selectMovieData,
  selectMovieLoading,
} from "../../../store/modules/movie/movie.selector"
import styles from "../../../styles/pages/MoviePage.module.scss"

const MoviePage: NextPage = () => {
  const movie = useSelector(selectMovieData) // Добавить в таблицу movie на беке колонку status
  const isLoading = useSelector(selectMovieLoading)
  return (
    <MainLayout>
      {isLoading ? (
        <p>loading...</p>
      ) : (
        <div className={styles.wrapper}>
          <SettingsMovie id={movie._id} cover={movie.cover} />
          <div>
            <MovieInfo
              type={movie.type}
              country={movie.country}
              age={movie.age}
              munites={movie.munites}
              year={movie.year}
              title={movie.title}
              englishTitle={movie.englishTitle}
            />
            <div className={styles.body}>
              <MovieContent movie={movie} />
              <TeamList />
            </div>
          </div>
        </div>
      )}
    </MainLayout>
  )
}

export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps((store) => async ({ params, res }) => {
    res.setHeader(
      "Cache-Control",
      "public, s-maxage=10, stale-while-revalidate=59"
    )
    try {
      //@ts-ignore
      await store.dispatch(getMovie(params.id))
      return {
        props: {},
      }
    } catch (error) {
      console.log("ERROR!", error)
      return {
        props: {},
      }
    }
  })

export default MoviePage
