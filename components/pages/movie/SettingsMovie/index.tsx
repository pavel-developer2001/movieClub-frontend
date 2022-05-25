import Image from "next/image"
import React, { FC, useEffect, useState } from "react"
import Box from "@mui/material/Box"
import InputLabel from "@mui/material/InputLabel"
import MenuItem from "@mui/material/MenuItem"
import FormControl from "@mui/material/FormControl"
import Select, { SelectChangeEvent } from "@mui/material/Select"
import styles from "./SettingsMovie.module.scss"
import { Button } from "@mui/material"
import ReportIcon from "@mui/icons-material/Report"
import Link from "next/link"
import { useRouter } from "next/router"
import { useActions } from "../../../../hooks/useActions"
import {
  selectBookMarkItemData,
  selectBookMarkLoading,
} from "../../../../store/modules/bookmark/bookmark.selector"
import { useSelector } from "react-redux"
import { selectIsAuth } from "../../../../store/modules/user/user.selector"

interface SettingsMovieProps {
  id: number
  cover: null | string
}

const SettingsMovie: FC<SettingsMovieProps> = ({ id, cover }) => {
  const router = useRouter()
  const isAuth = useSelector(selectIsAuth)
  const { addBookmark, updateBookmark, getBookmarkToMovie } = useActions()
  const bookmarkData = useSelector(selectBookMarkItemData)
  const [bookmark, setBookmark] = useState()
  const loading = useSelector(selectBookMarkLoading)
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
  const dataMovie: { movieId: string | string[] | undefined } = {
    movieId: router.query.id,
  }
  useEffect(() => {
    if (isAuth) getBookmarkToMovie(dataMovie)
  }, [router, loading])
  useEffect(() => {
    if (isAuth) setBookmark(bookmarkData?.category)
  }, [bookmarkData])

  const handleChange = async (event: SelectChangeEvent) => {
    const payload = { category: event.target.value, movieId: router.query.id }
    if (bookmark === undefined) {
      //@ts-ignore
      addBookmark(payload)
      console.log("Кино добавлено в закладки")
    }
    if (bookmark !== undefined && payload.category != "Удалить из закладок") {
      //@ts-ignore
      updateBookmark(payload)
      console.log("кино добавлено в другие закладки")
    }
    if (payload.category == "Удалить из закладок") {
      //@ts-ignore
      addBookmark(payload)
      console.log("кино удалено из закладок")
    }
  }
  return (
    <div className={styles.wrapper}>
      <Image
        className={styles.image}
        src={
          cover
            ? cover
            : "http://static.hdrezka.sx/i/2022/5/6/g9f8b8405c7e8fz35h22c.png"
        }
        width={250}
        height={338}
      />
      {isAuth && (
        <>
          <Button variant="outlined">
            <Link href={`/movie/${id}/upload/`}>
              <a>Добавить видео</a>
            </Link>
          </Button>
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">
                {bookmarkData ? bookmarkData.category : "Добавить в закладки"}
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
            <Link href={`/movie/${id}/edit`}>Редактировать</Link>
          </Button>
          <Button variant="text" startIcon={<ReportIcon />}>
            Пожаловаться
          </Button>
        </>
      )}
    </div>
  )
}

export default SettingsMovie
