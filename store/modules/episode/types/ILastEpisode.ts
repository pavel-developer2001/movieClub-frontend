import { IMovie } from "../../movie/types/IMovie"

export interface ILastEpisode {
  _id: number
  url: string
  season: string
  episode: string
  createdAt: string
  updatedAt: string
  movie: IMovie
}
