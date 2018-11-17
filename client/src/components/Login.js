import React, { Component } from 'react'
import {Link} from 'react-router-dom'


class Login extends Component {
    render() {
        return (
            <div>
                <h1>Login foo</h1>
                <form>

                    <div>
                        <label htmlFor="username">UserName:</label>
                        <input type="text" name="username" />
                    </div>
                </form>
            </div>
        );
    }
}

export default Login;