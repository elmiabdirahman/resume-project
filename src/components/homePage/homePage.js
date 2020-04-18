import React, { Component } from 'react';
import { connect } from 'react-redux';

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
                        <di>
                            <h2>{item.description}</h2>
                            <h2>{item.title}</h2>
                            <img src={item.url} alt={item.url} />
                        </di>
                    </div>
                    )}
                </div>
            </div>
        );
    }
}
const putReduxStateOnProps = (reduxStore) => ({
    homePageReducer: reduxStore.homePageReducer
});

export default connect(putReduxStateOnProps) (homePage);