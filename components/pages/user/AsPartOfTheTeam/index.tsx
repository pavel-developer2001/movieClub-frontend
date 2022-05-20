import React from "react"
import styles from "./AsPartOfTheTeam.module.scss"
import Image from "next/image"
import Link from "next/link"

const AsPartOfTheTeam = () => {
  return (
    <div className={styles.wrapper}>
      <strong>В составе</strong>
      <div className={styles.data}>
        {new Array(20).fill("").map((_, index) => (
          <TeamList key={index} />
        ))}
      </div>
    </div>
  )
}
const TeamList = () => {
  return (
    <Link href="/team/1">
      <div className={styles.userData}>
        <Image
          src={
            "https://api.remanga.org//media/publishers/assault_team/high_cover.jpg"
          }
          width={66}
          height={66}
        />
        <strong className={styles.title}>HD Rezka</strong>
      </div>
    </Link>
  )
}

export default AsPartOfTheTeam
