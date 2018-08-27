import React from "react"
import { Route, Switch } from "react-router-dom"
import ListPostsPage from "./ListPostPage"
import PostDetails from "./PostDetails"
import AddPost from "./AddPost"

const App = () => (
  <Switch>
    <Route exact path="/" component={ListPostsPage} />
    <Route path="/post/:id" component={PostDetails} />
    <Route path="/addPost" component={AddPost} />
  </Switch>
)

export default App
