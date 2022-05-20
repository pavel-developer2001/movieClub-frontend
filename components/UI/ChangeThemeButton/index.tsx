import React from "react"
import Brightness2Icon from "@mui/icons-material/Brightness2"
import BrightnessMediumIcon from "@mui/icons-material/BrightnessMedium"
import IconButton from "@mui/material/IconButton"
import { useTheme } from "../../../hooks/useTheme"
import { Theme } from "../../../context/ThemeContext"

const ChangeThemeButton = () => {
  const theme = useTheme()
  function changeTheme() {
    theme.changeTheme(theme.theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT)
  }
  return theme.theme == "light" ? (
    <IconButton onClick={changeTheme} size="large" color="inherit">
      <Brightness2Icon />
    </IconButton>
  ) : (
    <IconButton onClick={changeTheme} size="large" color="inherit">
      <BrightnessMediumIcon />
    </IconButton>
  )
}

export default ChangeThemeButton
