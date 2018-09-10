import React, { Component } from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import ListPostsPage from "./ListPostPage"
import PostDetails from "./PostDetails"
import AddPost from "./AddPost"
import NotFound from "./NotFound"

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={ListPostsPage} />
          <Route path="/post/:id" component={PostDetails} />
          <Route path="/addPost" component={AddPost} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    )
  }
}

export default App
