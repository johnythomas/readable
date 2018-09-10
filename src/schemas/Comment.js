import { schema } from "normalizr"

const comment = new schema.Entity("comments", {}, { idAttribute: "id" })

export default comment
