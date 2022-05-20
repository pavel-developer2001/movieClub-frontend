import React from "react"
import styles from "./MovieInfo.module.scss"
import FavoriteIcon from "@mui/icons-material/Favorite"
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye"
import BookmarksIcon from "@mui/icons-material/Bookmarks"
import RatingChangeBtn from "../RatingChangeBtn"
import AccessTimeIcon from "@mui/icons-material/AccessTime"

const MovieInfo = () => {
  const infoArrays = [
    { icon: null, data: "16+" },
    { icon: <AccessTimeIcon />, data: "45 мин." },
    { icon: <FavoriteIcon />, data: "70k" },
    { icon: <RemoveRedEyeIcon />, data: "398.9 K" },
    { icon: <BookmarksIcon />, data: "25.1 K" },
    { icon: null, data: "Сериал" },
    { icon: null, data: "США" },
    { icon: null, data: "2022" },
  ]
  return (
    <div className={styles.wrapper}>
      <span>Moon Knight</span>
      <h2>
        Лунный рыцарь <span>[Продолжается]</span>
      </h2>
      <div className={styles.parameters}>
        <RatingChangeBtn />
        {infoArrays.map((info, index) => (
          <div className={styles.parameters} key={index}>
            {info.icon} <span>{info.data}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MovieInfo
