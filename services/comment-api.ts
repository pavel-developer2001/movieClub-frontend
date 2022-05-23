import instance from "."
export default class CommentApi {
  static async getAllCommentsForMovie(id: string | string[]) {
    return instance.get("/comment/" + id)
  }
  static async addCommentForMovie(payload: {
    commentText: string
    movieId: string | string[] | undefined
    spoiler: boolean
  }) {
    return instance.post("/comment/", payload)
  }
}
