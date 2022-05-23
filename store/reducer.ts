import { combineReducers } from "@reduxjs/toolkit"
import movieSlice from "./modules/movie/movie.slice"
import userSlice from "./modules/user/user.slice"
import ratingSlice from "./modules/rating/rating.slice"
import commentSlice from "./modules/comment/comment.slice"

export const rootReducer = combineReducers({
  user: userSlice,
  movie: movieSlice,
  rating: ratingSlice,
  comment: commentSlice,
})

export type RootState = ReturnType<typeof rootReducer>
