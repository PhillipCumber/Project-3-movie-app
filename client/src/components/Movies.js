import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

let MovieStyle = styled.div`

    display: flex;
    font-size: 25px;
    border: rigid;
    background: blue;

`

let IndyMovie = styled.div`

      margin-top: 40px;
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
                
                {this.state.movies.map((movie, i) => (
                
                    <MovieStyle className="big-contain">

                            <IndyMovie>
                                <div>
                                    {movie.img}
                                </div>

                                <div key={movie._id}>
                                        {movie.title}
                                </div>

                                <div>
                                    {movie.genre}
                                </div>

                                <div>
                                    {movie.description}
                                </div>

                                <div>
                                    {movie.rating}
                                </div>

                                <button>Add</button>
                            </IndyMovie>


                    </MovieStyle>
                 
                ))}

            </div>
        );
    }
}

export default Movies;