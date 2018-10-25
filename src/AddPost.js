import React, { Component } from "react"
import { connect } from "react-redux"
import {
  Grid,
  Button,
  TextField,
  MenuItem,
  withStyles
} from "@material-ui/core"
import { compose } from "recompose"
import uuidv4 from "uuid/v4"
import Header from "./Header"
import { VisibilityFilters } from "./actions/visibilityFilter"
import { addPost, editPost } from "./actions/posts"

const styles = theme => ({
  inputField: {
    backgroundColor: theme.palette.common.white,
    borderRadius: "3px",
    padding: "10px",
    "label + &": {
      marginTop: theme.spacing.unit * 3
    }
  },
  inputLabel: {
    fontSize: 20
  },
  submitBtn: {
    marginTop: theme.spacing.unit * 3,
    padding: "15px 30px"
  }
})

const authors = ["John", "Ann", "Taylor"]

class AddPost extends Component {
  constructor(props) {
    super(props)
    const post = props.post || {}
    this.state = {
      title: post.title || "",
      body: post.body || "",
      category: post.category || "",
      author: post.author || ""
    }
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    })
  }

  isFormInvalid = () => Object.values(this.state).some(val => !val)

  handleSubmit = () => {
    const { post, savePost, modifyPost, history } = this.props
    if (post) {
      modifyPost({
        ...post,
        ...this.state
      })
    } else {
      savePost({
        id: uuidv4(),
        timestamp: Date.now(),
        ...this.state
      })
    }
    history.push("/")
  }

  render() {
    const { classes } = this.props
    const { title, body, category, author } = this.state
    return (
      <Grid container>
        <Header />
        <Grid item xs={12} md={12} lg={12} xl={12}>
          <Grid container justify="center">
            <Grid item sm={12} md={6} xl={6} lg={6}>
              <TextField
                label="POST TITLE"
                InputLabelProps={{
                  shrink: true,
                  className: classes.inputLabel
                }}
                InputProps={{
                  disableUnderline: true,
                  classes: {
                    root: classes.inputField
                  }
                }}
                value={title}
                onChange={this.handleChange("title")}
                placeholder="Enter Post Title..."
                fullWidth
                margin="normal"
              />
              <TextField
                label="POST BODY"
                InputLabelProps={{
                  shrink: true,
                  className: classes.inputLabel
                }}
                InputProps={{
                  disableUnderline: true,
                  classes: {
                    root: classes.inputField
                  }
                }}
                value={body}
                onChange={this.handleChange("body")}
                multiline
                rows={6}
                placeholder="Enter Post Body..."
                fullWidth
                margin="normal"
              />
              <TextField
                fullWidth
                select
                label="Select Category"
                InputLabelProps={{
                  shrink: true,
                  className: classes.inputLabel
                }}
                InputProps={{
                  disableUnderline: true,
                  classes: {
                    root: classes.inputField
                  }
                }}
                value={category}
                onChange={this.handleChange("category")}
                margin="normal"
              >
                {Object.keys(VisibilityFilters)
                  .filter(option => option !== VisibilityFilters.ALL)
                  .map(option => (
                    <MenuItem key={option} value={option}>
                      {option.toLowerCase()}
                    </MenuItem>
                  ))}
              </TextField>
              <TextField
                fullWidth
                select
                label="Select Author"
                InputLabelProps={{
                  shrink: true,
                  className: classes.inputLabel
                }}
                InputProps={{
                  disableUnderline: true,
                  classes: {
                    root: classes.inputField
                  }
                }}
                value={author}
                onChange={this.handleChange("author")}
                margin="normal"
              >
                {authors.map(option => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </TextField>
              <Grid container item xs={12} justify="flex-end">
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.submitBtn}
                  disabled={this.isFormInvalid()}
                  onClick={this.handleSubmit}
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    )
  }
}

const mapDispatchToProps = {
  savePost: addPost,
  modifyPost: editPost
}

const mapStateToProps = (state, { match }) => ({
  post: state.posts[match.params.id]
})

export default compose(
  withStyles(styles),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(AddPost)
