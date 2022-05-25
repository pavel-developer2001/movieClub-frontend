import { RootState } from "../../reducer"
import { ITeam } from "./types/ITeam"
import { ITeamInvitationsForUser } from "./types/ITeamInvitation"
import { ITeamsForUser } from "./types/ITeamMember"

export const selectTeam = (state: RootState) => state.team

export const selectTeamsData = (state: RootState): ITeam[] =>
  selectTeam(state).teams

export const selectTeamLoading = (state: RootState): boolean =>
  selectTeam(state).loading

export const selectTeamsUserData = (state: RootState): ITeamsForUser[] =>
  selectTeam(state).teamsUser

export const selectTeamInvitationsData = (
  state: RootState
): ITeamInvitationsForUser[] => selectTeam(state).teamInvitations

export const selectTeamItemData = (state: RootState): any =>
  selectTeam(state).team
