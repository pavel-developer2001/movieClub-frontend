import instance from "."
export default class MovieApi {
  static async createMovie(payload: any) {
    return instance.post("/movie/", payload, {
      headers: {
        accept: "application/json",
        "Accept-Language": "en-US,en;q=0.8",
        "Content-Type": "multipart/form-data",
      },
    })
  }
  static async getAllMovie() {
    return instance.get("/movie/")
  }
  static async getMovie(id: string | string[] | undefined) {
    return instance.get("/movie/" + id)
  }
}
