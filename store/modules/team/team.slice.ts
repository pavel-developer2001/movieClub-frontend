import { createSlice } from "@reduxjs/toolkit"
import { HYDRATE } from "next-redux-wrapper"
import {
  addInvitation,
  addNewTeam,
  agreeToJoin,
  getInvitationsForUser,
  getTeam,
  getTeamsForUser,
  refucalToJoin,
  removeMember,
} from "./team.actions"
import { ITeam } from "./types/ITeam"
import { ITeamInvitationsForUser } from "./types/ITeamInvitation"
import { IMember, ITeamsForUser } from "./types/ITeamMember"

interface TeamItems {
  team: ITeam[]
  members: IMember[]
  episodes: any
}
interface TeamState {
  teams: ITeam[]
  team: TeamItems
  teamsUser: ITeamsForUser[]
  teamInvitations: ITeamInvitationsForUser[]
  status: null
  loading: boolean
  error: null
}
const initialState: TeamState = {
  teams: [],
  team: { team: [], members: [], episodes: [] },
  teamsUser: [],
  teamInvitations: [],
  status: null,
  loading: true,
  error: null,
}
const teamSlice = createSlice({
  name: "team",
  initialState,
  reducers: {},

  extraReducers: (builder) =>
    builder
      .addCase(HYDRATE, (state, action: any) => {
        state.team = action.payload.team.team
        state.loading = false
      })
      .addCase(addNewTeam.fulfilled, (state, action) => {
        state.teams.push(action.payload.data)
      })
      .addCase(getTeamsForUser.fulfilled, (state, action) => {
        state.teamsUser = action.payload.data
        state.loading = false
      })
      .addCase(getTeam.fulfilled, (state, action) => {
        state.team = action.payload.data
        state.loading = false
      })
      .addCase(getInvitationsForUser.fulfilled, (state, action) => {
        state.teamInvitations = action.payload.data
        state.loading = false
      })
      .addCase(addInvitation.fulfilled, (state, action) => {
        state.teamInvitations.push(action.payload.data)
      })
    .addCase(agreeToJoin.fulfilled, (state, action) => {
      state.team.members.push(action.payload.data.newMember);
      state.teamInvitations = state.teamInvitations.filter(
        (item) => item._id != action.payload.data.deleteInvitation._id
      );
    })
    .addCase(refucalToJoin.fulfilled, (state, action) => {
      state.teamInvitations = state.teamInvitations.filter(
        (item) => item._id != action.payload.data._id
      );
    })
    .addCase(removeMember.fulfilled, (state, action) => {
      state.team.members = state.team.members.filter(
        (item) => item._id != action.payload.data._id
      );
    }),
})

export default teamSlice.reducer
