import { createSlice } from "@reduxjs/toolkit"
import { HYDRATE } from "next-redux-wrapper"
import { addRating, getRating, updateRating } from "./rating.actions"
import { IRating } from "./types/IRating"

interface RatingState {
  rating: IRating[]
  ratings: IRating[]
  status: null
  loading: boolean
  error: null
}
const initialState: RatingState = {
  rating: [],
  ratings: [],
  status: null,
  loading: true,
  error: null,
}
const ratingSlice = createSlice({
  name: "rating",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(HYDRATE, (state, action: any) => {
        state.ratings = action.payload.rating.ratings
        state.loading = false
      })
      .addCase(addRating.fulfilled, (state, action) => {
        state.rating = action.payload.data
      })
      .addCase(updateRating.fulfilled, (state, action) => {
        state.rating = action.payload.data
      })
      .addCase(getRating.fulfilled, (state, action) => {
        state.rating = action.payload.data
        state.loading = false
      }),
})

export default ratingSlice.reducer
