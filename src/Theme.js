import { createMuiTheme } from "@material-ui/core/styles"

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#607D8B",
      light: "#CFD8DC",
      dark: "#455A64",
      contrastText: "#FFFFFF"
    },
    secondary: {
      main: "#00BCD4"
    },
    background: {
      default: "#CFD8DC"
    }
  }
})

export default theme
