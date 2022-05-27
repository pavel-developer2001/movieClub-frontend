import type { GetStaticProps, NextPage } from "next"
import MovieCard from "../components/UI/MovieCard"
import MainLayout from "../layouts/MainLayout"
import Slider from "react-slick"
import { wrapper } from "../store"
import { getMovies } from "../store/modules/movie/movie.actions"
import { useSelector } from "react-redux"
import {
  selectMovieLoading,
  selectMovies,
} from "../store/modules/movie/movie.selector"
import {
  selectEpisodeLoading,
  selectEpisodes,
} from "../store/modules/episode/episode.selector"
import { useEffect } from "react"
import { useActions } from "../hooks/useActions"
import { CircularProgress } from "@mui/material"
import dynamic from "next/dynamic"

const DynamicLastMovieEpisode = dynamic(
  () => import("../components/UI/LastMovieEpisode"),
  { loading: () => <CircularProgress /> }
)

const Home: NextPage = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 10,
    autoplay: true,
    touchMove: false,
    //centerMode: true,
    arrows: false,
    focusOnSelect: true,
    slidesToScroll: 1,
  }
  const movies = useSelector(selectMovies)
  const isLoading = useSelector(selectMovieLoading)
  const episodes = useSelector(selectEpisodes)
  const episodeIsLoading = useSelector(selectEpisodeLoading)
  const { getEpisodes } = useActions()
  useEffect(() => {
    getEpisodes()
  }, [])

  return (
    <MainLayout>
      {isLoading ? (
        <CircularProgress />
      ) : movies.length > 10 ? (
        <div>
          <Slider {...settings}>
            {movies.map((movie) => (
              <MovieCard key={movie._id} movie={movie} />
            ))}
          </Slider>
        </div>
      ) : (
        <div style={{ display: "flex" }}>
          {movies.map((movie) => (
            <MovieCard key={movie._id} movie={movie} />
          ))}
        </div>
      )}
      <div>
        {episodeIsLoading ? (
          <CircularProgress />
        ) : episodes.length > 0 ? (
          episodes.map((episode) => (
            <DynamicLastMovieEpisode episode={episode} key={episode._id} />
          ))
        ) : (
          <p>Нет добавлений</p>
        )}
      </div>
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

export default Home
