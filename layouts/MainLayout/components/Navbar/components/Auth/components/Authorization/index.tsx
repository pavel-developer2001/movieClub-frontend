import React from "react"
import TextField from "@mui/material/TextField"
import * as yup from "yup"
import { useForm, Controller } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import Button from "@mui/material/Button"
import styles from "../../Auth.module.scss"

const AuthorizationFormSchema = yup.object().shape({
  email: yup.string().email("Неверная почта").required("Введите почту"),
  password: yup
    .string()
    .min(6, "​Минимальная длина пароля 6 символов")
    .required(),
})
const Authorization = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(AuthorizationFormSchema),
  })
  const onSubmit = async (data: any) => {
    console.log("DATA", data)
    reset()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.field}>
        <Controller
          render={({ field }) => (
            <TextField
              {...field}
              label="Email"
              id="outlined-error-helper-text"
              error={!!errors?.email}
              helperText={errors?.email?.message}
            />
          )}
          name="email"
          control={control}
          defaultValue=""
        />
      </div>
      <div className={styles.field}>
        <Controller
          render={({ field }) => (
            <TextField
              {...field}
              label="Пароль"
              error={!!errors?.password}
              helperText={errors?.password?.message}
            />
          )}
          name="password"
          control={control}
          defaultValue=""
        />
      </div>

      <div className={styles.btn}>
        <Button variant="contained" type="submit">
          Войти
        </Button>
      </div>
    </form>
  )
}

export default Authorization
