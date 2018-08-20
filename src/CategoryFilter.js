import React, { Component } from "react"
import {
  Divider,
  Grid,
  Hidden,
  List,
  ListItem,
  ListItemText,
  Menu,
  MenuItem,
  Typography,
  withStyles,
  withWidth
} from "@material-ui/core"
import compose from "recompose/compose"
import { FilterList } from "@material-ui/icons"

const styles = theme => ({
  categoryContainer: {
    marginTop: `${theme.spacing.unit * 2}px`
  },
  categoryItem: {
    padding: "5px 5px 5px 10px",
    margin: "5px 0px 5px 0px",
    cursor: "pointer",
    color: "#2e3d49",
    textTransform: "capitalize",
    "&:hover": {
      borderLeft: `3px solid ${theme.palette.primary.main}`,
      color: theme.palette.primary.main,
      paddingLeft: "7px"
    }
  }
})

const options = ["All", "Linux", "Windows", "Android"]

class CategoryFilter extends Component {
  button = null

  state = {
    anchorEl: null,
    selectedIndex: 1
  }

  handleClickListItem = event => {
    this.setState({ anchorEl: event.currentTarget })
  }

  handleMenuItemClick = (event, index) => {
    this.setState({ selectedIndex: index, anchorEl: null })
  }

  handleClose = () => {
    this.setState({ anchorEl: null })
  }

  render() {
    const { classes } = this.props
    const { anchorEl, selectedIndex } = this.state

    return (
      <Grid container>
        <Hidden smUp>
          <Grid container>
            <List component="nav">
              <ListItem
                button
                aria-haspopup="true"
                aria-controls="lock-menu"
                aria-label="Category"
                onClick={this.handleClickListItem}
              >
                <ListItemText
                  primary="Category"
                  secondary={options[selectedIndex]}
                />
              </ListItem>
            </List>
            <Menu
              id="lock-menu"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={this.handleClose}
            >
              {options.map((option, index) => (
                <MenuItem
                  key={option}
                  disabled={index === 0}
                  selected={index === selectedIndex}
                  onClick={event => this.handleMenuItemClick(event, index)}
                >
                  {option}
                </MenuItem>
              ))}
            </Menu>
          </Grid>
        </Hidden>
        <Hidden smDown>
          <Grid container>
            <Typography>
              <FilterList /> FILTER BY
            </Typography>
            <Divider />
          </Grid>
          <Grid className={classes.categoryContainer} container>
            <Grid className={classes.categoryItem} item md={12}>
              ALL
            </Grid>
            <Grid className={classes.categoryItem} item sm={12}>
              Linux
            </Grid>
            <Grid className={classes.categoryItem} item sm={12}>
              Android
            </Grid>
            <Grid className={classes.categoryItem} item sm={12}>
              Windows
            </Grid>
            <Grid className={classes.categoryItem} item sm={12}>
              Mac
            </Grid>
          </Grid>
        </Hidden>
      </Grid>
    )
  }
}

export default compose(
  withStyles(styles),
  withWidth()
)(CategoryFilter)
