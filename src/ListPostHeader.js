import React from "react"
import {
  Grid,
  FormControl,
  InputAdornment,
  Input,
  Typography,
  withStyles
} from "@material-ui/core"
import { Search, Create } from "@material-ui/icons"

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
  }
})

const Navbar = ({ classes }) => (
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
        <Grid item md={2} container justify="flex-end" alignItems="flex-end">
          <Typography className={classes.whiteText} variant="title">
            <Create />
            Post
          </Typography>
        </Grid>
      </Grid>
      <Grid container className={classes.divider}>
        <Grid item md={12}>
          <FormControl fullWidth>
            <Input
              className={classes.searchText}
              startAdornment={
                <InputAdornment position="start">
                  <Search color="primary" />
                </InputAdornment>
              }
              disableUnderline
              placeholder="Search for your post..."
            />
          </FormControl>
        </Grid>
      </Grid>
    </Grid>
  </Grid>
)

export default withStyles(styles)(Navbar)
