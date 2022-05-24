import { RootState } from "../../reducer"

export const selectEpisode = (state: RootState) => state.episode

export const selectEpisodeData = (state: RootState): any =>
  selectEpisode(state).episode

export const selectEpisodes = (state: RootState): any =>
  selectEpisode(state).episodes

export const selectEpisodeLoading = (state: RootState): boolean =>
  selectEpisode(state).loading
