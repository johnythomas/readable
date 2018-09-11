import React, { Fragment } from "react"
import { connect } from "react-redux"
import { compose } from "lodash/fp"
import { Avatar, Chip, Grid, Typography, withStyles } from "@material-ui/core"
import {
  ArrowDropDown,
  ArrowDropUp,
  DeleteOutline,
  Edit
} from "@material-ui/icons"
import { selectPostComments } from "./reducers"

const styles = theme => ({
  comments: {
    margin: `${theme.spacing.unit * 2}px`
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
  avatar: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white
  },
  avatarChip: {
    backgroud: "none",
    color: "e5f6fd"
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

const ListComments = ({ classes, comments }) => (
  <Fragment>
    <Typography variant="subheading" gutterBottom>
      {comments.length} COMMENTS
    </Typography>
    {comments.map(comment => (
      <Grid
        key={comment.id}
        container
        item
        sm={12}
        className={classes.comments}
      >
        <Grid item sm={1} md={1}>
          <ArrowDropUp className={classes.voteButton} />
          <Typography className={classes.vote}>{comment.voteScore}</Typography>
          <ArrowDropDown className={classes.voteButton} />
        </Grid>
        <Grid item sm={11} md={11}>
          <Typography className={classes.postBody} variant="body1">
            {comment.body}
          </Typography>

          <Grid container>
            <Grid
              className={classes.actionContainer}
              item
              container
              sm={3}
              md={3}
            >
              <Chip
                className={classes.avatarChip}
                avatar={<Avatar className={classes.avatar}>AN</Avatar>}
                label={comment.author}
              />
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
    ))}
  </Fragment>
)

const mapStateToProps = (state, { postId }) => ({
  comments: selectPostComments(state, postId)
})

export default compose(
  withStyles(styles),
  connect(mapStateToProps)
)(ListComments)
