import React, { Component } from 'react'
import axios from 'axios'

class Home extends Component {

    state = {

        movies: [],
    }

    getAllMovies = () => {

        axios.get('/movies')

             .then((res) => {

                console.log(res)
                this.setState({movies: res.data})
             })
    }

    componentDidMount() {

        this.getAllMovies()
    }

    render() {
        return (
            <div>
                {/* <h1>Watup</h1>

                {this.state.users.map((movie, i) => {

                       {movie.name}
                    
                })} */}
            </div>
        );
    }
}

export default Home;