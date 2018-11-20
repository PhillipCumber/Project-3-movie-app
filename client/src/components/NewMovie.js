import React, { Component } from 'react';
import axios from 'axios'

class NewMovie extends Component {

    state = {

        newMovie: {

            title: '',
            img: '',
            description: '',
            actors: '',
            rating: '',
            genre: ''
        }

    }


    createMovie = () => {

        axios.post('/api/movies', {

            movies: this.state.movies
        })
            .then((res) => {

                this.setState({movies: res.data})
            })
    }

    handleChange = (event) => {

        console.log('changeme')
        let updateMovie = {...this.state.newMovie}
        updateMovie[event.target.name] = event.target.value
        this.setState({newMovie: updateMovie})
    }


    handleSubmit = (event) => {

        event.preventDefault()
        this.createMovie()
    }

    componentDidMount() {

        this.createMovie()
    }


    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                        <div>

                            <label htmlFor="title">Title</label>
                            <input type="text" name="title"
                                   onChange={this.handleChange}
                                   value={this.state.newMovie.title}
                    />

                        </div>
                    
                            <button type="submit">Add new Movie</button>
                    </form>

            </div>
        );
    }
}

export default NewMovie;