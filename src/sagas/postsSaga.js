import { all, call, put, takeEvery } from "redux-saga/effects"
import { normalize } from "normalizr"

import {
  ADD_POST,
  FETCH_POSTS,
  EDIT_POST,
  DELETE_POST,
  VOTE_POST,
  FETCH_POST_DETAILS
} from "../constants/types"
import {
  receivePosts,
  postAdded,
  postEdited,
  postDeleted,
  voteAdded,
  receivePostDetails
} from "../actions/posts"
import * as API from "../utils/api"
import Comment from "../schemas/Comment"
import Post from "../schemas/Post"

function* handleFetchPosts() {
  try {
    const posts = yield call(API.getPosts)
    yield put(receivePosts(normalize(posts, [Post]).entities.posts))
  } catch (error) {
    console.log(error)
  }
}

function* handleAddPost({ post }) {
  try {
    const addedPost = yield call(API.savePost, post)
    yield put(postAdded(addedPost))
  } catch (err) {
    console.log(err)
  }
}

function* handleEditPost({ post }) {
  try {
    const editedPost = yield call(API.editPost, post)
    yield put(postEdited(editedPost))
  } catch (err) {
    console.log(err)
  }
}

function* handleDeletePost({ postId }) {
  try {
    yield call(API.deletePost, postId)
    yield put(postDeleted(postId))
  } catch (err) {
    console.log(err)
  }
}

function* handleVotePost({ postId, option }) {
  try {
    const post = yield call(API.votePost, postId, option)
    yield put(voteAdded(post.id, option))
  } catch (err) {
    console.log(err)
  }
}

function* handleFetchPostDetails({ postId }) {
  try {
    const postDetails = yield call(API.getPostDetails, postId)
    yield put(
      receivePostDetails(postDetails[0], normalize(postDetails[1], [Comment]))
    )
  } catch (err) {
    console.log(err)
  }
}

function* watchFetchPosts() {
  yield takeEvery(FETCH_POSTS, handleFetchPosts)
}

function* watchFetchPostDetails() {
  yield takeEvery(FETCH_POST_DETAILS, handleFetchPostDetails)
}

function* watchAddPost() {
  yield takeEvery(ADD_POST, handleAddPost)
}

function* watchEditPost() {
  yield takeEvery(EDIT_POST, handleEditPost)
}

function* watchDeletePost() {
  yield takeEvery(DELETE_POST, handleDeletePost)
}

function* watchVotePost() {
  yield takeEvery(VOTE_POST, handleVotePost)
}

export default function* watchPosts() {
  yield all([
    watchFetchPosts(),
    watchFetchPostDetails(),
    watchAddPost(),
    watchEditPost(),
    watchDeletePost(),
    watchVotePost()
  ])
}
