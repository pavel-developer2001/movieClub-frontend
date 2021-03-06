import React, { FC, useEffect, useState } from "react"
import styles from "./MovieContent.module.scss"
import Tabs from "@mui/material/Tabs"
import Tab from "@mui/material/Tab"
import Box from "@mui/material/Box"
import DescriptionMovie from "../DescriptionMovie"
import { TabPanel } from "../../../UI/TabPanel"
import { a11yProps } from "../../../UI/TabPanel"
import { useSelector } from "react-redux"
import {
  selectEpisodeData,
  selectEpisodeLoading,
} from "../../../../store/modules/episode/episode.selector"
import { useRouter } from "next/router"
import { useActions } from "../../../../hooks/useActions"
import { CircularProgress } from "@mui/material"
import dynamic from "next/dynamic"
import { IMovie } from "../../../../store/modules/movie/types/IMovie"

const DynamicCommentsBlock = dynamic(() => import("../CommentsBlock"), {
  loading: () => <CircularProgress />,
})
const DynamicVideoPlayer = dynamic(() => import("../../../UI/VideoPlayer"), {
  loading: () => <CircularProgress />,
})

interface MovieContentProps {
  movie: IMovie
}

const MovieContent: FC<MovieContentProps> = ({ movie }) => {
  const [value, setValue] = useState(0)
  const router = useRouter()
  const { getEpisodesForMovie } = useActions()
  const episodes = useSelector(selectEpisodeData)
  const isLoading = useSelector(selectEpisodeLoading)
  useEffect(() => {
    //@ts-ignore
    getEpisodesForMovie(router?.query?.id)
  }, [router, isLoading])

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }
  const tabsArray = [
    {
      component: (
        <DescriptionMovie
          description={movie.description}
          genres={movie.genres}
        />
      ),
      index: 0,
    },
    {
      component: isLoading ? (
        <CircularProgress />
      ) : episodes.length > 0 ? (
        episodes.map((episode) => (
          <DynamicVideoPlayer key={episode._id} value={episode.url} />
        ))
      ) : (
        "Нет видео"
      ),
      index: 1,
    },
    { component: <DynamicCommentsBlock />, index: 2 },
  ]
  return (
    <div className={styles.wrapper}>
      <Box className={styles.box}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Описание" {...a11yProps(0)} />
            <Tab label="Плеер" {...a11yProps(1)} />
            <Tab label="Комментарии" {...a11yProps(2)} />
          </Tabs>
        </Box>
        {tabsArray.map((item, index) => (
          <TabPanel key={index} value={value} index={item.index}>
            <div className={styles.content}>{item.component}</div>
          </TabPanel>
        ))}
      </Box>
    </div>
  )
}

export default MovieContent
