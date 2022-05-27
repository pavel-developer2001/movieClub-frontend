import Image from "next/image"
import Link from "next/link"
import React, { FC, memo } from "react"
import { IEpisode } from "../../../store/modules/episode/types/IEpisode"
import { ILastEpisode } from "../../../store/modules/episode/types/ILastEpisode"
import styles from "./LastMovieEpisode.module.scss"

interface LastMovieEpisodeProps {
  episode: ILastEpisode
}

const LastMovieEpisode: FC<LastMovieEpisodeProps> = ({ episode }) => {
  return (
    <div className={styles.episodeBlock}>
      <Link href={`/movie/${episode.movie._id}`}>
        <a className={styles.linkBlock}>
          <Image
            className={styles.image}
            src={
              episode.movie.cover
                ? episode.movie.cover
                : "http://static.hdrezka.sx/i/2022/5/6/u9e379969c5e9fx31q87y.jpg"
            }
            width={70}
            height={103}
          />
          <div className={styles.infoBlock}>
            <strong className={styles.title}>{episode.movie.title}</strong>
            <strong className={styles.episode}>
              {episode.season !== "undefined" && episode.episode !== "undefined"
                ? `${episode.season} сезон ${episode.episode} серия `
                : "Добавлен фильм"}
            </strong>
            <span className={styles.time}>{episode.createdAt} назад</span>
          </div>
        </a>
      </Link>
    </div>
  )
}

export default memo(LastMovieEpisode)
