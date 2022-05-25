import { IUser } from "../../user/types/IUser"
import { ITeam } from "./ITeam"

export interface ITeamsForUser {
  createdAt: string
  _id: number
  roleInTeam: string
  team: ITeam
  teamId: number
  updatedAt: string
  userId: number
}
export interface IMember {
  createdAt: string
  _id: number
  roleInTeam: string
  teamId: number
  updatedAt: string
  avatar: string
  userId: number
  user: IUser
}
