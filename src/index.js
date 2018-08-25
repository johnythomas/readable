import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter } from "react-router-dom"
import { MuiThemeProvider, CssBaseline } from "@material-ui/core"
import "./index.css"
import "typeface-roboto"
import App from "./App"
import theme from "./Theme"
import registerServiceWorker from "./registerServiceWorker"

ReactDOM.render(
  <BrowserRouter>
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </MuiThemeProvider>
  </BrowserRouter>,
  document.getElementById("root")
)
registerServiceWorker()
