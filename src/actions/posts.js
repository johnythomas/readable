import {
  FETCH_POSTS,
  RECEIVE_POSTS,
  POST_ADDED,
  VOTE_ADDED,
  POST_DELETED,
  POST_EDITED,
  ADD_POST,
  EDIT_POST,
  DELETE_POST,
  VOTE_POST,
  FETCH_POST_DETAILS,
  RECEIVE_POST_DETAILS
} from "../constants/types"

export const fetchPosts = () => ({
  type: FETCH_POSTS
})

export const receivePosts = posts => ({
  type: RECEIVE_POSTS,
  posts
})

export const fetchPostDetails = postId => ({
  type: FETCH_POST_DETAILS,
  postId
})

export const receivePostDetails = (post, comments) => ({
  type: RECEIVE_POST_DETAILS,
  post,
  comments
})

export const addPost = post => ({
  type: ADD_POST,
  post
})

export const postAdded = post => ({
  type: POST_ADDED,
  post
})

export const editPost = post => ({
  type: EDIT_POST,
  post
})

export const postEdited = post => ({
  type: POST_EDITED,
  post
})

export const deletePost = postId => ({
  type: DELETE_POST,
  postId
})

export const postDeleted = postId => ({
  type: POST_DELETED,
  postId
})

export const votePost = (postId, option) => ({
  type: VOTE_POST,
  postId,
  option
})

export const voteAdded = (postId, option) => ({
  type: VOTE_ADDED,
  postId,
  option
})
