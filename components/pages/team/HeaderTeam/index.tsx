import React from "react"
import styles from "./HeaderTeam.module.scss"
import Image from "next/image"

const HeaderTeam = () => {
  const parameteres = [
    { count: "100", title: "тайтлы" },
    { count: "11 M", title: "лайков" },
    { count: "40", title: "загрузок/месяц" },
  ]
  return (
    <div className={styles.wrapper}>
      <div className={styles.avatar}>
        <Image
          src={
            "https://api.remanga.org//media/publishers/novate/high_cover.jpg"
          }
          width={150}
          height={150}
        />
        <span className={styles.rank}>Серебряный Переводчик</span>
      </div>

      <div className={styles.data}>
        <strong>HD Rezka</strong>
        <p>Самая лучшая озвучка!</p>
        <div className={styles.parameteres}>
          {parameteres.map((item, index) => (
            <div key={index}>
              <span>{item.count}</span> {item.title}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default HeaderTeam
