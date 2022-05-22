import { IUser } from "./types/IUser"
import { RootState } from "../../reducer"

export const selectUser = (state: RootState) => state.user

export const selectIsAuth = (state: RootState): boolean =>
  selectUser(state).isAuth

export const selectUserData = (state: RootState): IUser =>
  selectUser(state).user as IUser

export const selectUserLoading = (state: RootState): boolean =>
  selectUser(state).loading
