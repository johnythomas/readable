import React from "react"
import { withStyles } from "@material-ui/core/styles"
import NavBar from "./Navbar"
import "./App.css"
import ListPostsPage from "./ListPostPage"

const styles = theme => ({
  container: {}
})

const App = ({ classes }) => (
  <div className={classes.container}>
    <NavBar />
    <ListPostsPage />
  </div>
)

export default withStyles(styles)(App)
