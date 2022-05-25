import * as userActions from "./modules/user/user.actions"
import * as movieActions from "./modules/movie/movie.actions"
import * as ratingActions from "./modules/rating/rating.actions"
import * as commentActions from "./modules/comment/comment.actions"
import * as bookmarkActions from "./modules/bookmark/bookmark.actions"
import * as episodeActions from "./modules/episode/episode.actions"
import * as teamActions from "./modules/team/team.actions"

export const allActions = {
  ...userActions,
  ...movieActions,
  ...ratingActions,
  ...commentActions,
  ...bookmarkActions,
  ...episodeActions,
  ...teamActions,
}
