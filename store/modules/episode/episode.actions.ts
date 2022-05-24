import { createAsyncThunk } from "@reduxjs/toolkit"
import EpisodeApi from "../../../services/episode-api"

export const addNewEpisode = createAsyncThunk(
  "episode/addNewEpisode",
  async (payload) => {
    return await EpisodeApi.addEpisode(payload)
  }
)
export const getEpisodes = createAsyncThunk("episode/getEpisodes", async () => {
  return await EpisodeApi.getAllEpisodes()
})
export const getEpisodesForMovie = createAsyncThunk(
  "episode/getEpisodesForMovie",
  async (id: string | string[]) => {
    return await EpisodeApi.getAllEpisodesForMovie(id)
  }
)
