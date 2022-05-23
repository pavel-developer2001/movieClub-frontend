import { createAsyncThunk } from "@reduxjs/toolkit"
import RatingApi from "../../../services/rating-api"

export const addRating = createAsyncThunk(
  "rating/addRating",
  async (payload: {
    rating: number | null
    movieId: string | string[] | undefined
  }) => {
    return await RatingApi.addRatingForMovie(payload)
  }
)
export const updateRating = createAsyncThunk(
  "rating/updateRating",
  async (payload: {
    rating: number | null
    movieId: string | string[] | undefined
  }) => {
    return await RatingApi.updateRatingForMovie(payload)
  }
)
export const getRating = createAsyncThunk(
  "rating/getRating",
  async (dataMovie: { id: string | string[] | undefined }) => {
    return await RatingApi.getRatingForMovie(dataMovie.id)
  }
)
