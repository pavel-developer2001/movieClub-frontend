import * as userActions from "./modules/user/user.actions"
import * as movieActions from "./modules/movie/movie.actions"
import * as ratingActions from "./modules/rating/rating.actions"
import * as commentActions from "./modules/comment/comment.actions"
import * as bookmarkActions from "./modules/bookmark/bookmark.actions"

export const allActions = {
  ...userActions,
  ...movieActions,
  ...ratingActions,
  ...commentActions,
  ...bookmarkActions,
}
