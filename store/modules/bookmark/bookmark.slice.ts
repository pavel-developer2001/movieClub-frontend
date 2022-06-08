import { createSlice } from "@reduxjs/toolkit"
import { HYDRATE } from "next-redux-wrapper"
import {
  addBookmark,
  getBookmarks,
  getBookmarkToMovie,
  updateBookmark,
} from "./bookmark.actions"
import { IBookmark } from "./types/IBookmark"

interface BookmarkState {
  bookMarks: IBookmark[]
  bookMark: null
  status: null | string
  loading: boolean
  error: null
}
const initialState: BookmarkState = {
  bookMarks: [],
  bookMark: null,
  status: null,
  loading: true,
  error: null,
}
const bookmarkSlice = createSlice({
  name: "bookmark",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    //@ts-ignore
    builder
      .addCase(HYDRATE, (state, action: any) => {
        state.bookMarks = action.payload.bookmark.bookMarks
        state.loading = false
      })
      .addCase(addBookmark.fulfilled, (state, action) => {
        if (action.payload.data.category == "Удалить из закладок") {
          return (state.bookMarks = state.bookMarks.filter(
            (item) => item._id !== action.payload.data._id
          ))
        }
        state.bookMarks.push(action.payload.data)
      })
      .addCase(updateBookmark.fulfilled, (state, action) => {
        state.bookMarks = state.bookMarks.filter(
          (item) => item._id != action.payload.data._id
        )
        state.bookMarks.push(action.payload.data)
      })
      .addCase(getBookmarks.fulfilled, (state, action) => {
        state.bookMarks = action.payload.data
        state.loading = false
      })
      .addCase(getBookmarkToMovie.fulfilled, (state, action) => {
        state.bookMark = action.payload.data
        state.loading = false
      }),
})

export default bookmarkSlice.reducer
