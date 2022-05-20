import React from "react"
import styles from "./CommentsBlock.module.scss"
import CommenttItem from "./components/CommenttItem"
import CreateCommentForm from "./components/CreateCommentForm"

const CommentsBlock = () => {
  return (
    <div className={styles.wrapper}>
      <strong className={styles.title}>Комментарии 4034</strong>
      <CreateCommentForm />
      {new Array(5).fill("").map((_, index) => (
        <CommenttItem key={index} />
      ))}
    </div>
  )
}

export default CommentsBlock
