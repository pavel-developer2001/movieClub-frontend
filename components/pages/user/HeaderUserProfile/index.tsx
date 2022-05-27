import { AccountCircle } from "@mui/icons-material"
import Avatar from "@mui/material/Avatar"
import React, { FC, memo } from "react"
import { IUser } from "../../../../store/modules/user/types/IUser"
import styles from "./HeaderUserProfile.module.scss"

interface HeaderUserProfileProps {
  user: IUser
}

const HeaderUserProfile: FC<HeaderUserProfileProps> = ({ user }) => {
  const parameteres = [
    { count: "15.9 K", title: "Просмотрено" },
    { count: "11 K", title: "Лайков" },
    { count: "831", title: " Комментариев" },
  ]
  return (
    <div className={styles.wrapper}>
      <div className={styles.left}>
        {user?.avatar ? (
          <Avatar
            alt="Remy Sharp"
            src={user?.avatar}
            sx={{ width: 152, height: 152 }}
          />
        ) : (
          <AccountCircle sx={{ width: 152, height: 152 }} />
        )}
      </div>
      <div className={styles.rigth}>
        <strong>{user?.name}</strong>
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

export default memo(HeaderUserProfile)
