import MovieApi from "../../../services/movie-api"
import { createAsyncThunk } from "@reduxjs/toolkit"

export const addNewMovie = createAsyncThunk(
  "movie/addNewMovie ",
  async (payload) => {
    return await MovieApi.createMovie(payload)
  }
)
export const getMovies = createAsyncThunk("movie/getMovies", async () => {
  return await MovieApi.getAllMovie()
})
export const getMovie = createAsyncThunk(
  "movie/getMovie",
  async (id: string | string[] | undefined) => {
    return await MovieApi.getMovie(id)
  }
)
