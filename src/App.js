import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import ListPostsPage from "./ListPostPage"
import PostDetails from "./PostDetails"
import AddPost from "./AddPost"
import NotFound from "./NotFound"

const App = () => (
  <Router>
    <Switch>
      <Route path="/addPost" component={AddPost} />
      <Route path="/post/:id" component={PostDetails} />
      <Route exact path="/:category?" component={ListPostsPage} />
      <Route component={NotFound} />
    </Switch>
  </Router>
)

export default App
