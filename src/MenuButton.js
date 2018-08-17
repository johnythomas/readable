import React, { Fragment } from "react"
import { Tooltip, IconButton, Menu, MenuItem } from "@material-ui/core"
import FilterListIcon from "@material-ui/icons/FilterList"

const options = ["None", "Ascending", "Descending"]

const ITEM_HEIGHT = 48

class MenuButton extends React.Component {
  state = {
    anchorEl: null
  }

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget })
  }

  handleClose = () => {
    this.setState({ anchorEl: null })
  }

  render() {
    const { anchorEl } = this.state

    return (
      <Fragment>
        <Tooltip title="sort" placement="top">
          <IconButton
            aria-label="More"
            aria-owns={anchorEl ? "long-menu" : null}
            aria-haspopup="true"
            onClick={this.handleClick}
          >
            <FilterListIcon />
          </IconButton>
        </Tooltip>
        <Menu
          id="long-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
          PaperProps={{
            style: {
              maxHeight: ITEM_HEIGHT * 4.5,
              width: 200
            }
          }}
        >
          {options.map(option => (
            <MenuItem
              key={option}
              selected={option === "Ascending"}
              onClick={this.handleClose}
            >
              {option}
            </MenuItem>
          ))}
        </Menu>
      </Fragment>
    )
  }
}

export default MenuButton
