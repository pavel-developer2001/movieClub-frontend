import Image from "next/image"
import Link from "next/link"
import React from "react"
import styles from "./LineUpTeam.module.scss"

const LineUpTeam = () => {
  return (
    <div className={styles.wrapper}>
      <strong>Состав</strong>
      <div className={styles.data}>
        {new Array(20).fill("").map((_, index) => (
          <UserList key={index} />
        ))}
      </div>
    </div>
  )
}
const UserList = () => {
  return (
    <Link href="/user/1">
      <div className={styles.userData}>
        <Image
          src={
            "https://storage.yandexcloud.net/media.remanga.org/users/54560/avatar.jpg"
          }
          width={54}
          height={54}
        />
        <strong>Ilotus</strong>
        <span className={styles.rank}>Участник</span>
      </div>
    </Link>
  )
}
export default LineUpTeam
