import { FC, memo, useEffect, useState } from "react"
import styles from "./BodyUserProfile.module.scss"
import Tabs from "@mui/material/Tabs"
import Tab from "@mui/material/Tab"
import Box from "@mui/material/Box"
import { TabPanel } from "../../../UI/TabPanel"
import { a11yProps } from "../../../UI/TabPanel"
import AsPartOfTheTeam from "../AsPartOfTheTeam"
import CreateTeam from "../CreateTeam"
import TeamInvitation from "../TeamInvitation"
import { useSelector } from "react-redux"
import { useActions } from "../../../../hooks/useActions"
import {
  selectBookMarkLoading,
  selectBookMarksData,
} from "../../../../store/modules/bookmark/bookmark.selector"
import MovieCard from "../../../UI/MovieCard"

interface BodyUserProfileProps {
  user: any
}

const BodyUserProfile: FC<BodyUserProfileProps> = ({ user }) => {
  const { getBookmarks } = useActions()
  const [value, setValue] = useState(0)
  const bookmarks = useSelector(selectBookMarksData)
  const isLoading = useSelector(selectBookMarkLoading)
  useEffect(() => {
    getBookmarks(user._id)
  }, [user])

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }
  return (
    <Box className={styles.wrapper}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Профиль" {...a11yProps(0)} />
          <Tab label="Закладки" {...a11yProps(1)} />
          <Tab label="Команды" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        id: {user?._id}
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div className={styles.bookmark}>
          {isLoading ? (
            <p>loading...</p>
          ) : bookmarks.length > 0 ? (
            bookmarks.map((mark) => (
              <MovieCard
                key={mark._id}
                //@ts-ignore
                movie={mark.movie}
              />
            ))
          ) : (
            <p>Пусто</p>
          )}
        </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <AsPartOfTheTeam />
        <CreateTeam />
        <TeamInvitation />
      </TabPanel>
    </Box>
  )
}

export default memo(BodyUserProfile)
