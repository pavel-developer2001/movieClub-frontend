import React, { FC, useState } from "react"
import styles from "./MovieContent.module.scss"
import Tabs from "@mui/material/Tabs"
import Tab from "@mui/material/Tab"
import Box from "@mui/material/Box"
import VideoPlayer from "../../../UI/VideoPlayer"
import DescriptionMovie from "../DescriptionMovie"
import CommentsBlock from "../CommentsBlock"
import { TabPanel } from "../../../UI/TabPanel"
import { a11yProps } from "../../../UI/TabPanel"

interface MovieContentProps {
  movie: any
}

const MovieContent: FC<MovieContentProps> = ({ movie }) => {
  const [value, setValue] = useState(0)

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
    { component: <VideoPlayer />, index: 1 },
    { component: <CommentsBlock />, index: 2 },
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
