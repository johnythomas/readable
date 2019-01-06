import { all, call, put, takeEvery } from "redux-saga/effects"
import { normalize } from "normalizr"

import { ADD_POST, FETCH_POSTS } from "../constants/types"
import { receivePosts, postAdded } from "../actions/posts"
import * as API from "../utils/api"
import Post from "../schemas/Post"

function* handleFetchPosts() {
  try {
    const posts = yield call(API.getPosts)
    yield put(receivePosts(normalize(posts, [Post]).entities.posts))
  } catch (error) {
    console.log(error)
  }
}

function* handleAddPost(action) {
  try {
    const addedPost = yield call(API.savePost, action.post)
    put(postAdded(addedPost))
  } catch (err) {
    console.log(err)
  }
}

function* watchFetchPosts() {
  yield takeEvery(FETCH_POSTS, handleFetchPosts)
}

function* watchAddPost() {
  yield takeEvery(ADD_POST, handleAddPost)
}

export default function* watchPosts() {
  yield all([watchFetchPosts(), watchAddPost()])
}
