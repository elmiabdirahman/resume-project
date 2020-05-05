import React, { Component } from 'react';
import { connect } from 'react-redux';
import Nav from '../Nav/Nav'
import './AboutPage.css';

class AboutPage extends Component {

  componentDidMount() {
    this.getAbouPage();
}

getAbouPage = () => {
    this.props.dispatch({ type: 'GET_ABOUT' })
}

  render() {
    return (
      <div>
        <Nav />
        <div>
          <h1>
            This about page is for anyone to read!
            Hello
          </h1>
          {/* {JSON.stringify(this.props.aboutPageReducer)} */}
          <div>
            <h1>About Me</h1>
            {this.props.aboutPageReducer.map( (item) =>
            <div>
              <h3>{item.description}</h3>
            </div>
            )}
          </div>
          <div>
            <h1>Skills</h1>
            <h4>HTML</h4><h4>CSS</h4><h4>Javascript</h4><h4>jQuery</h4><h4>Node.js</h4><h4>React.js</h4><h4>PostgreSql</h4>
          </div>
        </div>
      </div>
    );
  }
}

const putReduxStateOnProps = (reduxStore) => ({
  aboutPageReducer: reduxStore.aboutPageReducer
});

export default connect(putReduxStateOnProps)(AboutPage);
