import React from "react"
import styles from "./BodyUserProfile.module.scss"
import Tabs from "@mui/material/Tabs"
import Tab from "@mui/material/Tab"
import Box from "@mui/material/Box"
import { TabPanel } from "../../../UI/TabPanel"
import { a11yProps } from "../../../UI/TabPanel"
import AsPartOfTheTeam from "../AsPartOfTheTeam"
import CreateTeam from "../CreateTeam"
import TeamInvitation from "../TeamInvitation"

const BodyUserProfile = () => {
  const [value, setValue] = React.useState(0)

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
        id: 2123
      </TabPanel>
      <TabPanel value={value} index={1}>
        Закладки
      </TabPanel>
      <TabPanel value={value} index={2}>
        <AsPartOfTheTeam />
        <CreateTeam />
        <TeamInvitation />
      </TabPanel>
    </Box>
  )
}

export default BodyUserProfile
