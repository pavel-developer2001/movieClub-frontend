import { createSlice } from "@reduxjs/toolkit"
import { HYDRATE } from "next-redux-wrapper"
import { addComment, getComments } from "./comment.actions"
import { IComment } from "./types/IComment"

interface CommentState {
  comments: IComment[]
  status: null | string
  loading: boolean
  error: null
}
const initialState: CommentState = {
  comments: [],
  status: null,
  loading: true,
  error: null,
}
const commentSlice = createSlice({
  name: "comment",
  initialState,
  reducers: {
    setComments(state: any, action: any) {
      state.comments = action.payload
      state.loading = false
    },
  },

  extraReducers: (builder) =>
    builder
      .addCase(HYDRATE, (state, action: any) => {
        state.comments = action.payload.comment.comments
        state.loading = false
      })
      .addCase(addComment.fulfilled, (state, action) => {
        state.comments.unshift(action.payload.data)
      })
      .addCase(getComments.fulfilled, (state, action) => {
        state.comments = action.payload.data
        state.loading = false
      }),
})

export default commentSlice.reducer
export const { setComments } = commentSlice.actions
