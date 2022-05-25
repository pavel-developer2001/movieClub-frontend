import React from "react"
import styles from "./TeamContact.module.scss"
import IconButton from "@mui/material/IconButton"
import Link from "next/link"
import TwitterIcon from "@mui/icons-material/Twitter"
import FacebookIcon from "@mui/icons-material/Facebook"
import InstagramIcon from "@mui/icons-material/Instagram"

const TeamContact = () => {
  const social = [
    {
      icon: <TwitterIcon fontSize="inherit" />,
      link: "https://twitter.com/home",
    },
    {
      icon: <FacebookIcon fontSize="inherit" />,
      link: "https://www.facebook.com",
    },
    {
      icon: <InstagramIcon fontSize="inherit" />,
      link: "https://www.instagram.com",
    },
  ]
  return (
    <div className={styles.contact}>
      <strong>Контакты</strong>
      <div className={styles.social}>
        {social.map((item, index) => (
          <IconButton size="large" key={index}>
            <Link href={item.link}>
              <div className={styles.icon}>{item.icon}</div>
            </Link>{" "}
          </IconButton>
        ))}
      </div>
    </div>
  )
}

export default TeamContact
