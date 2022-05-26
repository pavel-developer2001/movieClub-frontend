import { GetStaticProps, NextPage } from "next"
import React from "react"
import MovieCard from "../../components/UI/MovieCard"
import MainLayout from "../../layouts/MainLayout"
import { getMovies } from "../../store/modules/movie/movie.actions"
import { useSelector } from "react-redux"
import { wrapper } from "../../store"
import {
  selectMovieLoading,
  selectMovies,
} from "../../store/modules/movie/movie.selector"
import { CircularProgress } from "@mui/material"

const MovieCatalogPage: NextPage = () => {
  const movies = useSelector(selectMovies)
  const isLoading = useSelector(selectMovieLoading)
  return (
    <MainLayout>
      {isLoading ? (
        <CircularProgress />
      ) : (
        movies.map((movie: any) => (
          <MovieCard
            key={movie._id}
            movie={movie}
            widthCover={173}
            heightCover={260}
            width="173"
            height="338"
          />
        ))
      )}
    </MainLayout>
  )
}
export const getStaticProps: GetStaticProps = wrapper.getStaticProps(
  (store) => async (ctx) => {
    try {
      //@ts-ignore
      await store.dispatch(getMovies())
      return {
        props: {},
      }
    } catch (error) {
      console.log("ERROR!")
      return {
        props: {},
      }
    }
  }
)

export default MovieCatalogPage
