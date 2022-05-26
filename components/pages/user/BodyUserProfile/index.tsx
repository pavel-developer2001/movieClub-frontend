import { FC, memo, useEffect, useState } from "react"
import styles from "./BodyUserProfile.module.scss"
import Tabs from "@mui/material/Tabs"
import Tab from "@mui/material/Tab"
import Box from "@mui/material/Box"
import { TabPanel } from "../../../UI/TabPanel"
import { a11yProps } from "../../../UI/TabPanel"
import { useSelector } from "react-redux"
import { useActions } from "../../../../hooks/useActions"
import {
  selectBookMarkLoading,
  selectBookMarksData,
} from "../../../../store/modules/bookmark/bookmark.selector"
import { selectIsAuth } from "../../../../store/modules/user/user.selector"
import dynamic from "next/dynamic"
import { CircularProgress } from "@mui/material"

const DynamicMovieCard = dynamic(() => import("../../../UI/MovieCard"), {
  loading: () => <CircularProgress />,
  ssr: false,
})
const DynamicAsPartOfTheTeam = dynamic(() => import("../AsPartOfTheTeam"), {
  loading: () => <CircularProgress />,
  ssr: false,
})
const DynamicCreateTeam = dynamic(() => import("../CreateTeam"), {
  loading: () => <CircularProgress />,
  ssr: false,
})
const DynamicTeamInvitation = dynamic(() => import("../TeamInvitation"), {
  loading: () => <CircularProgress />,
})
const DynamicListInvitations = dynamic(() => import("../ListInvitations"), {
  loading: () => <CircularProgress />,
})

interface BodyUserProfileProps {
  user: any
}

const BodyUserProfile: FC<BodyUserProfileProps> = ({ user }) => {
  const { getBookmarks } = useActions()
  const isAuth = useSelector(selectIsAuth)
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
            <CircularProgress />
          ) : bookmarks.length > 0 ? (
            bookmarks.map((mark) => (
              <DynamicMovieCard
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
        <DynamicAsPartOfTheTeam />
        {isAuth && (
          <>
            <DynamicCreateTeam />
            <DynamicTeamInvitation />
            <DynamicListInvitations />
          </>
        )}
      </TabPanel>
    </Box>
  )
}

export default memo(BodyUserProfile)
