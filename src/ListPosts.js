import React from "react"
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

const styles = theme => ({
  post: {
    marginBottom: `${theme.spacing.unit * 4}px`
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
  }
})

const ListPosts = ({ classes }) => (
  <Grid container>
    {[1, 2, 3].map(v => (
      <Grid className={classes.post} key={v} item sm={12}>
        <Card className={classes.postCard}>
          <CardContent>
            <Grid container>
              <Grid item sm={1}>
                <ArrowDropUp className={classes.voteButton} />
                <Typography className={classes.vote}>10</Typography>
                <ArrowDropDown className={classes.voteButton} />
              </Grid>
              <Grid item sm={11}>
                <Typography variant="title" gutterBottom>
                  Post Title
                </Typography>
                <Typography className={classes.postBody} variant="body1">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Praesentium quisquam, corrupti quos animi dicta eum vitae ut.
                  Corporis, distinctio aspernatur!
                </Typography>
                <Chip className={classes.categoryChip} label="Linux" />
                <Divider />
              </Grid>
            </Grid>
          </CardContent>
          <CardActions>
            <Grid container>
              <Grid item container sm={3}>
                <Chip
                  className={classes.avatarChip}
                  avatar={<Avatar className={classes.avatar}>AN</Avatar>}
                  label="Avatar Name"
                />
              </Grid>

              <Grid className={classes.actionContainer} item container sm={3}>
                <Grid item sm={2}>
                  <ChatBubbleOutline
                    className={classes.icon}
                    color="secondary"
                  />
                </Grid>
                <Grid className={classes.comments} item sm={10}>
                  <Typography variant="body2">80 COMMENTS</Typography>
                </Grid>
              </Grid>

              <Grid className={classes.actionContainer} item container sm={3}>
                <Grid item sm={2}>
                  <Edit className={classes.icon} color="secondary" />
                </Grid>
                <Grid className={classes.comments} item sm={10}>
                  <Typography variant="body2">Edit</Typography>
                </Grid>
              </Grid>

              <Grid className={classes.actionContainer} item container sm={3}>
                <Grid item sm={2}>
                  <DeleteOutline
                    className={`${classes.icon} ${classes.deleteIcon}`}
                  />
                </Grid>
                <Grid className={classes.comments} item sm={10}>
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

export default withStyles(styles)(ListPosts)
