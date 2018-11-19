import React, { Component } from 'react';
import axios from 'axios'


class Mypage extends Component {

    getUser = () => {

        axios.get('/api/members')
             .then((res) => {

                console.log(res)
             })

    }

    componentDidMount() {

        this.getUser()
    }

    render() {
        return (
            <div>
                <h1>My page</h1>
            </div>
        );
    }
}

export default Mypage;