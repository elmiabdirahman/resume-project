import React, {Component} from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import {connect} from 'react-redux';

import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute'

// import AboutPage from '../AboutPage/AboutPage';
import UserPage from '../UserPage/UserPage';
import SecretsPage from '../SecretsPage/SecretsPage';
import homePage from '../homePage/homePage';
import PhotosPage from '../PhotosPage/PhotosPage';
import aboutPage from '../AboutPage/AboutPage';
import MySkills from '../MySkills/MySkills';

import './App.css';

class App extends Component {
  componentDidMount () {
    this.props.dispatch({type: 'FETCH_USER'})
  }

  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Switch>
            {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
            <Redirect exact from="/" to="/homepage" />
            {/* Visiting localhost:3000/about will show the about page.
            This is a route anyone can see, no login necessary */}
            <Route
              exact
              path="/homepage"
              component={homePage}
            />
            <Route
              exact
              path="/about"
              component={aboutPage}
            />
            <Route
              exact
              path="/skills"
              component={MySkills}
            />
            <Route
              exact
              path="/photos"
              component={PhotosPage}
            />
            {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/home will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the 'Login' or 'Register' page.
            Even though it seems like they are different pages, the user is always on localhost:3000/home */}
            <Route
              exact
              path="/resume"
              component={homePage}
            />
            <ProtectedRoute
              exact
              path="/home"
              component={UserPage}
            />
            {/* This works the same as the other protected route, except that if the user is logged in,
            they will see the secrets page instead. */}
            <ProtectedRoute
              exact
              path="/secrets"
              component={SecretsPage}
            />
            {/* If none of the other routes matched, we will show a 404. */}
            <Route render={() => <h1>404</h1>} />
          </Switch>
          <Footer />
        </div>
      </Router>
  )}
}

export default connect()(App);