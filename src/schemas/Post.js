import { schema } from "normalizr"

const post = new schema.Entity("posts", {}, { idAttribute: "id" })

export default post
