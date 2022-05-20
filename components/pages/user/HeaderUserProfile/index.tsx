import { AccountCircle } from "@mui/icons-material"
import Avatar from "@mui/material/Avatar"
import React from "react"
import styles from "./HeaderUserProfile.module.scss"

const HeaderUserProfile = () => {
  const coverPerson = true
  const parameteres = [
    { count: "15.9 K", title: "Просмотрено" },
    { count: "11 K", title: "Лайков" },
    { count: "831", title: " Комментариев" },
  ]
  return (
    <div className={styles.wrapper}>
      <div className={styles.left}>
        {coverPerson ? (
          <Avatar
            alt="Remy Sharp"
            src="http://static.hdrezka.sx/i/2022/1/24/nca51a7b11885om13v13x.jpeg"
            sx={{ width: 152, height: 152 }}
          />
        ) : (
          <AccountCircle sx={{ width: 152, height: 152 }} />
        )}
      </div>
      <div className={styles.rigth}>
        <strong>Heodark</strong>
        <div className={styles.data}>
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

export default HeaderUserProfile
