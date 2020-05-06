import React, { Component } from 'react';
import { connect } from 'react-redux';
import SocialFollow from "./SocialFollow"
import {withStyles} from '@material-ui/core/styles';

import './homePage.css';

import Hompage from './image23.jpg';

const styles = {
    image: {
        marginTop: '100%'
      }
};


class homePage extends Component {

    componentDidMount() {
        this.getHomePage();
    }

    getHomePage = () => {
        this.props.dispatch({ type: 'GET_HOME' })
    }
    
    render() {
        return (
            <div>
                <h1>Homeeee</h1>
                {JSON.stringify(this.props.homePageReducer)}
                <div>
                    {this.props.homePageReducer.map( (item) => 
                    <div key= {item.id}>
                        <div>
                            <h2>{item.description}</h2>
                            <h2>{item.title}</h2>
                        </div>
                    </div>
                    )}
                </div>
                <div className='image'>
                    <img src={Hompage} alt="Elmi" style={{margin: '0 auto', padding: '1rem', borderRadius:500/2, width:120, height:120,}} />
                </div>
                <div>
                    <SocialFollow />
                </div>
            </div>
        );
    }
}
const putReduxStateOnProps = (reduxStore) => ({
    homePageReducer: reduxStore.homePageReducer
});

export default connect(putReduxStateOnProps) (withStyles(styles) (homePage));