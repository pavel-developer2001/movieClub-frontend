import * as userActions from "./modules/user/user.actions"
import * as movieActions from "./modules/movie/movie.actions"
import * as ratingActions from "./modules/rating/rating.actions"
import * as commentActions from "./modules/comment/comment.actions"

export const allActions = {
  ...userActions,
  ...movieActions,
  ...ratingActions,
  ...commentActions,
}
