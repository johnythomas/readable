import { combineReducers } from "redux"
import { createSelector } from "reselect"
import posts from "./posts"
import comments from "./comments"

export default combineReducers({ posts, comments })

export const selectComments = state => Object.values(state.comments)

export const selectPostComments = createSelector(
  selectComments,
  (state, postId) => postId,
  (commentList, postId) =>
    commentList.filter(comment => comment.parentId === postId)
)
