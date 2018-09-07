import { normalize } from "normalizr"
import Post from "../schemas/Post"
import { RECEIVE_POSTS } from "../constants/types"

import * as API from "../utils/api"

export const receivePosts = posts => ({
  type: RECEIVE_POSTS,
  posts
})

export const fetchPosts = () => async dispatch => {
  try {
    const posts = await API.getPosts()
    dispatch(receivePosts(normalize(posts, [Post]).entities.posts))
  } catch (err) {
    console.log(err)
  }
}

export const fetchPost = id => async dispatch => {
  try {
    const post = await API.getPost(id)
    console.log(post)
  } catch (err) {
    console.log(err)
  }
}
