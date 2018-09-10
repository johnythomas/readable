import { normalize } from "normalizr"
import * as API from "../utils/api"
import { RECEIVE_POST_DETAILS } from "../constants/types"
import Comment from "../schemas/Comment"

export const receiveComment = (post, comments) => ({
  type: RECEIVE_POST_DETAILS,
  post,
  comments
})

export const fetchPostDetails = postId => async dispatch => {
  try {
    const postDetails = await API.getPostDetails(postId)
    dispatch(
      receiveComment(postDetails[0], normalize(postDetails[1], [Comment]))
    )
  } catch (err) {
    console.log(err)
  }
}
