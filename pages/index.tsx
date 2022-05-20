import type { NextPage } from "next"
import LastMovieEpisode from "../components/UI/LastMovieEpisode"
import MovieCard from "../components/UI/MovieCard"
import MainLayout from "../layouts/MainLayout"
import Slider from "react-slick"

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
  return (
    <MainLayout>
      <div>
        <Slider {...settings}>
          {new Array(20).fill("").map((_, index) => (
            <MovieCard key={index} />
          ))}
        </Slider>
      </div>
      <div>
        {new Array(20).fill("").map((_, index) => (
          <LastMovieEpisode key={index} />
        ))}
      </div>
    </MainLayout>
  )
}

export default Home
