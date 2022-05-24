import { useRouter } from "next/router"
import React, { useEffect } from "react"
import { useActions } from "../../../../hooks/useActions"
import {
  selectCommentLoading,
  selectCommentsData,
} from "../../../../store/modules/comment/comment.selector"
import styles from "./CommentsBlock.module.scss"
import CommenttItem from "./components/CommenttItem"
import CreateCommentForm from "./components/CreateCommentForm"
import { useSelector } from "react-redux"

const CommentsBlock = () => {
  const { getComments } = useActions()
  const router = useRouter()
  const comments = useSelector(selectCommentsData)
  const isLoading = useSelector(selectCommentLoading)
  useEffect(() => {
    //@ts-ignore
    getComments(router.query.id)
  }, [])
  return (
    <div className={styles.wrapper}>
      <strong className={styles.title}>Комментарии {comments.length}</strong>
      <CreateCommentForm />
      {isLoading ? (
        <p>loading...</p>
      ) : (
        comments.map((comment) => (
          <CommenttItem key={comment._id} comment={comment} />
        ))
      )}
    </div>
  )
}

export default CommentsBlock
