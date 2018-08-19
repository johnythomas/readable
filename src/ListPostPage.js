import React, { Fragment } from "react"
import { Grid, withStyles } from "@material-ui/core"
import ListPostsHeader from "./ListPostHeader"
import CategoryFilter from "./CategoryFilter"
import ListPosts from "./ListPosts"

const styles = theme => ({
  root: {
    marginTop: `${theme.spacing.unit * 4}px`
  }
})

const ListPostPage = ({ classes }) => (
  <Fragment>
    <ListPostsHeader />
    <Grid className={classes.root} container justify="center">
      <Grid container item sm={6}>
        <Grid item sm={3}>
          <CategoryFilter />
        </Grid>
        <Grid item sm={9}>
          <ListPosts />
        </Grid>
      </Grid>
    </Grid>
  </Fragment>
)

export default withStyles(styles)(ListPostPage)
