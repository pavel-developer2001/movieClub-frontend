import React, { useEffect, useState } from "react"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Modal from "@mui/material/Modal"
import styles from "./RatingChangeBtn.module.scss"
import StarIcon from "@mui/icons-material/Star"
import {
  selectRatingItemData,
  selectRatingLoading,
} from "../../../../store/modules/rating/rating.selector"
import { useSelector } from "react-redux"
import { useRouter } from "next/router"
import { useActions } from "../../../../hooks/useActions"

const RatingChangeBtn = () => {
  const router = useRouter()
  const [open, setOpen] = useState(false)
  const ratingData = useSelector(selectRatingItemData)
  console.log("ratingData", ratingData.rating as string)
  const [rating, setRating] = useState<null | number>(null)
  const { addRating, updateRating, getRating } = useActions()
  console.log(rating)

  const loading = useSelector(selectRatingLoading)
  const dataMovie: { id: string | string[] | undefined } = {
    id: router.query.id,
  }
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const ratingArray = [
    { rating: 10, text: "ЭТО ШЕДЕВР!" },
    { rating: 9, text: "Отлично" },
    { rating: 8, text: "Очень хорошо" },
    { rating: 7, text: "Хорошо" },
    { rating: 6, text: "Нормас" },
    { rating: 5, text: "Под пивас пойдёт" },
    { rating: 4, text: "Ну такое" },
    { rating: 3, text: "Убожество" },
    { rating: 2, text: "Ниже плинтуса" },
    { rating: 1, text: "**********" },
  ]
  useEffect(() => {
    getRating(dataMovie)
  }, [router])
  useEffect(() => {
    setRating(ratingData?.rating)
  }, [ratingData])

  const handleChangeRating = (value: number) => {
    const payload: {
      rating: number | null
      movieId: string | string[] | undefined
    } = {
      rating: value,
      movieId: router.query.id,
    }
    if (rating === undefined) {
      addRating(payload)
      console.log("Ваша оценка для манги была добавлена")
      setOpen(false)
    }
    if (rating === ratingData.rating && rating !== undefined) {
      updateRating(payload)
      console.log("Ваша оценка была успешна обновлена")
      setOpen(false)
    }
  }

  return (
    <div>
      <span>{loading ? <p>loading</p> : ratingData.rating}</span>
      <Button onClick={handleOpen} className={styles.btn}>
        <StarIcon className={styles.icon} />

        <span>8.7 (голосов: 631)</span>
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className={styles.box}>
          <div className={styles.openModal}>
            {ratingArray.map((rat, index) => (
              <div
                key={index}
                className={styles.rating}
                onClick={() => handleChangeRating(rat.rating)}
              >
                {rat.rating} <StarIcon className={styles.icon} />
                <span>{rat.text}</span>
              </div>
            ))}
          </div>
        </Box>
      </Modal>
    </div>
  )
}

export default RatingChangeBtn
