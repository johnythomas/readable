import {
  FETCH_POSTS,
  RECEIVE_POSTS,
  POST_ADDED,
  VOTE_ADDED,
  POST_DELETED,
  POST_EDITED,
  ADD_POST
} from "../constants/types"
import * as API from "../utils/api"

export const fetchPosts = () => ({
  type: FETCH_POSTS
})

export const receivePosts = posts => ({
  type: RECEIVE_POSTS,
  posts
})

export const addPost = post => ({
  type: ADD_POST,
  post
})

export const postAdded = post => ({
  type: POST_ADDED,
  post
})

export const postEdited = post => ({
  type: POST_EDITED,
  post
})

export const postDeleted = postId => ({
  type: POST_DELETED,
  postId
})

export const voteAdded = (postId, option) => ({
  type: VOTE_ADDED,
  postId,
  option
})

export const editPost = post => async dispatch => {
  try {
    const editedPost = await API.editPost(post)
    dispatch(postEdited(editedPost))
  } catch (err) {
    console.log(err)
  }
}

export const deletePost = postId => async dispatch => {
  try {
    await API.deletePost(postId)
    dispatch(postDeleted(postId))
  } catch (err) {
    console.log(err)
  }
}

export const votePost = (postId, option) => async dispatch => {
  try {
    const post = await API.votePost(postId, option)
    dispatch(voteAdded(post.id, option))
  } catch (err) {
    console.log(err)
  }
}
