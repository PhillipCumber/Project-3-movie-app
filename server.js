let express = require('express')
let app = express()
let routes = require('./routes/index')

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/', routes)

app.use(express.static(__dirname + '/client/build/'));
app.get('/', (req,res) => {
    res.sendFile(__dirname + '/client/build/index.html')
  })

let PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server is listening on PORT: ${PORT}`)
})