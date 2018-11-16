import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

let MovieStyle = styled.div`

    background: red;
    display: flex;
    justify-content: space-around;
    font-size: 30px;
    text-decoration: none;
    text: green
`

class Movies extends Component {

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

                <h1>hey watup fool
                    
                </h1>
                
                {this.state.movies.map((movie, i) => (

                    <MovieStyle key={movie._id}>

                        {movie.title}
                    </MovieStyle>
                 
                ))}

            </div>
        );
    }
}

export default Movies;