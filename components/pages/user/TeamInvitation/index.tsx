import React, { useState } from "react"
import styles from "./TeamInvitation.module.scss"
import * as yup from "yup"
import { useForm, Controller } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import Button from "@mui/material/Button"
import Modal from "@mui/material/Modal"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import InputLabel from "@mui/material/InputLabel"
import FormControl from "@mui/material/FormControl"
import Select from "@mui/material/Select"
import FormHelperText from "@mui/material/FormHelperText"
import MenuItem from "@mui/material/MenuItem"

const TeamInvitationFormSchema = yup.object().shape({
  team: yup.string().required("Выбирите команду"),
  rank: yup.string().required("Выбирите должность"),
})

const TeamInvitation = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(TeamInvitationFormSchema),
  })

  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const typeArray = ["Аниме", "Сериал", "Фильм"]

  const onSubmit = async (data: any) => {
    console.log("DATA", data)
    reset()
  }
  return (
    <div>
      <Button onClick={handleOpen}>Пригласить в команду</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className={styles.modal}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Создать команду
            </Typography>
            <div className={styles.selector}>
              <Controller
                render={({ field }) => (
                  <FormControl fullWidth error={errors?.team?.message}>
                    <InputLabel id="demo-simple-select-label">
                      Команда
                    </InputLabel>
                    <Select
                      {...field}
                      label="Команда"
                      error={!!errors?.team}
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                    >
                      {typeArray.map((name) => (
                        <MenuItem value={name} key={name}>
                          {name}
                        </MenuItem>
                      ))}
                    </Select>
                    <FormHelperText>{errors?.team?.message}</FormHelperText>
                  </FormControl>
                )}
                name="team"
                control={control}
                defaultValue=""
              />
            </div>
            <div className={styles.selector}>
              <Controller
                render={({ field }) => (
                  <FormControl fullWidth error={errors?.rank?.message}>
                    <InputLabel id="demo-simple-select-label">
                      Должность
                    </InputLabel>
                    <Select
                      {...field}
                      label="Должность"
                      error={!!errors?.rank}
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                    >
                      {typeArray.map((name) => (
                        <MenuItem value={name} key={name}>
                          {name}
                        </MenuItem>
                      ))}
                    </Select>
                    <FormHelperText>{errors?.rank?.message}</FormHelperText>
                  </FormControl>
                )}
                name="rank"
                control={control}
                defaultValue=""
              />
            </div>
            <div className={styles.btn}>
              <Button variant="contained" type="submit">
                Пригласить
              </Button>
            </div>
          </form>
        </Box>
      </Modal>
    </div>
  )
}

export default TeamInvitation
