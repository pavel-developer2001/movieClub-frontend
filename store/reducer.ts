import { combineReducers } from "@reduxjs/toolkit"
import movieSlice from "./modules/movie/movie.slice"
import userSlice from "./modules/user/user.slice"
import ratingSlice from "./modules/rating/rating.slice"

export const rootReducer = combineReducers({
  user: userSlice,
  movie: movieSlice,
  rating: ratingSlice,
})

export type RootState = ReturnType<typeof rootReducer>
