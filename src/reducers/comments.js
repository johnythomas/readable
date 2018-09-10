import { RECEIVE_POST_DETAILS } from "../constants/types"

export default function comments(state = {}, action) {
  switch (action.type) {
    case RECEIVE_POST_DETAILS:
      return {
        ...state,
        ...action.comments.entities.comments
      }
    default:
      return state
  }
}
