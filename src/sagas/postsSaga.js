import { call, put, takeEvery } from "redux-saga/effects"
import { normalize } from "normalizr"

import { FETCH_POSTS } from "../constants/types"
import { receivePosts } from "../actions/posts"
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

export default function* watchFetchPosts() {
  yield takeEvery(FETCH_POSTS, handleFetchPosts)
}
