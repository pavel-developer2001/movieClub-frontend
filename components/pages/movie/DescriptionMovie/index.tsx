import { Chip } from "@mui/material"
import React, { FC } from "react"
import Slider from "react-slick"
import PersonData from "../PersonData"
import styles from "./DescriptionMovie.module.scss"

interface DescriptionMovieProps {
  description: string
  genres: any
}

const DescriptionMovie: FC<DescriptionMovieProps> = ({
  description,
  genres,
}) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    autoplay: true,
    touchMove: false,
    //centerMode: true,
    arrows: false,
    focusOnSelect: true,
    slidesToScroll: 1,
  }
  return (
    <div className={styles.wrapper}>
      <p>{description}</p>
      <div className={styles.categories}>
        {genres.map((genre: any) => (
          <Chip key={genre._id} label={genre.name} className={styles.tag} />
        ))}
      </div>
      <div className={styles.person}>
        <strong>Режисёр</strong>
        <div className={styles.list}>
          {new Array(2).fill("").map((_, index) => (
            <PersonData key={index} />
          ))}
        </div>
      </div>
      <div className={styles.person}>
        <strong>Актёры</strong>
        <div style={{ paddingTop: "15px" }}>
          <Slider {...settings}>
            {new Array(8).fill("").map((_, index) => (
              <PersonData key={index} />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  )
}

export default DescriptionMovie
