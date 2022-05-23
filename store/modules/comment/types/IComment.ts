import { IUser } from "../../user/types/IUser"

export interface IComment {
  _id: number
  commentText: string
  spoiler: boolean
  countLikes: number
  createdAt: string
  updatedAt: string
  movieId: number
  userId: number
  parendId: null | string
  user: IUser
}
