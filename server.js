let express = require('express')
let app = express()

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


let PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server is listening on PORT: ${PORT}`)
})