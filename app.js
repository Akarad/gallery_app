// Import express framework
const express = require('express');

// Initialize express
const app = express();

// Set a static folder
app.use(express.static('public'));

// route for the index page
app.get('/', (req, res)=>{
    response.send('<h1> Welcome to my app</h1>')
 });
 

// Define the port number
const PORT = 5000;


app.listen(PORT, function(){
   console.log(`Server is listening on port ${PORT}`)
})