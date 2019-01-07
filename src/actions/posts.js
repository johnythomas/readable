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
  posts,
  type: RECEIVE_POSTS
})

export const fetchPostDetails = postId => ({
  postId,
  type: FETCH_POST_DETAILS
})

export const receivePostDetails = (post, comments) => ({
  comments,
  post,
  type: RECEIVE_POST_DETAILS
})

export const addPost = post => ({
  post,
  type: ADD_POST
})

export const postAdded = post => ({
  post,
  type: POST_ADDED
})

export const editPost = post => ({
  post,
  type: EDIT_POST
})

export const postEdited = post => ({
  post,
  type: POST_EDITED
})

export const deletePost = postId => ({
  postId,
  type: DELETE_POST
})

export const postDeleted = postId => ({
  postId,
  type: POST_DELETED
})

export const votePost = (postId, option) => ({
  option,
  postId,
  type: VOTE_POST
})

export const voteAdded = (postId, option) => ({
  option,
  postId,
  type: VOTE_ADDED
})
