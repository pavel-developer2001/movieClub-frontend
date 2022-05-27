import { RootState } from "../../reducer"
import { IEpisode } from "./types/IEpisode"
import { ILastEpisode } from "./types/ILastEpisode"

export const selectEpisode = (state: RootState) => state.episode

export const selectEpisodeData = (state: RootState): IEpisode[] =>
  selectEpisode(state).episode

export const selectEpisodes = (state: RootState): ILastEpisode[] =>
  selectEpisode(state).episodes

export const selectEpisodeLoading = (state: RootState): boolean =>
  selectEpisode(state).loading
