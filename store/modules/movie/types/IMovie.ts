import { IGenre } from "./IGenre"

export interface IMovie {
  _id: number
  age: string
  country: string
  cover: string
  createdAt: string
  description: string
  englishTitle: string
  genres: IGenre[]
  munites: number
  status: null | string
  title: string
  type: string
  updatedAt: string
  year: number
}
