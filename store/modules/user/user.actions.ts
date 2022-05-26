import { createAsyncThunk } from "@reduxjs/toolkit"
import UserApi from "../../../services/user-api"

export const registerUsers = createAsyncThunk(
  "user/registerUsers",
  async (payload: { name: string; email: string; password: string }) => {
    return await UserApi.registration(payload)
  }
)
export const getUserData = createAsyncThunk(
  "user/getUserData",
  async (id: string) => {
    return await UserApi.getUser(id)
  }
)
export const getUserProfile = createAsyncThunk(
  "user/getUserProfile",
  async (id: string) => {
    return await UserApi.getUser(id)
  }
)
export const loginUsers = createAsyncThunk(
  "user/loginUsers",
  async (payload: { email: string; password: string }) => {
    return await UserApi.login(payload)
  }
)
export const userExit = createAsyncThunk("user/userExit", async () => {
  return await UserApi.logout()
})
export const userCheckout = createAsyncThunk("user/userCheckout", async () => {
  return await UserApi.refresh()
})
export const userGoogleAuth = createAsyncThunk(
  "user/userGoogleAuth",
  async () => {
    return await UserApi.googleAuth()
  }
)
