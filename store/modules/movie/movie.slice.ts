import { createSlice } from "@reduxjs/toolkit"
import { HYDRATE } from "next-redux-wrapper"
import { addNewMovie, getMovie, getMovies } from "./movie.actions"
import { IGenre } from "./types/IGenre"

interface MovieItems {
  genres: IGenre[]
}
interface MovieState {
  movies: any
  movie: MovieItems
  status: null | string
  loading: boolean
  error: null
}
const initialState: MovieState = {
  movies: [],
  movie: { genres: [] },
  status: null,
  loading: true,
  error: null,
}
const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(HYDRATE, (state, action: any) => {
        state.movies = action.payload.movie.movies
        state.movie = action.payload.movie.movie
        state.loading = false
      })
      .addCase(addNewMovie.fulfilled, (state, action: any) => {
        state.movies.push(action.payload)
      })
      .addCase(getMovies.fulfilled, (state, action) => {
        state.movies = action.payload.data
        state.loading = false
      })
      .addCase(getMovie.fulfilled, (state, action) => {
        state.movie = action.payload.data
        state.loading = false
      }),
})

export default movieSlice.reducer
