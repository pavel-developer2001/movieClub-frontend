import Image from "next/image"
import React from "react"
import styles from "./AnotherMovieCard.module.scss"
import StarRateIcon from "@mui/icons-material/StarRate"
import FavoriteIcon from "@mui/icons-material/Favorite"
import VisibilityIcon from "@mui/icons-material/Visibility"
import Link from "next/link"

const AnotherMovieCard = () => {
  const parameters = [
    { icon: <StarRateIcon />, count: "9.4" },
    { icon: <FavoriteIcon />, count: "5.7 k" },
    { icon: <VisibilityIcon />, count: "19.1 k" },
  ]
  return (
    <Link href="/movie/1">
      <div className={styles.wrapper}>
        <Image
          src={"http://static.hdrezka.sx/i/2022/5/6/u9e379969c5e9fx31q87y.jpg"}
          width={120}
          height={180}
        />
        <div className={styles.data}>
          <span className={styles.type}>Сериал</span>
          <strong>Лунный рыцарь</strong>
          <div className={styles.parameters}>
            {parameters.map((item, index) => (
              <div key={index}>
                {item.icon} {item.count}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Link>
  )
}

export default AnotherMovieCard
