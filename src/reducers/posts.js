import {
  RECEIVE_POSTS,
  RECEIVE_POST_DETAILS,
  POST_ADDED
} from "../constants/types"

export default function(state = {}, action) {
  switch (action.type) {
    case RECEIVE_POSTS:
      return action.posts
    case RECEIVE_POST_DETAILS:
      return {
        ...state,
        [action.post.id]: {
          ...action.post,
          comments: [...action.comments.result]
        }
      }
    case POST_ADDED:
      return {
        ...state,
        [action.post.id]: {
          ...action.post
        }
      }
    default:
      return state
  }
}
