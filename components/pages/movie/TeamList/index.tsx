import Image from "next/image"
import Link from "next/link"
import React from "react"
import styles from "./TeamList.module.scss"

const TeamList = () => {
  return (
    <div className={styles.wrapper}>
      <strong>Переводчики</strong>
      {new Array(5).fill("").map((_, index) => (
        <TeamListItem key={index} />
      ))}
      <TeamListItem />
    </div>
  )
}
const TeamListItem = () => {
  return (
    <Link href="/team/1">
      <div className={styles.teamInfo}>
        <Image
          className={styles.image}
          src={
            "https://api.remanga.org//media/publishers/novate/high_cover.jpg"
          }
          width={56}
          height={56}
        />
        <div className={styles.info}>
          <strong>HD REZKA</strong>
          <span>Лучшая озвучка!</span>
        </div>
      </div>
    </Link>
  )
}

export default TeamList
