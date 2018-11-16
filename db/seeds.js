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
    img: 'https://images-na.ssl-images-amazon.com/images/I/512V2D7TFRL._SY445_.jpg',
    actors: 'Michael Jordan',
    description: 'Michael Jordan being fye',
    rating: 5,
    genre: 'Sci-fi'

    },

    {

        title: 'Coach Carter',
        img: 'https://images-na.ssl-images-amazon.com/images/I/51DIauCpD2L._SY355_.jpg',
        actors: 'Samuel Jackson',
        description: 'Sam Jackson yelling',
        rating: 5,
        genre: 'Drama'
    
    },

    {

        title: 'Blue Hill Avenue',
        img: 'https://m.media-amazon.com/images/M/MV5BMTU0MTUwMjM3Ml5BMl5BanBnXkFtZTgwMTc2NjgwMzE@._V1_.jpg',
        actors: 'Guy from that tyler perry show',
        description: 'BET Classic',
        rating: 4,
        genre: 'Drama'
    
    },

    {

        title: 'Freddy v Jason',
        img: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/70/Freddy_vs._Jason_movie.jpg/220px-Freddy_vs._Jason_movie.jpg',
        actors: 'The guy with the mask',
        description: 'Freddy fighting Jason',
        rating: 4,
        genre: 'Horror'
    
    },

    {

        title: 'Air Bud',
        img: 'https://upload.wikimedia.org/wikipedia/en/thumb/2/2b/Air_bud_poster.jpg/185px-Air_bud_poster.jpg',
        actors: 'A dog',
        description: 'A dog is an athlete',
        rating: 5,
        genre: 'Sci-fi'
    
    },

    {

        title: 'The Ring',
        img: 'https://upload.wikimedia.org/wikipedia/en/thumb/3/37/Theringpostere.jpg/220px-Theringpostere.jpg',
        actors: 'Lil girl in the tv',
        description: 'Jump the girl as she is coming out of the tv',
        rating: 5,
        genre: 'Horror'
    
    },

    {

        title: 'Land before Time',
        img: 'https://images-na.ssl-images-amazon.com/images/I/51GJAB%2BRhbL._SX342_.jpg',
        actors: 'Dinosaurs',
        description: 'More dinosaurs',
        rating: 5,
        genre: 'Sci-fi'
    
    },

    {

        title: 'More than a Game',
        img: 'https://images-na.ssl-images-amazon.com/images/I/51kkRLiZxvL._SY445_.jpg',
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

