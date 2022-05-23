import instance from "."

export default class RatingApi {
  static async addRatingForMovie(payload: {
    rating: number | null
    movieId: string | string[] | undefined
  }) {
    return instance.post("/rating/", payload)
  }
  static async updateRatingForMovie(payload: {
    rating: number | null
    movieId: string | string[] | undefined
  }) {
    return instance.patch("/rating/", payload)
  }
  static async getRatingForMovie(id: string | string[] | undefined) {
    return instance.get("/rating/" + id)
  }
}
