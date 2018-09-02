import { RECEIVE_POSTS } from "../constants/types"

export default function(state = {}, action) {
  switch (action.type) {
    case RECEIVE_POSTS:
      return action.posts
    default:
      return state
  }
}
