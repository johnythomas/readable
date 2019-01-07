import {
  Button,
  Grid,
  MenuItem,
  TextField,
  Theme,
  withStyles,
  WithStyles,
} from "@material-ui/core"
import * as React from "react"
import { connect } from "react-redux"
import { RouteComponentProps } from "react-router"
import { compose } from "recompose"
import * as uuidv4 from "uuid/v4"
import { addPost, editPost } from "./actions/posts"
import { VisibilityFilters } from "./actions/visibilityFilter"
import Header from "./Header"

const styles = (theme: Theme) => ({
  inputField: {
    backgroundColor: theme.palette.common.white,
    borderRadius: "3px",
    padding: "10px",
    "label + &": {
      marginTop: theme.spacing.unit * 3,
    },
  },
  inputLabel: {
    fontSize: 20,
  },
  submitBtn: {
    marginTop: theme.spacing.unit * 3,
    padding: "15px 30px",
  },
})

const authors = ["John", "Ann", "Taylor"]

interface IAddPostProps
  extends RouteComponentProps<any>,
    WithStyles<typeof styles> {
  post: any
  savePost: any
  modifyPost: any
}

interface IAddPostState {
  title: string
  body: string
  category: string
  author: string
}

class AddPost extends React.Component<IAddPostProps, IAddPostState> {
  constructor(props: IAddPostProps) {
    super(props)
    const post = props.post || {}
    this.state = {
      title: post.title || "",
      body: post.body || "",
      category: post.category || "",
      author: post.author || "",
    }
  }

  public render() {
    const { classes } = this.props
    const { title, body, category, author } = this.state
    return (
      <Grid container={true}>
        <Header />
        <Grid item={true} xs={12} md={12} lg={12} xl={12}>
          <Grid container={true} justify="center">
            <Grid item={true} sm={12} md={6} xl={6} lg={6}>
              <TextField
                label="POST TITLE"
                InputLabelProps={{
                  shrink: true,
                  className: classes.inputLabel,
                }}
                InputProps={{
                  disableUnderline: true,
                  classes: {
                    root: classes.inputField,
                  },
                }}
                value={title}
                onChange={this.handleChange("title")}
                placeholder="Enter Post Title..."
                fullWidth={true}
                margin="normal"
              />
              <TextField
                label="POST BODY"
                InputLabelProps={{
                  shrink: true,
                  className: classes.inputLabel,
                }}
                InputProps={{
                  disableUnderline: true,
                  classes: {
                    root: classes.inputField,
                  },
                }}
                value={body}
                onChange={this.handleChange("body")}
                multiline={true}
                rows={6}
                placeholder="Enter Post Body..."
                fullWidth={true}
                margin="normal"
              />
              <TextField
                fullWidth={true}
                select={true}
                label="Select Category"
                InputLabelProps={{
                  shrink: true,
                  className: classes.inputLabel,
                }}
                InputProps={{
                  disableUnderline: true,
                  classes: {
                    root: classes.inputField,
                  },
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
                fullWidth={true}
                select={true}
                label="Select Author"
                InputLabelProps={{
                  shrink: true,
                  className: classes.inputLabel,
                }}
                InputProps={{
                  disableUnderline: true,
                  classes: {
                    root: classes.inputField,
                  },
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
              <Grid container={true} item={true} xs={12} justify="flex-end">
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

  private handleChange = (name: string) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    this.setState({
      [name]: event.target.value,
    } as Pick<IAddPostState, keyof IAddPostState>)
  }

  private isFormInvalid = () => Object.values(this.state).some(val => !val)

  private handleSubmit = () => {
    const { post, savePost, modifyPost, history } = this.props
    if (post) {
      modifyPost({
        ...post,
        ...this.state,
      })
    } else {
      savePost({
        id: uuidv4(),
        timestamp: Date.now(),
        ...this.state,
      })
    }
    history.push("/")
  }
}

const mapDispatchToProps = {
  savePost: addPost,
  modifyPost: editPost,
}

const mapStateToProps = (state: any, { match }: any) => ({
  post: state.posts[match.params.id],
})

export default compose(
  withStyles(styles),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(AddPost)
