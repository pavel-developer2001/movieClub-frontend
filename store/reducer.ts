import { combineReducers } from "@reduxjs/toolkit"
import movieSlice from "./modules/movie/movie.slice"
import userSlice from "./modules/user/user.slice"
import ratingSlice from "./modules/rating/rating.slice"
import commentSlice from "./modules/comment/comment.slice"
import bookmarkSlice from "./modules/bookmark/bookmark.slice"

export const rootReducer = combineReducers({
  user: userSlice,
  movie: movieSlice,
  rating: ratingSlice,
  comment: commentSlice,
  bookmark: bookmarkSlice,
})

export type RootState = ReturnType<typeof rootReducer>
