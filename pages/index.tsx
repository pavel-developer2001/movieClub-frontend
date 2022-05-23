import type { GetStaticProps, NextPage } from "next"
import LastMovieEpisode from "../components/UI/LastMovieEpisode"
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
  return (
    <MainLayout>
      {isLoading ? (
        <p>loading...</p>
      ) : (
        <div>
          <Slider {...settings}>
            {movies.map((movie: any) => (
              <MovieCard key={movie._id} movie={movie} />
            ))}
          </Slider>
        </div>
      )}
      <div>
        {new Array(20).fill("").map((_, index) => (
          <LastMovieEpisode key={index} />
        ))}
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
