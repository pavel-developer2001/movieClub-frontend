import { createSlice } from "@reduxjs/toolkit"
import { HYDRATE } from "next-redux-wrapper"
import { IUser } from "./types/IUser"
import {
  getUserData,
  loginUsers,
  registerUsers,
  userCheckout,
  userExit,
  userGoogleAuth,
} from "./user.actions"

interface UserState {
  user: IUser | {}
  isAuth: boolean
  status: null | string
  loading: boolean
  error: null
}
const initialState: UserState = {
  user: {},
  isAuth: false,
  status: null,
  loading: true,
  error: null,
}
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    //@ts-ignore
    checkAuth(state, action) {
      state.isAuth = action.payload
    },
  },

  extraReducers: (builder) =>
    builder
      .addCase(HYDRATE, (state, action) => {
        //@ts-ignore
        state.user = action.payload.user.user
        state.loading = false
      })
      .addCase(loginUsers.fulfilled, (state, action) => {
        state.user = action.payload.data
        window.localStorage.setItem(
          "movie-token",
          action.payload.data.accessToken
        )
        state.loading = false
        state.isAuth = true
      })
      .addCase(registerUsers.fulfilled, (state, action) => {
        state.user = action.payload.data
        window.localStorage.setItem(
          "movie-token",
          action.payload.data.accessToken
        )
        state.loading = false
        state.isAuth = true
      })
      .addCase(userGoogleAuth.fulfilled, (state, action) => {
        state.user = action.payload.data
        window.localStorage.setItem(
          "movie-token",
          action.payload.data.accessToken
        )
        state.loading = false
        state.isAuth = true
      })
      .addCase(getUserData.fulfilled, (state, action) => {
        state.user = action.payload.data
        state.loading = false
      })
      .addCase(userExit.fulfilled, (state, action) => {
        window.localStorage.removeItem("movie-token")
        state.user = {}
        state.loading = false
        state.isAuth = false
      })
      .addCase(userCheckout.fulfilled, (state, action) => {
        state.user = action.payload.data.user
        window.localStorage.setItem(
          "movie-token",
          action.payload.data.accessToken
        )
        state.loading = false
        state.isAuth = true
      }),
})

export default userSlice.reducer
export const { checkAuth } = userSlice.actions
