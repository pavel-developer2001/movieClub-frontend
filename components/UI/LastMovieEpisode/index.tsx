import Image from "next/image"
import Link from "next/link"
import React from "react"
import styles from "./LastMovieEpisode.module.scss"

const LastMovieEpisode = () => {
  return (
    <div className={styles.episodeBlock}>
      <Link href="/movie/1">
        <a className={styles.linkBlock}>
          <Image
            className={styles.image}
            src={
              "http://static.hdrezka.sx/i/2022/5/6/u9e379969c5e9fx31q87y.jpg"
            }
            width={70}
            height={103}
          />
          <div className={styles.infoBlock}>
            <strong className={styles.title}>Лунный рыцарь</strong>
            <strong className={styles.episode}>
              1 сезон 6 серия : Добавлен фильм
            </strong>
            <span className={styles.time}>4 минуты назад</span>
          </div>
        </a>
      </Link>
    </div>
  )
}

export default LastMovieEpisode
