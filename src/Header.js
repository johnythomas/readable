import React from "react"
import { AppBar, Toolbar, Typography } from "@material-ui/core"

const Header = () => (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="title" color="inherit">
          Readable
        </Typography>
      </Toolbar>
    </AppBar>
  )

export default Header
