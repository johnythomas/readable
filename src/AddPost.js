import React from "react"
import { Grid, Button, TextField, withStyles } from "@material-ui/core"
import Header from "./Header"

const styles = theme => ({
  inputField: {
    backgroundColor: theme.palette.common.white,
    borderRadius: "3px",
    padding: "10px",
    "label + &": {
      marginTop: theme.spacing.unit * 3
    }
  },
  inputLabel: {
    fontSize: 20
  },
  submitBtn: {
    marginTop: theme.spacing.unit * 3,
    padding: "15px 30px"
  }
})

const AddPost = ({ classes }) => (
  <Grid container>
    <Header />
    <Grid item xs={12} md={12} lg={12} xl={12}>
      <Grid container justify="center">
        <Grid item sm={12} md={6} xl={6} lg={6}>
          <TextField
            label="POST TITLE"
            InputLabelProps={{
              shrink: true,
              className: classes.inputLabel
            }}
            InputProps={{
              disableUnderline: true,
              classes: {
                root: classes.inputField
              }
            }}
            placeholder="Enter Post Title..."
            fullWidth
            margin="normal"
          />
          <TextField
            label="POST BODY"
            InputLabelProps={{
              shrink: true,
              className: classes.inputLabel
            }}
            InputProps={{
              disableUnderline: true,
              classes: {
                root: classes.inputField
              }
            }}
            multiline
            rows={6}
            placeholder="Enter Post Body..."
            fullWidth
            margin="normal"
          />
          <Grid container item xs={12} justify="flex-end">
            <Button
              variant="contained"
              color="primary"
              className={classes.submitBtn}
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  </Grid>
)

export default withStyles(styles)(AddPost)
