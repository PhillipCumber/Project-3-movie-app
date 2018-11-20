import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import NewMovie from './NewMovie';

let MovieStyle = styled.div`

    display: flex;
    font-size: 25px;
    border: rigid;
   

`

let IndyMovie = styled.div`

      margin-top: 40px;
`


class Movies extends Component {

    state = {

        movies: [],
        newMovie: {

            title: '',
            img: '',
            description: '',
            actors: '',
            rating: '',
            genre: ''
        }
    }

    handleChange = (event) => {

        console.log('changeme')
        let updateMovie = {...this.state.newMovie}
        updateMovie[event.target.name] = event.target.value
        this.setState({newMovie: updateMovie})
    }

    getAllMovies = () => {

        axios.get('/api/movies')

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
                                <img src={movie.img} />
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
 
                            </IndyMovie>
                       
                    </MovieStyle>
                   
                 
                ))}

                <Link to="/newmovie"><button>Add new Movie</button></Link>
            </div>
        );
    }
}

export default Movies;