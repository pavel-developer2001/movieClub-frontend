import React, { useState } from "react"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Modal from "@mui/material/Modal"
import styles from "./CreateTeam.module.scss"
import { UploadImage } from "../../../UI/UploadImage"
import { TextField, Typography } from "@mui/material"
import * as yup from "yup"
import { useForm, Controller } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { useActions } from "../../../../hooks/useActions"

const CreateTeamFormSchema = yup.object().shape({
  title: yup.string().min(4, "Минимальная длина названия 4 символа").required(),
  subTitle: yup
    .string()
    .min(4, "Минимальная длина подзагаловка 4 символа")
    .required(),
  description: yup
    .string()
    .min(10, "Минимальная длина описания 10 символов")
    .required(),
})

const CreateTeam = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(CreateTeamFormSchema),
  })

  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const [cover, setCover] = useState<string | File | null>(null)
  const { addNewTeam } = useActions()

  const onSubmit = async (data: any) => {
    const formData = new FormData()
    //@ts-ignore
    formData.append("teamCover", cover)
    formData.append("teamName", data.title)
    formData.append("teamSubtitle", data.subTitle)
    formData.append("teamDescription", data.description)
    //@ts-ignore
    await addNewTeam(formData)
    reset()
    setCover(null)
    setOpen(false)
  }
  return (
    <div>
      <Button onClick={handleOpen}>Создать команду</Button>
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
            <div className={styles.upload}>
              <UploadImage image={cover} setImage={setCover} />
            </div>

            <div className={styles.field}>
              <Controller
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    label="Название команды"
                    error={!!errors?.title}
                    id="outlined-error-helper-text"
                    helperText={errors?.title?.message}
                  />
                )}
                name="title"
                control={control}
                defaultValue=""
              />
            </div>
            <div className={styles.field}>
              <Controller
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    label="Подзагаловок команды"
                    error={!!errors?.subTitle}
                    id="outlined-error-helper-text"
                    helperText={errors?.subTitle?.message}
                  />
                )}
                name="subTitle"
                control={control}
                defaultValue=""
              />
            </div>
            <div className={styles.field}>
              <Controller
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Описание команды"
                    rows={4}
                    multiline
                    fullWidth
                    error={!!errors?.description}
                    id="outlined-error-helper-text"
                    helperText={errors?.description?.message}
                  />
                )}
                name="description"
                control={control}
                defaultValue=""
              />
            </div>
            <div className={styles.btn}>
              <Button variant="contained" type="submit">
                Создать
              </Button>
            </div>
          </form>
        </Box>
      </Modal>
    </div>
  )
}

export default CreateTeam
