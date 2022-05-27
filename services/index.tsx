import axios from "axios"
import UserApi from "./user-api"

export interface IToken {
  email: string
  sub: number
  iat: number
  exp: number
}

export const token =
  typeof window !== "undefined" && window.localStorage.getItem("movie-token")

const API_URL = "http://localhost:5000/api"

const instance = axios.create({
  baseURL: API_URL,
  withCredentials: true,
})

instance.interceptors.request.use((config) => {
  //@ts-ignore
  config.headers.Authorization = `Bearer ${token}`
  return config
})

instance.interceptors.response.use(
  (config) => {
    return config
  },
  async (error) => {
    const originalRequest = error.config
    if (
      error.response.status == 401 &&
      error.config &&
      !error.config._isRetry
    ) {
      originalRequest._isRetry = true
      try {
        const response = await UserApi.refresh()
        localStorage.setItem("movie-token", response.data.accessToken)
        return instance.request(originalRequest)
      } catch (e) {
        console.log("НЕ АВТОРИЗОВАН")
      }
    }
    throw error
  }
)

export default instance
