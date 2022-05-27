import Image from "next/image"
import React, { FC, memo } from "react"
import FavoriteIcon from "@mui/icons-material/Favorite"
import Link from "next/link"
import styles from "./MovieCard.module.scss"
import { IMovie } from "../../../store/modules/movie/types/IMovie"

interface MovieCardProps {
  width?: string
  height?: string
  widthCover?: number
  heightCover?: number
  movie: IMovie
}

const MovieCard: FC<MovieCardProps> = ({
  width = "160",
  height = "330",
  widthCover = 148,
  heightCover = 222,
  movie,
}) => {
  return (
    <div
      className={styles.main}
      style={{ maxWidth: width + "px", maxHeight: height + "px" }}
    >
      <Link href={`/movie/${movie._id}`}>
        <div>
          <Image
            src={
              movie.cover
                ? movie.cover
                : "http://static.hdrezka.sx/i/2022/3/11/la1c4f936b11ctn49p58t.jpg"
            }
            height={heightCover}
            className={styles.cover}
            width={widthCover}
          />
          <div className={styles.likesBlock}>
            <FavoriteIcon />
            <span>100.0k</span>
          </div>
          <div className={styles.namesBlock}>
            <strong>{movie.title}</strong>
            <span>{movie.type}</span>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default memo(MovieCard)
