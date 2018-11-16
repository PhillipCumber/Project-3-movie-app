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

        title: 'Coach Carter',
        img: '',
        actors: 'Samuel Jackson',
        description: 'Sam Jackson yelling',
        rating: 5,
        genre: 'Drama'
    
    },

    {

        title: 'Blue Hill Avenue',
        img: '',
        actors: 'Guy from that tyler perry show',
        description: 'BET Classic',
        rating: 4,
        genre: 'Drama'
    
    },

    {

        title: 'Freddy v Jason',
        img: '',
        actors: 'The guy with the mask',
        description: 'Freddy fighting Jason',
        rating: 4,
        genre: 'Horror'
    
    },

    {

        title: 'Air Bud',
        img: '',
        actors: 'A dog',
        description: 'A dog is an athlete',
        rating: 5,
        genre: 'Sci-fi'
    
    },

    {

        title: 'The Ring',
        img: '',
        actors: 'Lil girl in the tv',
        description: 'Jump the girl as she is coming out of the tv',
        rating: 5,
        genre: 'Horror'
    
    },

    {

        title: 'Land before Time',
        img: '',
        actors: 'Dinosaurs',
        description: 'More dinosaurs',
        rating: 5,
        genre: 'Sci-fi'
    
    },

    {

        title: 'More than a Game',
        img: '',
        actors: 'Lebron James',
        description: 'Lebron being fye',
        rating: 5,
        genre: 'Documentary'
    
    },

]


Movie.create(movie1)
    .then(movies => {
        console.log('Saved Movies', movies)
    })

