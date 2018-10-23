const api = "http://localhost:3001"

let { token } = localStorage
if (!token) {
  token = Math.random()
    .toString(36)
    .substr(-8)
  localStorage.token = token
}

const headers = {
  Accept: "application/json",
  Authorization: token
}

export function getPosts() {
  return fetch(`${api}/posts`, { headers }).then(res => res.json())
}

export function getPostDetails(postId) {
  return Promise.all([
    fetch(`${api}/posts/${postId}`, { headers }).then(res => res.json()),
    fetch(`${api}/posts/${postId}/comments`, { headers }).then(res =>
      res.json()
    )
  ])
}

export function savePost(post) {
  return fetch(`${api}/posts`, {
    headers: {
      ...headers,
      "Content-Type": "application/json"
    },
    method: "POST",
    body: JSON.stringify(post)
  }).then(res => res.json())
}

export async function deletePost(postId) {
  const res = await fetch(`${api}/posts/${postId}`, {
    headers: {
      ...headers,
      "Content-Type": "application/json"
    },
    method: "DELETE"
  })
  return res.json()
}

export function votePost(postId, option) {
  return fetch(`${api}/posts/${postId}`, {
    headers: {
      ...headers,
      "Content-Type": "application/json"
    },
    method: "POST",
    body: JSON.stringify({
      option
    })
  }).then(res => res.json())
}
