const express = require('express');

const app = express()
const PORT = process.env.PORT || 5000


//middleware for parsing json
app.use(express.json())

// sample router
app.get('/', (req,res) =>{
    res.send('hello world');
})

// connect the server
app.listen(PORT,() =>{
   console.log(`Server is running on http://localhost:${PORT}`)
})