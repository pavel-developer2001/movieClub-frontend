import React from "react"
import { Button, TextField } from "@mui/material"
import * as yup from "yup"
import { useForm, Controller } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import styles from "../../Auth.module.scss"

const RegisterFormSchema = yup.object().shape({
  name: yup.string().min(4, "Минимальная длина имени 4 символа").required(),
  email: yup.string().email("Неверная почта").required("Введите почту"),
  password: yup
    .string()
    .min(6, "​Минимальная длина пароля 6 символов")
    .required(),
  password2: yup
    .string()
    .min(6, "​Минимальная длина пароля 6 символов")
    .required(),
})
const Register = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(RegisterFormSchema),
  })
  const onSubmit = async (data: any) => {
    if (data.password === data.password2) {
      console.log("DATA", data)
      reset()
    }
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.field}>
        <Controller
          render={({ field }) => (
            <TextField
              {...field}
              label="UserName"
              error={!!errors?.name}
              id="outlined-error-helper-text"
              helperText={errors?.name?.message}
            />
          )}
          name="name"
          control={control}
          defaultValue=""
        />
      </div>
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
      <div className={styles.field}>
        <Controller
          render={({ field }) => (
            <TextField
              {...field}
              label="Повторить пароль"
              error={!!errors?.password2}
              helperText={errors?.password2?.message}
            />
          )}
          name="password2"
          control={control}
          defaultValue=""
        />
      </div>

      <div>
        <Button variant="contained" className={styles.btn} type="submit">
          Зарегистрироваться
        </Button>
      </div>
    </form>
  )
}

export default Register
