import { NextPage } from "next"
import React, { useState } from "react"
import MainLayout from "../layouts/MainLayout"
import * as yup from "yup"
import { useForm, Controller } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import styles from "../styles/pages/CreateMoviePage.module.scss"
import { UploadImage } from "../components/UI/UploadImage"
import TextField from "@mui/material/TextField"
import Select, { SelectChangeEvent } from "@mui/material/Select"
import MenuItem from "@mui/material/MenuItem"
import FormControl from "@mui/material/FormControl"
import InputLabel from "@mui/material/InputLabel"
import OutlinedInput from "@mui/material/OutlinedInput"
import ListItemText from "@mui/material/ListItemText"
import Checkbox from "@mui/material/Checkbox"
import Button from "@mui/material/Button"
import { FormHelperText } from "@mui/material"
import { useActions } from "../hooks/useActions"
import { useRouter } from "next/router"

const ITEM_HEIGHT = 48
const ITEM_PADDING_TOP = 8
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
}

const names = [
  "Военное",
  "Фэнтези",
  "Комедия",
  "Экшен",
  "Боевые искусства",
  "Драма",
  "Детектив",
  "Эротика",
  "Ужасы",
  "Фантастика",
  "Документальное",
  "Короткометражка",
  "Детское",
  "Семейное",
  "Путешествие",
  "Биография",
  "Историческое",
  "Криминал",
  "Зарубежное",
]
const status = ["Продолжается", "Закончен", "Нет переводчика", "Анонс"]
const typeArray = ["Аниме", "Сериал", "Фильм"]
const ageArray = ["0+", "6+", "12+", "16+", "18+"]

const CreateMovieFormSchema = yup.object().shape({
  title: yup.string().min(3, "Минимальная длина названия 3 символа").required(),
  // cover: yup.file().notRequired(),
  englishTitle: yup
    .string()
    .min(3, "Минимальная длина названия 3 символа")
    .required(),
  country: yup
    .string()
    .min(1, "Минимальная длина названия 1 символа")
    .required(),
  description: yup
    .string()
    .min(20, "Минимальная длина описания 20 символов")
    .required(),
  type: yup.string().required("Выбирите тип кино"),
  status: yup.string().required("Выбирите статус кино"),
  // genres: yup.string().required(),
  age: yup.string().required("Выбирите возрастное ограничение"),
  year: yup
    .number()
    .typeError("Введите число")
    .min(4, "Минимальная длина года 4 символа")
    .required(),
  time: yup
    .number()
    .typeError("Введите число")
    .min(4, "Напишите сколько идёт фильм")
    .required(),
})

const CreateMoviePage: NextPage = () => {
  const [coverMovie, setCoverMovie] = useState<File | string | null>(null)
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(CreateMovieFormSchema),
  })
  const [genres, setGenres] = React.useState<string[]>([])
  const router = useRouter()

  const handleChange = (event: SelectChangeEvent<typeof genres>) => {
    const {
      target: { value },
    } = event
    setGenres(typeof value === "string" ? value.split(",") : value)
  }
  const { addNewMovie } = useActions()
  const createMovie = async (data: any) => {
    try {
      const formData = new FormData()
      formData.append("title", data.title)
      formData.append("englishTitle", data.englishTitle)
      formData.append("description", data.description)
      formData.append("type", data.type)
      formData.append("status", data.status)
      formData.append("age", data.age)
      formData.append("year", data.year)
      formData.append("munites", data.time)
      formData.append("country", data.country)
      //@ts-ignore
      formData.append("cover", coverMovie)
      for (let i = 0; i < genres.length; i++) {
        formData.append("genres", genres[i])
      }
      //@ts-ignore
      await addNewMovie(formData)
      reset()
      setCoverMovie(null)
      setGenres([])
      router.push("/")
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <MainLayout>
      <form onSubmit={handleSubmit(createMovie)} className={styles.form}>
        <div className={styles.header}>
          <div className={styles.top}>
            <Controller
              render={() => (
                <UploadImage image={coverMovie} setImage={setCoverMovie} />
              )}
              name="cover"
              control={control}
              defaultValue=""
            />
            <div className={styles.rigth}>
              <div className={styles.field}>
                <Controller
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Русское название"
                      fullWidth
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
                      label="Английское название"
                      error={!!errors?.englishTitle}
                      id="outlined-error-helper-text"
                      helperText={errors?.englishTitle?.message}
                    />
                  )}
                  name="englishTitle"
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
                      label="Страна"
                      error={!!errors?.country}
                      id="outlined-error-helper-text"
                      helperText={errors?.country?.message}
                    />
                  )}
                  name="country"
                  control={control}
                  defaultValue=""
                />
              </div>
            </div>
          </div>
          <div className={styles.bottom}>
            <Controller
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  label="Описание"
                  className={styles.bottom}
                  error={!!errors?.description}
                  rows={6}
                  multiline
                  id="outlined-error-helper-text"
                  helperText={errors?.description?.message}
                />
              )}
              name="description"
              control={control}
              defaultValue=""
            />
          </div>
        </div>
        <div className={styles.body}>
          <div className={styles.left}>
            <div className={styles.head}>
              <div className={styles.selector}>
                <Controller
                  render={({ field }) => (
                    <FormControl fullWidth error={errors?.type?.message}>
                      <InputLabel id="demo-simple-select-label">Тип</InputLabel>
                      <Select
                        {...field}
                        label="Тип"
                        error={!!errors?.type}
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                      >
                        {typeArray.map((name) => (
                          <MenuItem value={name} key={name}>
                            {name}
                          </MenuItem>
                        ))}
                      </Select>
                      <FormHelperText>{errors?.type?.message}</FormHelperText>
                    </FormControl>
                  )}
                  name="type"
                  control={control}
                  defaultValue=""
                />
              </div>
              <div className={styles.selector}>
                <Controller
                  render={({ field }) => (
                    <FormControl fullWidth error={errors?.status?.message}>
                      <InputLabel id="demo-simple-select-label">
                        Статус
                      </InputLabel>
                      <Select
                        {...field}
                        label="Статус"
                        error={!!errors?.status}
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                      >
                        {status.map((name) => (
                          <MenuItem value={name} key={name}>
                            {name}
                          </MenuItem>
                        ))}
                      </Select>
                      <FormHelperText>{errors?.status?.message}</FormHelperText>
                    </FormControl>
                  )}
                  name="status"
                  control={control}
                  defaultValue=""
                />
              </div>
            </div>
            <div className={styles.selector}>
              <Controller
                render={({ field }) => (
                  <FormControl fullWidth>
                    <InputLabel id="demo-multiple-checkbox-label">
                      Жанры
                    </InputLabel>
                    <Select
                      {...field}
                      labelId="demo-multiple-checkbox-label"
                      id="demo-multiple-checkbox"
                      multiple
                      value={genres}
                      onChange={handleChange}
                      input={<OutlinedInput label="Tag" />}
                      renderValue={(selected) => selected.join(", ")}
                      MenuProps={MenuProps}
                    >
                      {names.map((name) => (
                        <MenuItem key={name} value={name}>
                          <Checkbox checked={genres.indexOf(name) > -1} />
                          <ListItemText primary={name} />
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                )}
                name="genres"
                control={control}
                defaultValue=""
              />
            </div>
          </div>
          <div className={styles.rigth}>
            <div className={styles.selector}>
              <Controller
                render={({ field }) => (
                  <FormControl fullWidth error={errors?.age?.message}>
                    <InputLabel id="demo-simple-select-label">
                      Возрастное ограничение
                    </InputLabel>
                    <Select
                      {...field}
                      label="Статус"
                      error={!!errors?.age}
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                    >
                      {ageArray.map((name) => (
                        <MenuItem value={name} key={name}>
                          {name}
                        </MenuItem>
                      ))}
                    </Select>
                    <FormHelperText>{errors?.age?.message}</FormHelperText>
                  </FormControl>
                )}
                name="age"
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
                    label="Год выпуска"
                    type="number"
                    inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
                    error={!!errors?.year}
                    id="outlined-error-helper-text"
                    helperText={errors?.year?.message}
                  />
                )}
                name="year"
                control={control}
                defaultValue=""
              />
            </div>
            <div className={styles.field}>
              <Controller
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Продолжительность(напишите кол-во минут)"
                    type="number"
                    inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
                    fullWidth
                    error={!!errors?.time}
                    id="outlined-error-helper-text"
                    helperText={errors?.time?.message}
                  />
                )}
                name="time"
                control={control}
                defaultValue=""
              />
            </div>
          </div>
        </div>
        <div className={styles.btn}>
          <Button variant="contained" type="submit">
            Создать
          </Button>
        </div>
      </form>
    </MainLayout>
  )
}

export default CreateMoviePage
