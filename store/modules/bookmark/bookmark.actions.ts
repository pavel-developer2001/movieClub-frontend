import { createAsyncThunk } from "@reduxjs/toolkit"
import BookmarkApi from "../../../services/bookmark-api"

export const addBookmark = createAsyncThunk(
  "bookmark/addBookmark",
  async (payload: { category: string; movieId: number }) => {
    return await BookmarkApi.addBookMarkForUser(payload)
  }
)
export const updateBookmark = createAsyncThunk(
  "bookmark/updateBookmark",
  async (payload: { category: string; movieId: number }) => {
    return await BookmarkApi.updateBookMark(payload)
  }
)
export const getBookmarks = createAsyncThunk(
  "bookmark/getBookmarks",
  async (id: number) => {
    return await BookmarkApi.getAllBookMarksForUser(id)
  }
)
export const getBookmarkToMovie = createAsyncThunk(
  "bookmark/getBookmarkToMovie",
  async (dataMovie: { movieId: string | string[] | undefined }) => {
    return await BookmarkApi.getBookMarkForMovie(dataMovie.movieId)
  }
)
