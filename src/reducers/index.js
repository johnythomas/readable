import { combineReducers } from "redux"
import { createSelector } from "reselect"
import posts from "./posts"
import comments from "./comments"
import { VisibilityFilters } from "../actions/visibilityFilter"

export default combineReducers({ posts, comments })

export const selectPosts = state => Object.values(state.posts)
export const selectComments = state => Object.values(state.comments)

export const selectPostComments = createSelector(
  [selectComments, (state, postId) => postId],
  (commentList, postId) =>
    commentList.filter(comment => comment.parentId === postId)
)

export const getVisiblePosts = createSelector(
  [selectPosts, (state, filter) => filter.toUpperCase()],
  (postList, filter) =>
    filter === VisibilityFilters.ALL
      ? postList
      : postList.filter(post => post.category.toUpperCase() === filter)
)
