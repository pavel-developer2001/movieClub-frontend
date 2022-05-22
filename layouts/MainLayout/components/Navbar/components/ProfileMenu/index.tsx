import React, { FC, memo } from "react"
import AccountCircle from "@mui/icons-material/AccountCircle"
import IconButton from "@mui/material/IconButton"
import Avatar from "@mui/material/Avatar"
import { IUser } from "../../../../../../store/modules/user/types/IUser"

interface ProfileMenuProps {
  menuId: string
  setAnchorEl: (event: null | HTMLElement) => void
  user: IUser
}

const ProfileMenu: FC<ProfileMenuProps> = ({ menuId, setAnchorEl, user }) => {
  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

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
      {user.avatar ? (
        <Avatar alt="Remy Sharp" src={user.avatar} />
      ) : (
        <AccountCircle />
      )}
    </IconButton>
  )
}

export default memo(ProfileMenu)
