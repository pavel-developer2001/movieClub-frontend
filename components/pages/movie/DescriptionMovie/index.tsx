import { Chip, CircularProgress } from "@mui/material"
import dynamic from "next/dynamic"
import React, { FC } from "react"
import { IGenre } from "../../../../store/modules/movie/types/IGenre"
import styles from "./DescriptionMovie.module.scss"

const DynamicPersonData = dynamic(() => import("../PersonData"), {
  loading: () => <CircularProgress />,
})

interface DescriptionMovieProps {
  description: string
  genres: IGenre[]
}

const DescriptionMovie: FC<DescriptionMovieProps> = ({
  description,
  genres,
}) => {
  return (
    <div className={styles.wrapper}>
      <span>{description}</span>
      <div className={styles.categories}>
        {genres.map((genre) => (
          <Chip key={genre._id} label={genre.name} className={styles.tag} />
        ))}
      </div>
      <div className={styles.person}>
        <strong>Режисёр</strong>
        <div className={styles.list}>
          {new Array(2).fill("").map((_, index) => (
            <DynamicPersonData key={index} />
          ))}
        </div>
      </div>
      <div className={styles.person}>
        <strong>Актёры</strong>
        <div className={styles.personList}>
          {new Array(8).fill("").map((_, index) => (
            <DynamicPersonData key={index} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default DescriptionMovie
