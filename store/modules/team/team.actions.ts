import { createAsyncThunk } from "@reduxjs/toolkit"
import TeamApi from "../../../services/team-api"

export const addNewTeam = createAsyncThunk(
  "team/addNewTeam",
  async (payload: {
    teamName: string
    teamSubtitle: string
    teamDescription: string
    userId: number
  }) => {
    return await TeamApi.createTeam(payload)
  }
)
export const getTeam = createAsyncThunk(
  "team/getTeam",
  async (id: string | string[] | undefined) => {
    return await TeamApi.getTeam(id)
  }
)
export const getTeamsForUser = createAsyncThunk(
  "team/getTeamsForUser",
  async (id: string) => {
    return await TeamApi.getAllTeamsForUser(id)
  }
)
export const addInvitation = createAsyncThunk(
  "team/addInvitation",
  async (payload: { rank: string; teamId: number; userId: number }) => {
    return await TeamApi.addInvitationForUser(payload)
  }
)
export const getInvitationsForUser = createAsyncThunk(
  "team/getInvitationsForUser",
  async (id: string | string[] | undefined) => {
    return await TeamApi.getAllInvitationsForUser(id)
  }
)

export const agreeToJoin = createAsyncThunk(
  "team/agreeToJoin",
  async (payload: {
    invitationId: number
    rank: string
    teamId: number
    userId: number
  }) => {
    return await TeamApi.agreeToJoinToTeam(payload)
  }
)
export const refucalToJoin = createAsyncThunk(
  "team/refucalToJoin",
  async (id: number) => {
    return await TeamApi.refucalToJoinTeam(id)
  }
)
export const removeMember = createAsyncThunk(
  "team/removeMember",
  async (id: string) => {
    return await TeamApi.deleteMemberFromTeam(id)
  }
)
