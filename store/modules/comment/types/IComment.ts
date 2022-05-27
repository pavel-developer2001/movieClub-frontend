import { IUser } from "../../user/types/IUser"

export interface IComment {
  _id: number
  commentText: string
  spoiler: boolean
  count_likes: number
  createdAt: string
  updatedAt: string
  movieId: number
  userId: number
  parentId: null | number
  user: IUser
}
