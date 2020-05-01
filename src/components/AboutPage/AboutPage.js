import React, { Component } from 'react';
import Nav from '../Nav/Nav'
import './AboutPage.css';

class AboutPage extends Component {
  render() {
    return (
      <div>
        <Nav />
        <div>
          <header>
            This about page is for anyone to read!
            Hello
          </header>
        </div>
      </div>
    );
  }
}

export default AboutPage;
