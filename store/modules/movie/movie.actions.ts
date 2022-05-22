import MovieApi from "../../../services/movie-api"
import { createAsyncThunk } from "@reduxjs/toolkit";

export const addNewMovie = createAsyncThunk(
  "manga/addNewManga",
  async (payload) => {
    return await MovieApi.createMovie(payload)
  }
)
