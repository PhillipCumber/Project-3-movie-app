import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'


class Home extends Component {

    state = {

        movies: [],
    }

    getAllMovies = () => {

        axios.get('/movies')

             .then((res) => {

                console.log(res)
                this.setState({movies: res.data})
                console.log(this.state.movies)
             })
    }

    componentDidMount() {

        this.getAllMovies()
    }

    render() {
        return (
            <div>
                <h1>Watup</h1>

                {this.state.movies.map((movie) => {
                    
                        {movie.title}
                })}
            </div>
        );
    }
}

export default Home;