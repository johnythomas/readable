import React from "react"
import { Grid, withStyles } from "@material-ui/core"
import ListPosts from "./ListPosts"
import MenuButton from "./MenuButton"
import CustomMenu from "./CustomMenu"

const styles = theme => ({
  category: {
    backgroundColor: theme.palette.secondary.main,
    height: "30vh"
  },
  formControl: {
    width: "80%"
  }
})

const ListPostPage = ({ classes }) => (
  <Grid container>
    <Grid className={classes.category} container justify="center">
      <Grid container justify="center" className={classes.category}>
        <Grid item sm={6}>
          <CustomMenu />
        </Grid>
        <Grid item sm={1}>
          <MenuButton />
        </Grid>
      </Grid>
    </Grid>
    <ListPosts />
  </Grid>
)

export default withStyles(styles)(ListPostPage)
