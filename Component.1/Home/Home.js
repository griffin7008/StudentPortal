import React, { Component } from 'react';

class Home extends Component {
    render() {
        return (
            <div>
                <h1>Welcome, {this.props.loggedInUser.email}</h1>
                <h1>Welcome, {this.props.loggedInUser.email}</h1>
                <h1>Welcome, {this.props.loggedInUser.email}</h1>
                <h1>Welcome, {this.props.loggedInUser.firstName}</h1>
                <h1>Welcome, {this.props.loggedInUser.firstName}</h1>

            </div>
        );
    }
}

export default Home;