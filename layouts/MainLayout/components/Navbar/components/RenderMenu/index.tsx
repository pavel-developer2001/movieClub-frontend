import React, { FC } from "react"
import MenuItem from "@mui/material/MenuItem"
import Menu from "@mui/material/Menu"
import Link from "next/link"

interface RenderMenuProps {
  menuId: string
  setAnchorEl: (event: null | HTMLElement) => void
  anchorEl: null | HTMLElement
  setMobileMoreAnchorEl: (value: null | HTMLElement) => void
}

const RenderMenu: FC<RenderMenuProps> = ({
  anchorEl,
  setMobileMoreAnchorEl,
  menuId,
  setAnchorEl,
}) => {
  const isMenuOpen = Boolean(anchorEl)
  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null)
  }
  const handleMenuClose = () => {
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
        <Link href="/user/1">Мой профиль</Link>
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <Link href="/create-movie">Добавить кино</Link>
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>Выйти</MenuItem>
    </Menu>
  )
}

export default RenderMenu
