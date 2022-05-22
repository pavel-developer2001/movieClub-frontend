import React, { useState } from "react"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import Modal from "@mui/material/Modal"
import styles from "./RatingChangeBtn.module.scss"
import StarIcon from "@mui/icons-material/Star"

const RatingChangeBtn = () => {
  const [open, setOpen] = useState(false)
  const [rating, setRating] = useState<null | number>(null)
  console.log(rating)
  const handleChangeRating = (value: number) => {
    setRating(value)
    setOpen(false)
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
  return (
    <div>
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