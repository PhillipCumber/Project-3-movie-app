import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'



class Login extends Component {

    state = {

        user: [],
        newUser: {

            username: '',
            password: ''
        }
    }

    handleChange = (event) => {

        console.log('is this working bro')
        let updateUser = {...this.state.newUser}
        updateUser[event.target.name] = event.target.value
        this.setState({newUser: updateUser})
    }

    getAllUsers = () => {

        axios.get('/api/members')
                .then((res) => {

                    console.log(res)
                    this.setState({user: res.data})
                    
                })
    }

    componentDidMount() {

        this.getAllUsers()
    }


    render() {
        return (
            <div>
                <h1>Login foo</h1>
                <form>

                    <div>
                        <label htmlFor="username">UserName:</label>
                        <input type="text" name="username" />
                    </div>
                    <div>
                        <label htmlFor="password">Password:</label>
                        <input type="text" name="password" />
                    </div>
                </form>
            </div>
        );
    }
}

export default Login;