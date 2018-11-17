import React, { Component } from 'react'
import {Link} from 'react-router-dom'


class Login extends Component {
    render() {
        return (
            <div>
                <h1>Login foo</h1>
                <Link to="/movies">Movies</Link>
            </div>
        );
    }
}

export default Login;