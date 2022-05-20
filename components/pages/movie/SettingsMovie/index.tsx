import Image from "next/image"
import React, { useState } from "react"
import Box from "@mui/material/Box"
import InputLabel from "@mui/material/InputLabel"
import MenuItem from "@mui/material/MenuItem"
import FormControl from "@mui/material/FormControl"
import Select, { SelectChangeEvent } from "@mui/material/Select"
import styles from "./SettingsMovie.module.scss"
import { Button } from "@mui/material"
import ReportIcon from "@mui/icons-material/Report"
import Link from "next/link"

const SettingsMovie = () => {
  const [bookmark, setBookmark] = useState("")
  console.log(bookmark)
  const bookmarksArray = [
    {
      title: "Смотрю",
    },
    {
      title: "Буду смотреть",
    },
    {
      title: "Посмотрел",
    },
    {
      title: "Отложено",
    },
    {
      title: "Брошено",
    },
    {
      title: "Не интересно",
    },
    {
      title: "Удалить из закладок",
    },
  ]

  const handleChange = (event: SelectChangeEvent) => {
    setBookmark(event.target.value as string)
  }
  return (
    <div className={styles.wrapper}>
      <Image
        className={styles.image}
        src={"http://static.hdrezka.sx/i/2022/5/6/g9f8b8405c7e8fz35h22c.png"}
        width={250}
        height={338}
      />
      <Button variant="outlined">
        <Link href={"/movie/1/upload/"}>
          <a>Добавить видео</a>
        </Link>
      </Button>
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">
            Добавить в закладки
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={bookmark}
            label="Age"
            onChange={handleChange}
          >
            {bookmarksArray.map((bookmark, index) => (
              <MenuItem key={index} value={bookmark.title}>
                {bookmark.title}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>

      <Button variant="text">
        <Link href="/movie/1/edit">Редактировать</Link>
      </Button>
      <Button variant="text" startIcon={<ReportIcon />}>
        Пожаловаться
      </Button>
    </div>
  )
}

export default SettingsMovie
