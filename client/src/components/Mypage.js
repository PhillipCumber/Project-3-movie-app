import React, { Component } from 'react';
import axios from 'axios'


class Mypage extends Component {

    state = {

        user: []
    }

    getUser = () => {

        axios.get('/api/users')
             .then((res) => {

                console.log(res)
                this.setState({user: res.data})

             })

    }

    componentDidMount() {

        this.getUser()
    }

    render() {
        return (
            <div>
              {this.state.user.map((user) => (

                  <h1>{user.name}</h1>
              ))}
            </div>
        );
    }
}

export default Mypage;