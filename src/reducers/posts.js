import { RECEIVE_POSTS, RECEIVE_POST } from "../constants/types"

export default function(state = {}, action) {
  switch (action.type) {
    case RECEIVE_POSTS:
      return action.posts
    case RECEIVE_POST:
      return {
        ...state,
        [action.post.id]: { ...action.post }
      }
    default:
      return state
  }
}
