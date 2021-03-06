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
import { selectIsAuth } from "../../../../../../store/modules/user/user.selector"
import { useSelector } from "react-redux"
import { IComment } from "../../../../../../store/modules/comment/types/IComment"

interface CommenttItemProps {
  isShowBtn?: boolean
  comment: IComment | any
}

const CommenttItem: FC<CommenttItemProps> = ({ isShowBtn = true, comment }) => {
  const [isShowForm, setIsShowForm] = useState(false)
  const [isShowParentComments, setIsShowPrrentComments] = useState(false)
  const isAuth = useSelector(selectIsAuth)
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
            <Link href={`/user/${comment.user._id}`}>
              <strong>{comment.user.name}</strong>
            </Link>
            <span> · {comment.createdAt}</span>
          </div>
          <p>{comment.commentText}</p>
        </div>
        <div className={styles.footer}>
          {isAuth && (
            <Tooltip title="Лайк">
              <IconButton aria-label="create">
                <ExpandLessIcon />
              </IconButton>
            </Tooltip>
          )}
          <span>{comment.count_likes}</span>
          {isAuth && (
            <Tooltip title="Дизлайк">
              <IconButton aria-label="create">
                <ExpandMoreIcon />
              </IconButton>
            </Tooltip>
          )}

          {isAuth && (
            <Tooltip title="Ответить">
              <IconButton
                onClick={() => setIsShowForm(!isShowForm)}
                aria-label="create"
              >
                <ReplySharpIcon />
              </IconButton>
            </Tooltip>
          )}

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
        {isShowForm && (
          <CreateCommentForm
            whom={"@" + comment.user.name}
            parentId={comment._id}
          />
        )}
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
