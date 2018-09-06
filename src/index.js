import React from "react"
import ReactDOM from "react-dom"
import { createStore } from "redux"
import { Provider } from "react-redux"
import { MuiThemeProvider, CssBaseline } from "@material-ui/core"
import middlewares from "./middlewares"
import reducers from "./reducers"
import App from "./App"
import theme from "./Theme"
import registerServiceWorker from "./registerServiceWorker"
import "typeface-roboto"
import "./index.css"

const store = createStore(reducers, middlewares)

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
