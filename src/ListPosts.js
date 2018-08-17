import React from "react"
import { Grid, Typography, withStyles, Paper } from "@material-ui/core"

const styles = theme => ({
  postListContainer: {
    position: "relative"
  },
  postListPaper: {
    position: "absolute",
    top: "-10vh",
    width: "100%",
    minHeight: "20vh",
    backgroundColor: theme.palette.primary.main
  }
})

const ListPosts = ({ classes }) => (
  <Grid container justify="center">
    <Grid className={classes.postListContainer} sm={8} item>
      <Paper className={classes.postListPaper}>
        <Typography variant="headline" component="h3">
          This is a sheet of paper.
        </Typography>
        <Typography component="p">
          Paper can be used to build surface or other elements for your
          application.
        </Typography>
      </Paper>
    </Grid>
  </Grid>
)

export default withStyles(styles)(ListPosts)
