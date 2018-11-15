let User = require('../models/User')
let Movie = require('../models/Movie')
let mongoose = require('./connections')

///Seeds for User model
let user1 = new User({

    name: 'Phillip Cumberlander',
    img: '',
    fav: 'Space Jam',
    email: 'cumberlander11@gmail.com',
    password: '1234'

})

User.create(user1)
    .then(users => {
        console.log('Saved User', users)
    })

////Seeds for Movie model

let movie1 = [

    {

    title: 'Space Jam',
    img: '',
    actors: 'Michael Jordan',
    description: 'Michael Jordan being fye',
    rating: 5,
    genre: 'Sci-fi'

    },

    {

        title: 'Space Jam',
        img: '',
        actors: 'Michael Jordan',
        description: 'Michael Jordan being fye',
        rating: 5,
        genre: 'Sci-fi'
    
    },

    {

        title: 'Space Jam',
        img: '',
        actors: 'Michael Jordan',
        description: 'Michael Jordan being fye',
        rating: 5,
        genre: 'Sci-fi'
    
    },

    {

        title: 'Space Jam',
        img: '',
        actors: 'Michael Jordan',
        description: 'Michael Jordan being fye',
        rating: 5,
        genre: 'Sci-fi'
    
    },

    {

        title: 'Space Jam',
        img: '',
        actors: 'Michael Jordan',
        description: 'Michael Jordan being fye',
        rating: 5,
        genre: 'Sci-fi'
    
    },

    {

        title: 'Space Jam',
        img: '',
        actors: 'Michael Jordan',
        description: 'Michael Jordan being fye',
        rating: 5,
        genre: 'Sci-fi'
    
    },

    {

        title: 'Space Jam',
        img: '',
        actors: 'Michael Jordan',
        description: 'Michael Jordan being fye',
        rating: 5,
        genre: 'Sci-fi'
    
    },

    {

        title: 'Space Jam',
        img: '',
        actors: 'Michael Jordan',
        description: 'Michael Jordan being fye',
        rating: 5,
        genre: 'Sci-fi'
    
    },

]


Movie.create(movie1)
    .then(movies => {
        console.log('Saved Movies', movies)
    })

