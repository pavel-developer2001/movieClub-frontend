import instance from "."
export default class TeamApi {
  static async createTeam(payload: {
    teamName: string
    teamSubtitle: string
    teamDescription: string
    userId: number
  }) {
    return instance.post("/team/", payload, {
      headers: {
        accept: "application/json",
        "Accept-Language": "en-US,en;q=0.8",
        "Content-Type": "multipart/form-data",
      },
    })
  }

  static async getTeam(id: string | string[] | undefined) {
    return instance.get("/team/" + id)
  }
  static async getAllTeamsForUser(userId: string) {
    return instance.get("/team/user/" + userId)
  }

  static async addInvitationForUser(payload: {
    rank: string
    teamId: number
    userId: number
  }) {
    return instance.post("/team/invitation/", payload)
  }
  static async getAllInvitationsForUser(id: string | string[] | undefined) {
    return instance.get("/team/invitation/user/" + id)
  }
  static async agreeToJoinToTeam(payload: {
    invitationId: number
    rank: string
    teamId: number
    userId: number
  }) {
    return instance.post("/team/invitation/user/join", payload)
  }
  static async refucalToJoinTeam(id: number) {
    return instance.delete("/team/invitation/user/refusal/" + id)
  }
  static async deleteMemberFromTeam(id: string) {
    return instance.delete("/team/member/" + id)
  }
}
