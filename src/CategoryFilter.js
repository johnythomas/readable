import React from "react"
import { Divider, Grid, Typography, withStyles } from "@material-ui/core"
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

const CategoryFilter = ({ classes }) => (
  <Grid container>
    <Grid container>
      <Typography>
        <FilterList /> FILTER BY
      </Typography>
      <Divider />
    </Grid>
    <Grid className={classes.categoryContainer} container>
      <Grid className={classes.categoryItem} item sm={12}>
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
  </Grid>
)

export default withStyles(styles)(CategoryFilter)
