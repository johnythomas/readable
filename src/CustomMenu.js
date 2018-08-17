import React, { Component } from "react"
import {
  withStyles,
  List,
  ListItem,
  ListItemText,
  MenuItem,
  Menu
} from "@material-ui/core"

const styles = theme => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper
  },
  lockMenu: {
    width: "100%"
  }
})

const options = ["All", "Linux", "Android"]

class CustomMenu extends Component {
  button = null

  state = {
    anchorEl: null,
    selectedIndex: 0
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
    const { anchorEl } = this.state

    return (
      <div className={classes.root}>
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
              secondary={options[this.state.selectedIndex]}
            />
          </ListItem>
        </List>
        <Menu
          id="lock-menu"
          className={classes.lockMenu}
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          {options.map((option, index) => (
            <MenuItem
              key={option}
              selected={index === this.state.selectedIndex}
              onClick={event => this.handleMenuItemClick(event, index)}
            >
              {option}
            </MenuItem>
          ))}
        </Menu>
      </div>
    )
  }
}

export default withStyles(styles)(CustomMenu)
