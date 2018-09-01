import React from "react"
import { Link } from "react-router-dom"
import { AppBar, Toolbar, Typography, withStyles } from "@material-ui/core"

const styles = {
  title: {
    textDecoration: "none"
  }
}

const Header = ({ classes }) => (
  <AppBar position="static" color="primary">
    <Toolbar>
      <Typography
        className={classes.title}
        component={Link}
        to="/"
        variant="title"
        color="inherit"
      >
        Readable
      </Typography>
    </Toolbar>
  </AppBar>
)

export default withStyles(styles)(Header)
