import React from "react"
import styles from "./TeamBody.module.scss"
import Tabs from "@mui/material/Tabs"
import Tab from "@mui/material/Tab"
import Box from "@mui/material/Box"
import TeamContact from "../TeamContact"
import LineUpTeam from "../LineUpTeam"
import AnotherMovieCard from "../../../UI/AnotherMovieCard"
import { TabPanel } from "../../../UI/TabPanel"
import { a11yProps } from "../../../UI/TabPanel"

const TeamBody = () => {
  const [value, setValue] = React.useState(0)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Профиль" {...a11yProps(0)} />
          {/* <Tab label="Тайтлы" {...a11yProps(1)} /> */}
          <Tab label="Лента" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <TeamContact />
        <LineUpTeam />
      </TabPanel>
      {/* <TabPanel value={value} index={1}>
        <div className={styles.list}>
          {new Array(10).fill("").map((_, index) => (
            <AnotherMovieCard key={index} />
          ))}
        </div>
      </TabPanel> */}
      <TabPanel value={value} index={1}>
        Лента
      </TabPanel>
    </Box>
  )
}

export default TeamBody
