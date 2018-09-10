import React, { Component } from "react"
import { connect } from "react-redux"
import {
  Avatar,
  Chip,
  Divider,
  Grid,
  Typography,
  withStyles
} from "@material-ui/core"
import {
  ArrowDropUp,
  ArrowDropDown,
  DeleteOutline,
  Edit
} from "@material-ui/icons"
import { compose } from "lodash/fp"
import Header from "./Header"
import ListComments from "./ListComments"
import { fetchPost } from "./actions/posts"

const styles = theme => ({
  post: {
    marginTop: `${theme.spacing.unit * 4}px`
  },
  voteButton: {
    fontSize: 36,
    color: "#2e3d49"
  },
  vote: {
    paddingLeft: "10px",
    fontWeight: "bold"
  },
  postBody: {
    color: "#2e3d49"
  },
  categoryChip: {
    margin: `${theme.spacing.unit * 2}px 0`,
    backgroundColor: "#e5f6fd",
    color: theme.palette.primary.main
  },
  avatar: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white
  },
  avatarChip: {
    backgroud: "none",
    color: "e5f6fd",
    margin: `${theme.spacing.unit * 2}px 0`
  },
  actionContainer: {
    margin: `${theme.spacing.unit * 2}px`
  },
  icon: {
    marginTop: "3px",
    fontSize: 20
  },
  deleteIcon: {
    color: "#f44336"
  }
})

class PostDetails extends Component {
  componentDidMount() {
    const { match, getPost } = this.props
    getPost(match.params.id)
  }

  render() {
    const { classes, post } = this.props
    return !post ? (
      <div>Loading</div>
    ) : (
      <Grid container justify="center">
        <Header />
        <Grid className={classes.post} item sm={6} md={6} lg={5} xs={12}>
          <Grid className={classes.postCard}>
            <Grid container>
              <Grid item sm={1} md={1}>
                <ArrowDropUp className={classes.voteButton} />
                <Typography className={classes.vote}>
                  {post.voteScore}
                </Typography>
                <ArrowDropDown className={classes.voteButton} />
              </Grid>
              <Grid item sm={11} md={11}>
                <Typography variant="title" gutterBottom>
                  {post.title}
                </Typography>

                <Chip
                  className={classes.avatarChip}
                  avatar={<Avatar className={classes.avatar}>AN</Avatar>}
                  label={post.author}
                />

                <Typography className={classes.postBody} variant="body1">
                  {post.body}
                </Typography>
                <Chip className={classes.categoryChip} label={post.category} />

                <Grid container>
                  <Grid
                    className={classes.actionContainer}
                    item
                    container
                    sm={3}
                    md={2}
                  >
                    <Grid item sm={2} md={3}>
                      <Edit className={classes.icon} color="secondary" />
                    </Grid>
                    <Grid item sm={10} md={9}>
                      <Typography variant="body2">Edit</Typography>
                    </Grid>
                  </Grid>

                  <Grid
                    className={classes.actionContainer}
                    item
                    container
                    sm={3}
                    md={2}
                  >
                    <Grid item sm={2} md={3}>
                      <DeleteOutline
                        className={`${classes.icon} ${classes.deleteIcon}`}
                      />
                    </Grid>
                    <Grid item sm={10} md={9}>
                      <Typography variant="body2">Delete</Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Divider />
          <ListComments />
        </Grid>
      </Grid>
    )
  }
}

const mapStateToProps = (state, { match }) => ({
  post: state.posts[match.params.id]
})

const mapDispatchToProps = {
  getPost: fetchPost
}

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withStyles(styles)
)(PostDetails)
