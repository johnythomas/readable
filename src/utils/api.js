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
