import { normalize } from "normalizr"
import Post from "../schemas/Post"
import { RECEIVE_POSTS, POST_ADDED } from "../constants/types"
import * as API from "../utils/api"

export const receivePosts = posts => ({
  type: RECEIVE_POSTS,
  posts
})

export const postAdded = post => ({
  type: POST_ADDED,
  post
})

export const fetchPosts = () => async dispatch => {
  try {
    const posts = await API.getPosts()
    dispatch(receivePosts(normalize(posts, [Post]).entities.posts))
  } catch (err) {
    console.log(err)
  }
}

export const addPost = post => async dispatch => {
  try {
    const addedPost = await API.savePost(post)
    dispatch(postAdded(addedPost))
  } catch (err) {
    console.log(err)
  }
}
