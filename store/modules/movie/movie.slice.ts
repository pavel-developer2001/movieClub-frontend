import { createSlice } from "@reduxjs/toolkit"
import { HYDRATE } from "next-redux-wrapper"
import { addNewMovie } from "./movie.actions"
import { IGenre } from "./types/IGenre"

// export const getMangas = createAsyncThunk("manga/getMangas", async () => {
//   return await MangaApi.getAllManga();
// });
// export const getManga = createAsyncThunk(
//   "manga/getManga",
//   async (id: string | string[] | undefined) => {
//     return await MangaApi.getManga(id);
//   }
// );
interface MovieItems {
  movie: any
  genre: IGenre[]
}
interface MangaState {
  movies: any
  movie: MovieItems
  status: null | string
  loading: boolean
}
const initialState: MangaState = {
  movies: [],
  movie: { movie: [], genre: [] },
  status: null,
  loading: true,
}
const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    //@ts-ignore
    setMovies(state, action) {
      state.mangas = action.payload
      state.loading = false
    },
    //@ts-ignore
    setMovie(state, action) {
      state.manga = action.payload
      state.loading = false
    },
  },

  extraReducers: (builder) =>
    builder
      .addCase(HYDRATE, (state, action: any) => {
        state.movies = action.payload.manga.mangas
        state.movie = action.payload.manga.manga
        state.loading = false
      })
      .addCase(addNewMovie.fulfilled, (state, action: any) => {
        state.movies.push(action.payload)
      }),
  //   .addCase(getMangas.fulfilled, (state, action) => {
  //     state.mangas = action.payload.data;
  //     state.loading = false;
  //   })
  //   .addCase(getManga.fulfilled, (state, action) => {
  //     state.manga = action.payload.data;
  //     state.loading = false;
  //   }),
})

export default movieSlice.reducer
export const { setMovies, setMovie } = movieSlice.actions
