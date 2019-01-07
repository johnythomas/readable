import { CssBaseline, MuiThemeProvider } from "@material-ui/core"
import * as React from "react"
import * as ReactDOM from "react-dom"
import { Provider } from "react-redux"
import "typeface-roboto"
import App from "./App"
import "./index.css"
import registerServiceWorker from "./registerServiceWorker"
import configureStore from "./store"
import theme from "./Theme"

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById("root")
)
registerServiceWorker()
