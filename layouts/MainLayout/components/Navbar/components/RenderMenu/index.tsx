import React, { FC, memo } from "react"
import MenuItem from "@mui/material/MenuItem"
import Menu from "@mui/material/Menu"
import Link from "next/link"
import { IUser } from "../../../../../../store/modules/user/types/IUser"
import { useActions } from "../../../../../../hooks/useActions"

interface RenderMenuProps {
  menuId: string
  setAnchorEl: (event: null | HTMLElement) => void
  anchorEl: null | HTMLElement
  setMobileMoreAnchorEl: (value: null | HTMLElement) => void
  user: IUser
}

const RenderMenu: FC<RenderMenuProps> = ({
  anchorEl,
  setMobileMoreAnchorEl,
  menuId,
  setAnchorEl,
  user,
}) => {
  const { userExit } = useActions()
  const isMenuOpen = Boolean(anchorEl)

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null)
  }
  const handleMenuClose = () => {
    setAnchorEl(null)
    handleMobileMenuClose()
  }
  const handleExitUser = () => {
    userExit()
    setAnchorEl(null)
    handleMobileMenuClose()
  }
  return (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>
        <Link href={`/user/${user._id}`}>Мой профиль</Link>
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <Link href="/create-movie">Добавить кино</Link>
      </MenuItem>
      <MenuItem onClick={handleExitUser}>Выйти</MenuItem>
    </Menu>
  )
}

export default memo(RenderMenu)
