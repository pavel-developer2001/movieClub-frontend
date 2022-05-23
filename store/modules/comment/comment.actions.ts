import { createAsyncThunk } from "@reduxjs/toolkit"
import CommentApi from "../../../services/comment-api"

export const getComments = createAsyncThunk(
  "comment/getComments",
  async (id: string | string[]) => {
    return await CommentApi.getAllCommentsForMovie(id)
  }
)
export const addComment = createAsyncThunk(
  "comment/addComment",
  async (payload: {
    commentText: string
    movieId: string | string[] | undefined
    spoiler: boolean
  }) => {
    return await CommentApi.addCommentForMovie(payload)
  }
)
