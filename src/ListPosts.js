import React from "react"
import { connect } from "react-redux"
import { Link, withRouter } from "react-router-dom"
import { compose } from "lodash/fp"
import {
  Avatar,
  Chip,
  CardActions,
  Divider,
  Grid,
  Typography,
  Card,
  CardContent,
  withStyles
} from "@material-ui/core"
import {
  ArrowDropUp,
  ArrowDropDown,
  ChatBubbleOutline,
  DeleteOutline,
  Edit
} from "@material-ui/icons"
import { getVisiblePosts } from "./reducers"
import { VisibilityFilters } from "./actions/visibilityFilter"
import { votePost, deletePost } from "./actions/posts"
import Vote from "./constants/Vote"

const styles = theme => ({
  post: {
    marginBottom: `${theme.spacing.unit * 4}px`
  },
  title: {
    textDecoration: "none"
  },
  voteButton: {
    fontSize: 36,
    color: "#2e3d49",
    cursor: "pointer"
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
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.common.white
  },
  actionContainer: {
    marginTop: "5px"
  },
  icon: {
    marginTop: "3px",
    fontSize: 20
  },
  deleteIcon: {
    color: "#f44336"
  },
  actionText: {
    cursor: "pointer"
  }
})

const ListPosts = ({ classes, posts, castVote, removePost }) => {
  const handleVoteClick = (postId, option) => () => castVote(postId, option)
  return (
    <Grid container>
      {posts.map(post => (
        <Grid className={classes.post} key={post.id} item sm={12}>
          <Card className={classes.postCard}>
            <CardContent>
              <Grid container>
                <Grid item sm={1} md={1}>
                  <ArrowDropUp
                    className={classes.voteButton}
                    onClick={handleVoteClick(post.id, Vote.UPVOTE)}
                  />
                  <Typography className={classes.vote}>
                    {post.voteScore}
                  </Typography>
                  <ArrowDropDown
                    className={classes.voteButton}
                    onClick={handleVoteClick(post.id, Vote.DOWNVOTE)}
                  />
                </Grid>
                <Grid item sm={11} md={11}>
                  <Typography
                    className={classes.title}
                    variant="title"
                    component={Link}
                    to={`post/${post.id}`}
                    gutterBottom
                  >
                    {post.title}
                  </Typography>
                  <Typography className={classes.postBody} variant="body1">
                    {post.body}
                  </Typography>
                  <Chip
                    className={classes.categoryChip}
                    label={post.category}
                  />
                  <Divider />
                </Grid>
              </Grid>
            </CardContent>
            <CardActions>
              <Grid container>
                <Grid item container sm={3} md={4}>
                  <Chip
                    className={classes.avatarChip}
                    avatar={<Avatar className={classes.avatar}>AN</Avatar>}
                    label={post.author}
                  />
                </Grid>

                <Grid
                  className={classes.actionContainer}
                  item
                  container
                  sm={3}
                  md={3}
                >
                  <Grid item sm={2} md={2}>
                    <ChatBubbleOutline
                      className={classes.icon}
                      color="secondary"
                    />
                  </Grid>
                  <Grid className={classes.actionText} item sm={10}>
                    <Typography variant="body2">
                      {post.commentCount} COMMENTS
                    </Typography>
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
                    <Edit className={classes.icon} color="secondary" />
                  </Grid>
                  <Grid className={classes.actionText} item sm={10} md={9}>
                    <Typography variant="body2">Edit</Typography>
                  </Grid>
                </Grid>

                <Grid
                  className={classes.actionContainer}
                  onClick={() => removePost(post.id)}
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
                  <Grid className={classes.actionText} item sm={10} md={9}>
                    <Typography variant="body2">Delete</Typography>
                  </Grid>
                </Grid>
              </Grid>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  )
}

const mapStateToProps = (state, { match }) => ({
  posts: getVisiblePosts(state, match.params.category || VisibilityFilters.ALL)
})

const mapDispatchToProps = {
  castVote: votePost,
  removePost: deletePost
}

export default compose(
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withStyles(styles)
)(ListPosts)
