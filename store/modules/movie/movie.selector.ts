import { RootState } from "../../reducer"
import { IMovie } from "./types/IMovie"

export const selectMovie = (state: RootState) => state.movie

export const selectMovieData = (state: RootState): any =>
  selectMovie(state).movie

export const selectMovies = (state: RootState): IMovie[] =>
  selectMovie(state).movies

export const selectMovieLoading = (state: RootState): boolean =>
  selectMovie(state).loading
