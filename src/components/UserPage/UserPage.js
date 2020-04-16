import { connect } from 'react-redux';
import React, { Component } from 'react';
// import resumeNav from '../resumeNav/resumeNav';
import Nav from '../Nav/Nav';

class UserPage extends Component {
  render() {
    return (
      <div>
        <Nav />
        <h1>hello</h1>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
});

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(UserPage);
