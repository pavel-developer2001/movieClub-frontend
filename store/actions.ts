import * as userActions from "./modules/user/user.actions"
import * as movieActions from "./modules/movie/movie.actions"

export const allActions = {
  ...userActions,
  ...movieActions,
}
