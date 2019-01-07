import * as React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import AddPost from "./AddPost"
import ListPostsPage from "./ListPostPage"
import NotFound from "./NotFound"
import PostDetails from "./PostDetails"

const App: React.SFC = () => (
  <Router>
    <Switch>
      <Route path="/addPost" component={AddPost} />
      <Route path="/edit/:id" component={AddPost} />
      <Route path="/post/:id" component={PostDetails} />
      <Route exact={true} path="/:category?" component={ListPostsPage} />
      <Route component={NotFound} />
    </Switch>
  </Router>
)

export default App
