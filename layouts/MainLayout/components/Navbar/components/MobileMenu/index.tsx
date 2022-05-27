import Drawer from "@mui/material/Drawer"
import List from "@mui/material/List"
import Divider from "@mui/material/Divider"
import ListItem from "@mui/material/ListItem"
import ListItemIcon from "@mui/material/ListItemIcon"
import MenuIcon from "@mui/icons-material/Menu"
import React, { FC } from "react"
import Box from "@mui/material/Box"
import IconButton from "@mui/material/IconButton"
import Link from "next/link"
import { useActions } from "../../../../../../hooks/useActions"
import { selectIsAuth } from "../../../../../../store/modules/user/user.selector"
import { useSelector } from "react-redux"
import ChangeThemeButton from "../../../../../../components/UI/ChangeThemeButton"
import dynamic from "next/dynamic"
import { CircularProgress } from "@mui/material"
import { IUser } from "../../../../../../store/modules/user/types/IUser"
type Anchor = "right"

const DynamicAuth = dynamic(() => import("../Auth"), {
  loading: () => <CircularProgress />,
})

const MobileMenu: FC<{ user: IUser }> = ({ user }) => {
  const { userExit } = useActions()
  const isAuth = useSelector(selectIsAuth)
  const [state, setState] = React.useState({
    right: false,
  })
  const handleExitUser = () => {
    userExit()
  }
  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return
      }

      setState({ ...state, [anchor]: open })
    }

  const list = (anchor: Anchor) => (
    <Box
      role="presentation"
      onClick={toggleDrawer(anchor, true)}
      onKeyDown={toggleDrawer(anchor, true)}
    >
      {!isAuth && <DynamicAuth />}

      <List>
        <ListItem button>
          <Link href={`/movie`}>Каталог</Link>
        </ListItem>
        <ListItem button>
          <ChangeThemeButton />
        </ListItem>
        {isAuth && (
          <>
            <ListItem button>
              <Link href={`/user/${user?._id}`}>Мой профиль</Link>
            </ListItem>
            <ListItem button>
              <Link href="/create-movie">Добавить кино</Link>
            </ListItem>
            <ListItem button onClick={handleExitUser}>
              Выйти
            </ListItem>
          </>
        )}
      </List>
      <Divider />
    </Box>
  )

  return (
    <div>
      <IconButton color="inherit" onClick={toggleDrawer("right", true)}>
        <MenuIcon />
      </IconButton>
      <Drawer
        anchor={"right"}
        open={state["right"]}
        onClose={toggleDrawer("right", false)}
      >
        {list("right")}
      </Drawer>
    </div>
  )
}

export default MobileMenu
