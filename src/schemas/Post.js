import { schema } from "normalizr"
import Comment from "./Comment"

const post = new schema.Entity(
  "posts",
  { comments: [Comment] },
  { idAttribute: "id" }
)

export default post
