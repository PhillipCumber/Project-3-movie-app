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

    handleSubmit = (event) => {

        event.preventDefault()
        
        axios.post('/api/members', this.state.newUser)
            .then((res) => {

                console.log(res.data)
                res.redirect('/movies')
            })
    }


    render() {
        return (
            <div>
                <h1>Login foo</h1>
                <form onSubmit={this.handleSubmit}>

                    <div>
                        <label htmlFor="username">UserName:</label>
                        <input type="text" name="username" onChange={this.handleChange}/>
                    </div>
                    <div>
                        <label htmlFor="password">Password:</label>
                        <input type="text" name="password" onChange={this.handleChange}/>
                    </div>

                 <Link to="/mypage"><button type="submit">Login</button></Link>
                </form>
            </div>
        );
    }
}

export default Login;