import { Grid, Typography } from "@material-ui/core"
import * as React from "react"
import Header from "./Header"

const NotFound: React.SFC = () => (
  <Grid>
    <Header />
    <Typography>404 Page Not found...</Typography>
  </Grid>
)

export default NotFound
