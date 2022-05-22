import * as React from "react"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import IconButton from "@mui/material/IconButton"
import Typography from "@mui/material/Typography"
import Badge from "@mui/material/Badge"
import NotificationsIcon from "@mui/icons-material/Notifications"
import styles from "./Navbar.module.scss"
import Auth from "./components/Auth"
import Link from "next/link"
import dynamic from "next/dynamic"
import { Button } from "@mui/material"
import ProfileMenu from "./components/ProfileMenu"
import RenderMenu from "./components/RenderMenu"
import {
  selectIsAuth,
  selectUserData,
  selectUserLoading,
} from "../../../../store/modules/user/user.selector"
import { useSelector } from "react-redux"

const DynamicMobileMenu = dynamic(() => import("./components/MobileMenu"), {
  loading: () => <div>loading...</div>,
})

const DynamicChangeThemeButton = dynamic(
  () => import("../../../../components/UI/ChangeThemeButton"),
  {
    loading: () => <div>loading...</div>,
  }
)
const Navbar = () => {
  const isAuth = useSelector(selectIsAuth)

  const user = useSelector(selectUserData)
  const isLoading = useSelector(selectUserLoading)

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    React.useState<null | HTMLElement>(null)

  const isMenuOpen = Boolean(anchorEl)
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl)

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget)
  }

  const menuId = "primary-search-account-menu"

  const mobileMenuId = "primary-search-account-menu-mobile"

  return (
    <div className={styles.main}>
      <AppBar>
        <Toolbar>
          <Link href="/">
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ display: { xs: "flex", sm: "block" }, cursor: "pointer" }}
            >
              MovieClub
            </Typography>
          </Link>
          <Box
            sx={{
              display: { xs: "flex", md: "flex" },
              alignItems: "center",
              ml: 5,
            }}
          >
            <Typography
              noWrap
              sx={{
                display: { xs: "flex", sm: "flex" },
                cursor: "pointer",
              }}
              component="div"
            >
              <Link href="/movie">
                <a>Каталог</a>
              </Link>
            </Typography>
            <Button aria-label="show 17 new notifications" color="inherit">
              search
            </Button>
          </Box>
          <Box sx={{ flexGrow: 1 }} />

          <Box
            sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}
          >
            <DynamicChangeThemeButton />
            {isAuth ? (
              <>
                <IconButton
                  size="large"
                  aria-label="show 17 new notifications"
                  color="inherit"
                >
                  <Badge badgeContent={17} color="error">
                    <NotificationsIcon />
                  </Badge>
                </IconButton>
                {isLoading ? (
                  <p>load</p>
                ) : (
                  <ProfileMenu
                    user={user}
                    menuId={menuId}
                    setAnchorEl={setAnchorEl}
                  />
                )}
              </>
            ) : (
              <Auth />
            )}
          </Box>

          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <DynamicMobileMenu />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {isLoading ? (
        <p>load</p>
      ) : (
        <RenderMenu
          user={user}
          anchorEl={anchorEl}
          menuId={menuId}
          setAnchorEl={setAnchorEl}
          setMobileMoreAnchorEl={setMobileMoreAnchorEl}
        />
      )}
    </div>
  )
}
export default Navbar
