import {
  RECEIVE_POSTS,
  RECEIVE_POST_DETAILS,
  POST_ADDED,
  VOTE_ADDED
} from "../constants/types"
import Vote from "../constants/Vote"

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
    case VOTE_ADDED: {
      const post = state[action.postId]
      return {
        ...state,
        [action.postId]: {
          ...post,
          voteScore:
            action.option === Vote.UPVOTE
              ? post.voteScore + 1
              : post.voteScore - 1
        }
      }
    }
    default:
      return state
  }
}
