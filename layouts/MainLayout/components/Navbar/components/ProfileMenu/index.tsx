import React, { FC } from "react"
import AccountCircle from "@mui/icons-material/AccountCircle"
import IconButton from "@mui/material/IconButton"
import Avatar from "@mui/material/Avatar"

interface ProfileMenuProps {
  menuId: string
  setAnchorEl: (event: null | HTMLElement) => void
}

const ProfileMenu: FC<ProfileMenuProps> = ({ menuId, setAnchorEl }) => {
    
  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const coverPerson = true
  return (
    <IconButton
      size="large"
      edge="end"
      aria-label="account of current user"
      aria-controls={menuId}
      aria-haspopup="true"
      onClick={handleProfileMenuOpen}
      color="inherit"
    >
      {coverPerson ? (
        <Avatar
          alt="Remy Sharp"
          src="http://static.hdrezka.sx/i/2022/1/24/nca51a7b11885om13v13x.jpeg"
        />
      ) : (
        <AccountCircle />
      )}
    </IconButton>
  )
}

export default ProfileMenu
