import React, { Component } from 'react';
import Nav from '../Nav/Nav'

class AboutPage extends Component {
  render() {
    return (
      <div>
        <Nav />
        <div>
          <h1>
            This about page is for anyone to read!
            Hello
          </h1>
        </div>
      </div>
    );
  }
}

export default AboutPage;
