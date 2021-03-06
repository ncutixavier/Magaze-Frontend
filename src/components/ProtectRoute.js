import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

export class ProtectRoute extends Component {
    render() {
        const Component = this.props.component;
        const isAuthenticated = localStorage.getItem('token');

        return isAuthenticated ? (
            <Component />
        ) : (
            <Redirect to={{ pathname: '/login' }} />
        );
    }
}

export default ProtectRoute
