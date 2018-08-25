import React from "react"
import { Route, Switch } from "react-router-dom"
import ListPostsPage from "./ListPostPage"
import PostDetails from "./PostDetails"

const App = () => (
  <Switch>
    <Route exact path="/" component={ListPostsPage} />
    <Route path="/post/:id" component={PostDetails} />
  </Switch>
)

export default App
