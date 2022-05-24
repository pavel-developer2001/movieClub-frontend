import instance from "."
export default class EpisodeApi {
  static async addEpisode(payload: any) {
    return instance.post("/episode/", payload, {
      headers: {
        accept: "application/json",
        "Accept-Language": "en-US,en;q=0.8",
        "Content-Type": "multipart/form-data",
      },
    })
  }
  static async getAllEpisodes() {
    return instance.get("/episode/")
  }
  static async getAllEpisodesForMovie(id: string | string[]) {
    return instance.get("/episode/movie/" + id)
  }
}
