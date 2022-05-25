import { ITeam } from "./ITeam";

export interface ITeamInvitationsForUser {
    _id: number;
    rank: string;
    createdAt: string;
    updatedAt: string;
    teamId: number;
    userId: number;
    team: ITeam;
  }