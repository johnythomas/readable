import React, { Component, Fragment } from "react"
import { Grid, withStyles } from "@material-ui/core"
import { connect } from "react-redux"
import { compose } from "lodash/fp"
import ListPostsHeader from "./ListPostHeader"
import CategoryFilter from "./CategoryFilter"
import ListPosts from "./ListPosts"
import { fetchPosts } from "./actions/posts"

const styles = theme => ({
  root: {
    marginTop: `${theme.spacing.unit * 4}px`
  }
})

class ListPostPage extends Component {
  componentDidMount() {
    const { getPosts } = this.props
    getPosts()
  }

  render() {
    const { classes } = this.props
    return (
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
  }
}

const mapDispatchToProps = {
  getPosts: fetchPosts
}

export default compose(
  withStyles(styles),
  connect(
    null,
    mapDispatchToProps
  )
)(ListPostPage)
