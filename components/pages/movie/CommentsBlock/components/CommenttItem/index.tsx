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
  comment: any
}

const CommenttItem: FC<CommenttItemProps> = ({ isShowBtn = true, comment }) => {
  const [isShowForm, setIsShowForm] = useState(false)
  const [isShowParentComments, setIsShowPrrentComments] = useState(false)
  return (
    <div className={styles.wrapper}>
      <Link href={`/user/${comment.user._id}`}>
        <Image
          className={styles.image}
          src={
            comment.user.avatar
              ? comment.user.avatar
              : "https://api.remanga.org//media/users/2814/avatar.jpg"
          }
          width={40}
          height={40}
        />
      </Link>
      <div className={styles.data}>
        <div className={styles.content}>
          <div className={styles.head}>
            <strong>{comment.user.name}</strong>
            <span> · {comment.createdAt}</span>
          </div>
          <p>{comment.commentText}</p>
        </div>
        <div className={styles.footer}>
          <Tooltip title="Лайк">
            <IconButton aria-label="create">
              <ExpandLessIcon />
            </IconButton>
          </Tooltip>
          <span>{comment.countLikes}</span>
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
          {comment.parentId && isShowBtn && (
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
        {isShowForm && <CreateCommentForm whom={"@" + comment.user.name} />}
        {comment.parentId &&
          isShowParentComments &&
          new Array(5)
            .fill("")
            .map((_, index) => <CommenttItem comment={{}} isShowBtn={false} />)}
      </div>
    </div>
  )
}

export default CommenttItem
