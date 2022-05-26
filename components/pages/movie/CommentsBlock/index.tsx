import { useRouter } from "next/router"
import React, { useEffect } from "react"
import { useActions } from "../../../../hooks/useActions"
import {
  selectCommentLoading,
  selectCommentsData,
} from "../../../../store/modules/comment/comment.selector"
import styles from "./CommentsBlock.module.scss"
import CreateCommentForm from "./components/CreateCommentForm"
import { useSelector } from "react-redux"
import { selectIsAuth } from "../../../../store/modules/user/user.selector"
import { CircularProgress } from "@mui/material"
import dynamic from "next/dynamic"

const DynamicCommenttItem = dynamic(() => import("./components/CommenttItem"), {
  loading: () => <CircularProgress />,
})

const CommentsBlock = () => {
  const { getComments } = useActions()
  const router = useRouter()
  const comments = useSelector(selectCommentsData)
  const isLoading = useSelector(selectCommentLoading)
  const isAuth = useSelector(selectIsAuth)
  useEffect(() => {
    //@ts-ignore
    getComments(router.query.id)
  }, [])
  return (
    <div className={styles.wrapper}>
      <strong className={styles.title}>Комментарии {comments.length}</strong>
      {isAuth && <CreateCommentForm />}

      {isLoading ? (
        <CircularProgress />
      ) : (
        comments.map((comment) => (
          <DynamicCommenttItem key={comment._id} comment={comment} />
        ))
      )}
    </div>
  )
}

export default CommentsBlock
