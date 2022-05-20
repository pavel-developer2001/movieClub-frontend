import React, { FC, useState } from "react"
import styles from "./CommenttItem.module.scss"
import Image from "next/image"
import Link from "next/link"
import Tooltip from "@mui/material/Tooltip"
import IconButton from "@mui/material/IconButton"
import ExpandLessIcon from "@mui/icons-material/ExpandLess"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import ChatSharpIcon from "@mui/icons-material/ChatSharp"
import ReplySharpIcon from "@mui/icons-material/ReplySharp"
import Button from "@mui/material/Button"
import CreateCommentForm from "../CreateCommentForm"

interface CommenttItemProps {
  isShowBtn?: boolean
}

const CommenttItem: FC<CommenttItemProps> = ({ isShowBtn = true }) => {
  const [isShowForm, setIsShowForm] = useState(false)
  const [isShowParentComments, setIsShowPrrentComments] = useState(false)
  return (
    <div className={styles.wrapper}>
      <Link href="/user/1">
        <Image
          className={styles.image}
          src={"https://api.remanga.org//media/users/2814/avatar.jpg"}
          width={40}
          height={40}
        />
      </Link>
      <div className={styles.data}>
        <div className={styles.content}>
          <div className={styles.head}>
            <strong>Heodark</strong>
            <span> · 6 часов назад</span>
          </div>
          <p>Ааааааа я дико хочу узнать как визуалезируют каэру</p>
        </div>
        <div className={styles.footer}>
          <Tooltip title="Лайк">
            <IconButton aria-label="create">
              <ExpandLessIcon />
            </IconButton>
          </Tooltip>
          <span>0</span>
          <Tooltip title="Дизлайк">
            <IconButton aria-label="create">
              <ExpandMoreIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Ответить">
            <IconButton
              onClick={() => setIsShowForm(!isShowForm)}
              aria-label="create"
            >
              <ReplySharpIcon />
            </IconButton>
          </Tooltip>
          {isShowBtn && (
            <Tooltip title="Ответы">
              <Button
                variant="text"
                onClick={() => setIsShowPrrentComments(!isShowParentComments)}
                startIcon={<ChatSharpIcon />}
              >
                10
              </Button>
            </Tooltip>
          )}
        </div>
        {isShowForm && <CreateCommentForm whom="@Headark," />}
        {isShowParentComments &&
          new Array(5)
            .fill("")
            .map((_, index) => <CommenttItem isShowBtn={false} />)}
      </div>
    </div>
  )
}

export default CommenttItem
