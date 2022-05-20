import React from "react"
import styles from "./PersonData.module.scss"
import Image from "next/image"
import Link from "next/link"

const PersonData = () => {
  return (
    <Link href="/person/1">
      <div className={styles.wrapper}>
        <Image
          src={"http://static.hdrezka.sx/i/2016/3/10/q76371b66f6d0xv30h74x.jpg"}
          width={100}
          height={140}
        />
        <strong>Оскар Айзек</strong>
      </div>
    </Link>
  )
}

export default PersonData
