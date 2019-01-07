import { AppBar, Toolbar, Typography, withStyles } from "@material-ui/core"
import * as React from "react"
import { Link } from "react-router-dom"

const styles = {
  title: {
    textDecoration: "none"
  }
}

const HomeLink = (_: any, ...props: any) => <Link {...props} to="/" />

interface IHeaderProps {
  classes: any
}

const Header: React.SFC<IHeaderProps> = ({ classes }) => (
  <AppBar position="static" color="primary">
    <Toolbar>
      <Typography
        className={classes.title}
        component={HomeLink}
        variant="title"
        color="inherit"
      >
        Readable
      </Typography>
    </Toolbar>
  </AppBar>
)

export default withStyles(styles)(Header)
