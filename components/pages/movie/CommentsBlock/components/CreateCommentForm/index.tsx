import TextField from "@mui/material/TextField"
import React, { FC, useState } from "react"
import styles from "./CreateCommentForm.module.scss"
import SendIcon from "@mui/icons-material/Send"
import IconButton from "@mui/material/IconButton"
import Switch from "@mui/material/Switch"
import Tooltip from "@mui/material/Tooltip"

interface CreateCommentFormProps {
  width?: string
  whom?: string
}

const CreateCommentForm: FC<CreateCommentFormProps> = ({
  width = "620",
  whom = "Оставить комментарий",
}) => {
  const [text, setText] = useState("")
  const [spoiler, setSpoiler] = useState(false)
  const handleCreateComment = async () => {
    try {
      console.log("data", text, spoiler)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div style={{ maxWidth: width + "px" }} className={styles.wrapper}>
      <div className={styles.input}>
        <TextField
          multiline
          maxRows={4}
          value={text}
          onChange={(e) => setText(e.target.value)}
          id="outlined-basic"
          className={styles.field}
          label={whom}
          variant="outlined"
        />
        {text.length >= 4 && text.length <= 500 && (
          <Tooltip title="Добавить">
            <IconButton onClick={handleCreateComment} aria-label="create">
              <SendIcon />
            </IconButton>
          </Tooltip>
        )}
      </div>
      <span className={styles.count}>{text.length}/500 символов</span>
      <div className={styles.spoiler}>
        <Switch value={spoiler} onChange={() => setSpoiler(!spoiler)} />
        <span>Спойлер</span>
      </div>
    </div>
  )
}

export default CreateCommentForm