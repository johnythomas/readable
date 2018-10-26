import React, { Component } from "react"
import { Link } from "react-router-dom"
import {
  Grid,
  FormControl,
  InputAdornment,
  Input,
  Typography,
  withStyles
} from "@material-ui/core"
import { Search, AddComment } from "@material-ui/icons"

const styles = theme => ({
  navBarContainer: {
    backgroundColor: theme.palette.primary.main,
    height: "30vh"
  },
  searchText: {
    backgroundColor: theme.palette.common.white,
    borderRadius: "3px",
    padding: "12px"
  },
  divider: {
    margin: `${theme.spacing.unit * 4}px 0`
  },
  whiteText: {
    color: theme.palette.common.white
  },
  addPostIcon: {
    color: theme.palette.common.white,
    marginTop: "5px",
    paddingRight: "5px"
  },
  addPostLink: {
    textDecoration: "none"
  }
})

class ListPostHeader extends Component {
  state = {
    query: ""
  }

  handleQueryChange = e => {
    const { value } = e.target
    this.setState(() => ({
      query: value
    }))
  }

  render() {
    const { classes } = this.props
    return (
      <Grid
        className={classes.navBarContainer}
        container
        justify="center"
        alignItems="center"
      >
        <Grid item md={6}>
          <Grid container>
            <Grid item md={10}>
              <Typography className={classes.whiteText} variant="display1">
                Readable
              </Typography>
            </Grid>
            <Grid
              className={classes.addPostLink}
              component={Link}
              to="/addPost"
              item
              md={2}
              container
              justify="flex-end"
              alignItems="flex-end"
            >
              <Grid
                className={classes.addPostIcon}
                container
                item
                md={6}
                justify="flex-end"
              >
                <AddComment />
              </Grid>
              <Grid item md={6}>
                <Typography className={classes.whiteText} variant="title">
                  Post
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid container className={classes.divider}>
            <Grid item md={12}>
              <FormControl fullWidth>
                <Input
                  className={classes.searchText}
                  value={this.state.query}
                  startAdornment={
                    <InputAdornment position="start">
                      <Search color="primary" />
                    </InputAdornment>
                  }
                  disableUnderline
                  placeholder="Search for your post..."
                  onChange={this.handleQueryChange}
                />
              </FormControl>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    )
  }
}

export default withStyles(styles)(ListPostHeader)
