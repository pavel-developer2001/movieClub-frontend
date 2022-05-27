import { createSlice } from "@reduxjs/toolkit"
import { HYDRATE } from "next-redux-wrapper"
import {
  addNewEpisode,
  getEpisodes,
  getEpisodesForMovie,
} from "./episode.actions"
import { IEpisode } from "./types/IEpisode"
import { ILastEpisode } from "./types/ILastEpisode"

interface EpisodeState {
  episodes: ILastEpisode[]
  episode: IEpisode | any
  status: null | string
  loading: boolean
  error: null
}
const initialState: EpisodeState = {
  episodes: [],
  episode: {},
  status: null,
  loading: true,
  error: null,
}
const episodeSlice = createSlice({
  name: "episode",
  initialState,
  reducers: {},

  extraReducers: (builder) =>
    builder
      .addCase(HYDRATE, (state, action: any) => {
        state.episodes = action.payload.episode.episodes
        state.loading = false
      })
      .addCase(addNewEpisode.fulfilled, (state, action) => {
        state.episodes.unshift(action.payload.data)
      })
      .addCase(getEpisodes.fulfilled, (state, action) => {
        state.episodes = action.payload.data
        state.loading = false
      })
      .addCase(getEpisodesForMovie.fulfilled, (state, action) => {
        state.episode = action.payload.data
        state.loading = false
      }),
})

export default episodeSlice.reducer
