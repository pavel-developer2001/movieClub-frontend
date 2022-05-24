import instance from "."

export default class BookmarkApi {
  static async addBookMarkForUser(payload: {
    category: string
    movieId: number
  }) {
    return instance.post("/bookmark/", payload)
  }
  static async getAllBookMarksForUser(id: string | string[] | undefined) {
    return instance.get("/bookmark/" + id)
  }
  static async updateBookMark(payload: { category: string; movieId: number }) {
    return instance.patch(`/bookmark/`, payload)
  }
  static async getBookMarkForMovie(id: string | string[] | undefined) {
    return instance.get("/bookmark/movie/" + id)
  }
}
