import { RootState } from "../../reducer"

export const selectMovie = (state: RootState) => state.movie

export const selectMovieData = (state: RootState): any =>
  selectMovie(state).movie

export const selectMovies = (state: RootState): any => selectMovie(state).movies

export const selectMovieLoading = (state: RootState): boolean =>
  selectMovie(state).loading
