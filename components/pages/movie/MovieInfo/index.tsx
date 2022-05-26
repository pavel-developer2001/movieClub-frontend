import React, { FC, memo } from "react"
import styles from "./MovieInfo.module.scss"
import FavoriteIcon from "@mui/icons-material/Favorite"
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye"
import BookmarksIcon from "@mui/icons-material/Bookmarks"
import RatingChangeBtn from "../RatingChangeBtn"
import AccessTimeIcon from "@mui/icons-material/AccessTime"

interface MovieInfoProps {
  type: string
  country: string
  age: string
  munites: number
  year: number
  englishTitle: string
  title: string
  status: string
}

const MovieInfo: FC<MovieInfoProps> = ({
  type,
  country,
  age,
  munites,
  year,
  title,
  englishTitle,
  status,
}) => {
  const infoArrays = [
    { icon: null, data: age },
    { icon: <AccessTimeIcon />, data: `${munites} мин.` },
    { icon: <FavoriteIcon />, data: "70k" },
    { icon: <RemoveRedEyeIcon />, data: "398.9 K" },
    { icon: <BookmarksIcon />, data: "25.1 K" },
    { icon: null, data: type },
    { icon: null, data: country },
    { icon: null, data: year },
  ]
  return (
    <div className={styles.wrapper}>
      <span>{englishTitle}</span>
      <h2>
        {title} <span>[{status}]</span>
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

export default memo(MovieInfo)
