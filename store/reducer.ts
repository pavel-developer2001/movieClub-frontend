import { combineReducers } from "@reduxjs/toolkit";
import userSlice from "./modules/user/user.slice";

export const rootReducer = combineReducers({
    user: userSlice,
  });
  
  export type RootState = ReturnType<typeof rootReducer>;