import { combineReducers } from "@reduxjs/toolkit";
import movieSlice from "./modules/movie/movie.slice";
import userSlice from "./modules/user/user.slice";

export const rootReducer = combineReducers({
    user: userSlice,
    movie: movieSlice,
  });
  
  export type RootState = ReturnType<typeof rootReducer>;