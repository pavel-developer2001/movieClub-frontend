import * as React from "react"
import Button from "@mui/material/Button"
import { styled } from "@mui/material/styles"
import Dialog from "@mui/material/Dialog"
import DialogTitle from "@mui/material/DialogTitle"
import DialogContent from "@mui/material/DialogContent"
import IconButton from "@mui/material/IconButton"
import CloseIcon from "@mui/icons-material/Close"
import Typography from "@mui/material/Typography"
import { useState } from "react"
import Authorization from "./components/Authorization"
import Register from "./components/Register"
import GoogleIcon from "@mui/icons-material/Google"
import styles from "./Auth.module.scss"

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}))

export interface DialogTitleProps {
  id: string
  children?: React.ReactNode
  onClose: () => void
}

const BootstrapDialogTitle = (props: DialogTitleProps) => {
  const { children, onClose, ...other } = props

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  )
}

const Auth = () => {
  const [open, setOpen] = useState(false)
  const [login, setLogin] = useState(true)
  const handleClickOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
    setLogin(true)
  }

  return (
    <div>
      <Button variant="outlined" color="inherit" onClick={handleClickOpen}>
        Войти
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
        >
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {login ? "Войти" : "Регистрация"}
          </Typography>
        </BootstrapDialogTitle>

        <DialogContent dividers>
          <Button
            className={styles.btn}
            variant="outlined"
            href="#outlined-buttons"
          >
            <GoogleIcon />
          </Button>

          {login ? <Authorization /> : <Register />}
          {login && (
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Нет аккаунта?{" "}
              <strong onClick={() => setLogin(false)} className={styles.strong}>Зарегистрируйтесь</strong>
            </Typography>
          )}
        </DialogContent>
      </BootstrapDialog>
    </div>
  )
}
export default Auth
