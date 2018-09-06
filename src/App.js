import React, { Component } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import ListPostsPage from "./ListPostPage"
import PostDetails from "./PostDetails"
import AddPost from "./AddPost"
import NotFound from "./NotFound"
import { fetchPosts } from "./actions/posts"

class App extends Component {
  static propTypes = {
    getPosts: PropTypes.func.isRequired
  }

  componentDidMount() {
    const { getPosts } = this.props
    getPosts()
  }

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

const mapDispatchToProps = {
  getPosts: fetchPosts
}

export default connect(
  null,
  mapDispatchToProps
)(App)
