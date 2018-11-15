let express = require('express')
let app = express()
let routes = require('./routes/index')

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/', routes)


let PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server is listening on PORT: ${PORT}`)
})